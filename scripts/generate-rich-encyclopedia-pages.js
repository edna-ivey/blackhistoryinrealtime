const fs = require('fs');
const path = require('path');
const { ENTRIES } = require('../content/encyclopedia-rich');
const { renderRichPage } = require('./lib/rich-encyclopedia-renderer');

const ROOT = path.join(__dirname, '..');

function defaultOutputPath(entry) {
  return entry.outputPath || `generated/pages/${entry.encyclopediaSlug}.html`;
}

function basePathFor(outputPath) {
  const depth = outputPath.split('/').length - 1;
  return depth === 0 ? '' : '../'.repeat(depth);
}

function run() {
  let written = 0;

  ENTRIES.forEach(entry => {
    const outputPath = defaultOutputPath(entry);
    const absolutePath = path.join(ROOT, outputPath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, renderRichPage({
      ...entry,
      basePath: basePathFor(outputPath),
    }), 'utf8');
    written++;
  });

  console.log('Generated rich encyclopedia pages');
  console.log(`Entries:   ${written}`);
}

run();
