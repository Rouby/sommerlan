import { processingSync } from '.';

try {
  const path = processingSync(process.argv.slice(2)[0]);
  console.log('Bundle located at %s', path);
} catch (err) {
  console.log(err);
  process.exit(1);
}
