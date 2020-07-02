import { mkdirpSync, moveSync, readFileSync, removeSync } from 'fs-extra';
import * as glob from 'glob';
import ignore, { Ignore } from 'ignore';
import { dirname, relative, resolve } from 'path';
import * as tar from 'tar';
import { executeCommand, zipDirectory } from './common';

export default async function createArchive(packageToBundle: string) {
  const { root, workspaces } = findWorkspaces(process.cwd());

  if (!workspaces) {
    throw new Error(
      '⚠️ It seems like you tried to use lambda-pack within a directory that is not part of yarn workspaces.',
    );
  }

  const targetWorkspace = workspaces.find(
    ({ package: { name } }) => name === packageToBundle,
  );

  if (!targetWorkspace) {
    throw new Error(
      '⚠️ The target workspace does not exist in your workspaces.',
    );
  }

  const referencedWorkspaces = collectDependencies(workspaces, targetWorkspace);

  const phase1 = [
    'package.json',
    'yarn.lock',
    '.yarnrc',
    '.yarn/releases',
    '.config',
    `${relative(root, targetWorkspace.path)}/package.json`,
    ...referencedWorkspaces.map(
      ({ path }) => `${relative(root, path)}/package.json`,
    ),
  ];

  const phase2 = [
    // 'tsconfig.json',
    relative(root, targetWorkspace.path),
    ...referencedWorkspaces.map(({ path }) => relative(root, path)),
  ];

  const phase2Ignore = ignore();
  addIgnores(phase2Ignore, resolve(root, '.gitignore'));
  addIgnores(
    phase2Ignore,
    resolve(targetWorkspace.path, '.gitignore'),
    relative(root, targetWorkspace.path),
  );
  referencedWorkspaces.forEach(({ path }) =>
    addIgnores(phase2Ignore, resolve(path, '.gitignore'), relative(root, path)),
  );

  console.log(phase1);
  console.log(phase2);

  mkdirpSync('tmp');

  await tar.create({ file: 'tmp/context.tar', cwd: resolve(__dirname) }, [
    'Dockerfile',
  ]);
  await tar.replace(
    { file: 'tmp/context.tar', cwd: root, prefix: 'phase-1' },
    phase1,
  );
  await tar.replace(
    {
      file: 'tmp/context.tar',
      cwd: root,
      prefix: 'phase-2',
      filter: path => !phase2Ignore.ignores(path.replace(/^phase-2\//, '')),
    },
    phase2,
  );
  await tar.extract({ file: 'tmp/context.tar', cwd: 'tmp' });
  await tar.create({ gzip: true, file: 'tmp/context.tar.gz', cwd: 'tmp' }, [
    'phase-1',
    'phase-2',
    'Dockerfile',
  ]);

  await executeCommand(
    'docker build -t aim-built -f ./Dockerfile - < context.tar.gz',
    { cwd: 'tmp' },
    true,
  );
  const containerId = await executeCommand('docker run -d aim-built /bin/bash');

  await executeCommand(`docker cp ${containerId}:/aim-built built`, {
    cwd: 'tmp',
  });
  await executeCommand(`docker rm ${containerId}`);

  removeSync('tmp/built/node_modules/@aim');
  removeSync('tmp/built/.yarn');
  removeSync('tmp/built/.yarnrc');
  removeSync('tmp/built/package.json');
  removeSync('tmp/built/yarn.lock');
  moveSync('tmp/built/packages', 'tmp/built/node_modules/@aim');

  await zipDirectory(
    'tmp/built',
    resolve(root, packageToBundle.replace(/\//g, '-') + '.zip'),
  );

  removeSync('tmp');
}

function findWorkspaces(
  dir: string,
): { root: string; workspaces?: Workspace[] } {
  const path = resolve(dir, 'package.json');
  if (path.endsWith('/')) {
    return { root: path };
  }
  try {
    const packageJson = JSON.parse(
      readFileSync(resolve(dir, 'package.json'), 'utf8'),
    );
    if (packageJson?.workspaces) {
      const workspaces: string[] = packageJson?.workspaces;
      const cwd = dirname(path);
      return {
        root: cwd,
        workspaces: workspaces.flatMap(workspace =>
          glob
            .sync(workspace, { cwd })
            .flatMap(workspacePath => {
              try {
                return {
                  package: JSON.parse(
                    readFileSync(
                      resolve(cwd, workspacePath, 'package.json'),
                      'utf8',
                    ),
                  ),
                  path: resolve(cwd, workspacePath),
                };
              } catch (err) {
                //
                return;
              }
            })
            .filter(Boolean)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .map(a => a!),
        ),
      };
    }
  } catch (err) {
    //
  }
  return findWorkspaces(resolve(dir, '..'));
}

function collectDependencies(
  workspaces: Workspace[],
  workspace: Workspace,
  alreadyCollected: Workspace[] = [workspace],
): Workspace[] {
  const dependencies = Object.keys({
    ...workspace.package.dependencies,
    ...workspace.package.devDependencies,
  })
    .map(dep => workspaces.find(({ package: { name } }) => name === dep))
    .filter(
      dep =>
        dep &&
        !alreadyCollected.some(adep => adep.package.name === dep.package.name),
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .map(a => a!);

  return [
    ...dependencies,
    ...dependencies.flatMap(dep =>
      collectDependencies(workspaces, dep, [
        ...alreadyCollected,
        ...dependencies,
      ]),
    ),
  ];
}

function addIgnores(ig: Ignore, path: string, scope?: string) {
  try {
    ig.add((scope ? `${scope}/` : ``) + 'package.json');
    readFileSync(path, 'utf8')
      .split('\n')
      .filter(Boolean)
      .forEach(pattern => ig.add((scope ? `${scope}/` : ``) + pattern));
  } catch (err) {
    //
  }
}

interface PackageJson {
  name: string;
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
}

interface Workspace {
  package: PackageJson;
  path: string;
}
