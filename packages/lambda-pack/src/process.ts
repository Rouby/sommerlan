import {
  copy,
  copySync,
  mkdirpSync,
  readJSONSync,
  removeSync,
  writeFileSync,
  writeJSONSync,
} from 'fs-extra';
import * as glob from 'glob';
import { resolve } from 'path';
import {
  buildDir,
  executeCommand,
  workspaceInfos,
  zipDirectory,
} from './common';
import bundle from './webpack';

module.exports = () => processing;

export async function processing(pkg: string) {
  const workspaces = await workspaceInfos();
  const resolved: string[] = [];

  const dependencies = collectDependencies(pkg);
  const { lambda } = readWorkspacePackageJson(pkg);

  const pkgJson = { name: 'bundle', dependencies };

  const bundlePath = resolve(buildDir, pkg);

  mkdirpSync(bundlePath);

  copySync(
    resolve(__dirname, '../../../yarn.lock'),
    resolve(bundlePath, 'yarn.lock'),
  );
  writeFileSync(resolve(bundlePath, '.yarnrc.yml'), 'nodeLinker: node-modules');
  writeJSONSync(resolve(bundlePath, 'package.json'), pkgJson, { spaces: 2 });

  await Promise.all([
    bundle(pkg),
    executeCommand('yarn install', { cwd: bundlePath }, true),
    copyLambdaIncludes(),
  ]);

  removeSync(resolve(bundlePath, '.yarn'));

  console.log('🔨 Zipping...');

  await zipDirectory(
    bundlePath,
    resolve(buildDir, pkg.replace(/\//g, '-') + '.zip'),
  );

  return resolve(buildDir, pkg.replace(/\//g, '-') + '.zip');

  function collectDependencies(
    pkg: string,
    deps: { [key: string]: string } = {},
  ): { [key: string]: string } {
    const workspace = workspaces[pkg];
    if (workspace && !resolved.includes(pkg)) {
      resolved.push(pkg);
      const { dependencies = {} } = readWorkspacePackageJson(pkg);
      const mismatchedDeps = Object.entries(dependencies).filter(
        ([key, val]) => deps[key] && deps[key] !== val,
      );
      if (mismatchedDeps.length > 0) {
        console.log(
          `🔥 Mismatched dependencies: ${mismatchedDeps.map(
            ([key, val]) => `${key}: ${deps[key]} vs ${val}`,
          )}`,
        );
      }
      return {
        ...workspace.workspaceDependencies.reduce(
          (acc, p) => collectDependencies(p, acc),
          {
            ...deps,
            ...Object.fromEntries(
              Object.entries(dependencies).filter(
                ([key]) => !(key in workspaces),
              ),
            ),
          },
        ),
      };
    }
    return deps;
  }

  function readWorkspacePackageJson(pkg: string) {
    const workspace = workspaces[pkg];
    if (workspace) {
      const pkgJson = readJSONSync(
        resolve(__dirname, '../../..', workspace.location, 'package.json'),
      ) as {
        dependencies?: { [key: string]: string };
        lambda?: { includes?: string[] };
      };
      return pkgJson;
    }
    throw new Error(`Could not read workspace ${pkg}.`);
  }

  async function copyLambdaIncludes() {
    const includes = lambda?.includes;
    if (includes) {
      const workspacePath = resolve(
        __dirname,
        '../../..',
        workspaces[pkg]?.location ?? '.',
      );
      await Promise.all(
        includes.map((pattern) =>
          new Promise<string[]>((resolve, reject) =>
            glob(pattern, { cwd: workspacePath }, (err, matches) =>
              err ? reject(err) : resolve(matches),
            ),
          ).then((matches) => {
            return Promise.all(
              matches.map((file) =>
                copy(resolve(workspacePath, file), resolve(bundlePath, file)),
              ),
            );
          }),
        ),
      );
    }
  }
}
