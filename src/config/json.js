import { join } from 'path';
import { readFileSync } from 'fs'

export default function loadPackageJSON() {
  const packageJSONPath = join(process.cwd(), 'package.json');
  return JSON.parse(readFileSync(packageJSONPath));
}
