import * as archiver from 'archiver';
import { exec, ExecOptions } from 'child_process';
import { createWriteStream } from 'fs-extra';
import { resolve } from 'path';

export const buildDir = resolve(__dirname, '../build');

export async function executeCommand(
  command: string,
  options?: ExecOptions,
  output = false,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const proc = exec(command, { ...options }, (err, stdout) =>
      err ? reject(err) : resolve(stdout.toString().trim()),
    );
    if (output) {
      proc.on('data', (data) => console.log(data.toString()));
      proc.stdout?.on('data', (data) => console.log(data.toString()));
    }
  });
}

export async function workspaceInfos(): Promise<{
  [key: string]:
    | { location: string; workspaceDependencies: string[] }
    | undefined;
}> {
  try {
    return JSON.parse(await executeCommand('yarn workspaces info'));
  } catch {
    return (await executeCommand('yarn workspaces list -v --json'))
      .split('\n')
      .map(
        (json) =>
          JSON.parse(json) as {
            name: string;
            location: string;
            workspaceDependencies: string[];
          },
      )
      .reduce(
        (acc, d) => ({ ...acc, [d.name]: d }),
        {} as {
          [key: string]:
            | { location: string; workspaceDependencies: string[] }
            | undefined;
        },
      );
  }
}

export async function zipDirectory(input: string, output: string) {
  return new Promise(async (resolve) => {
    const zipOutputStream = createWriteStream(output);
    const zipArchive = archiver('zip', { zlib: { level: 9 } });

    zipArchive.on('close', resolve);

    zipArchive.pipe(zipOutputStream);
    zipArchive.directory(input, false);
    await zipArchive.finalize();

    resolve();
  });
}
