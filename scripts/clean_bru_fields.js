const fs = require('fs');
const { execSync } = require('child_process');

function cleanBruFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let cleaned = content
    .replace(/(.*\S)\s+seq:\s*\d*/g, '$1\n  seq: 1')
    .replace(/^\s*seq:\s*\d*\s*\n*\s*}?/gm, '  seq: 1\n}');

  fs.writeFileSync(filePath, cleaned, 'utf8');
  console.log(`🧹 Limpieza aplicada a: ${filePath}`);
}

function getStagedBruFiles() {
  const output = execSync('git diff --cached --name-only --diff-filter=ACM')
    .toString()
    .split('\n')
    .filter((file) => file.endsWith('.bru'));

  return output;
}

function main() {
  const files = getStagedBruFiles();
  if (files.length === 0) return;

  for (const file of files) {
    if (fs.existsSync(file)) {
      cleanBruFile(file);
      execSync(`git add "${file}"`);
    }
  }
}

main();
