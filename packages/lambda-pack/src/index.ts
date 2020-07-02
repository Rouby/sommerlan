/// <reference path="./sync-rpc.d.ts" />

export { processing } from './process';
import * as forceSync from 'sync-rpc';

export function processingSync(packageName: string): string {
  const syncProcessing = forceSync(require.resolve('./process'));
  return syncProcessing(packageName);
}
