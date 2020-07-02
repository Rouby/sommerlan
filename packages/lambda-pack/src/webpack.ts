import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as TerserPlugin from 'terser-webpack-plugin';
import { inspect } from 'util';
import * as webpack from 'webpack';
import { buildDir, workspaceInfos } from './common';

export default async function build(pkg: string) {
  const workspaces = await workspaceInfos();

  const workspace = workspaces[pkg];

  if (!workspace) {
    throw new Error(
      '⚠️ The target workspace does not exist in your workspaces.',
    );
  }

  console.log('🔨 Bundling...');

  process.chdir(resolve(__dirname, '../../..', workspace.location));

  const { source = './src/index.ts' } = JSON.parse(
    readFileSync('package.json', 'utf8'),
  ) as { source?: string | string[] | { [key: string]: string | string[] } };

  const compiler = createCompiler(source, pkg);

  const stats = await new Promise<webpack.Stats>((resolve, reject) =>
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    }),
  );

  if (stats.hasErrors()) {
    throw new Error(
      `⚠️ The build failed with errors.\n\n\n${inspect(
        stats.compilation.errors,
      )}`,
    );
  }

  if (stats.hasWarnings()) {
    throw new Error(
      `⚠️ The build failed with warnings.\n\n\n${inspect(
        stats.compilation.warnings,
      )}}`,
    );
  }

  console.log('✅ Bundling successful');

  stats
    .toJson()
    .assets?.forEach((asset) =>
      console.log(
        `   ${asset.name.padEnd(20)} ${(asset.size / 1024)
          .toFixed(1)
          .padStart(4)} kB`,
      ),
    );
}

function createCompiler(
  entry: string | string[] | webpack.Entry,
  output: string,
) {
  return webpack({
    mode: 'production',
    target: 'node',
    context: process.cwd(),
    node: {
      __dirname: true,
    },
    devtool: 'source-map',
    entry,
    module: {
      rules: [
        {
          test: /\.g(raph)?ql$/,
          loader: require.resolve('raw-loader'),
          options: {
            esModule: false,
          },
        },
        {
          test: /\.ts$/,
          use: require.resolve('ts-loader'),
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    output: {
      path: resolve(buildDir, output),
      filename: '[name].js',
      libraryTarget: 'commonjs',
    },
    externals: [
      (_context, request, cb) => {
        if (/^(\.|\/|@aim\/)/.test(request) && !request.includes('__tests')) {
          cb(undefined as any, undefined as any);
        } else {
          // mark the module as external
          return cb(null, 'commonjs ' + request);
        }
      },
    ],
    // performance: {
    //   hints: 'error',
    //   maxAssetSize: 1048576, // Max size of deployment bundle in Lambda@Edge Viewer Request
    //   maxEntrypointSize: 1048576, // Max size of deployment bundle in Lambda@Edge Viewer Request
    // },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          extractComments: true,
        }),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.COGNITO_USER_POOL_ID': JSON.stringify(
          process.env.COGNITO_USER_POOL_ID,
        ),
        'process.env.COGNITO_CLIENT_ID': JSON.stringify(
          process.env.COGNITO_CLIENT_ID,
        ),
      }),
    ],
  });
}
