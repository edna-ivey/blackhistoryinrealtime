const { getAllContentFiles } = require('./lib/utils');
const { parseAllContent } = require('./lib/content-parser');
const { ContentValidator } = require('./lib/validator');

const files = getAllContentFiles();

console.log('─'.repeat(50));
console.log('CONTENT VALIDATION');
console.log('─'.repeat(50));

if (files.length === 0) {
  console.warn('⚠️  No markdown files found under content/encyclopedia.');
  console.warn('    Add .md files before running validation.');
  process.exit(0);
}

console.log(`📁 Files found:    ${files.length}`);
files.forEach(f => console.log(`   ${f.replace(process.cwd() + '/', '')}`));

const { entries, errors: parseErrors } = parseAllContent(files);

console.log(`📄 Entries parsed: ${entries.length}`);

if (parseErrors.length > 0) {
  console.log('\n❌ Parse errors:');
  parseErrors.forEach(e => console.log(`   ${e.file}\n   ${e.error}`));
}

const validator = new ContentValidator();
const results = validator.validateAll(entries);

console.log(validator.formatResults(results));

const failed = results.invalid > 0 || parseErrors.length > 0;

if (failed) {
  console.error('Validation failed. Fix errors above before generating pages.');
  process.exit(1);
}

console.log('✅ All entries valid. Safe to generate.');
process.exit(0);
