const fs   = require('fs');
const path = require('path');
const { slugify } = require('./lib/utils');

const TEMPLATE_PATH = path.join(__dirname, '../content/templates/person-entry.md');
const CONTENT_DIR   = path.join(__dirname, '../content/encyclopedia');

// ── Validate argument ────────────────────────────────────────────────────────

const name = (process.argv[2] || '').trim();

if (!name) {
  console.error('Usage:   node scripts/new-entry.js "Entry Name"');
  console.error('Example: node scripts/new-entry.js "Mary McLeod Bethune"');
  process.exit(1);
}

const id = slugify(name);

if (!id) {
  console.error(`❌ Could not generate a valid ID from: "${name}"`);
  console.error('   Use letters, numbers, and spaces. Punctuation is stripped.');
  process.exit(1);
}

// ── Guard against missing template or duplicate entry ────────────────────────

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('❌ Template not found: content/templates/person-entry.md');
  process.exit(1);
}

const outputPath = path.join(CONTENT_DIR, `${id}.md`);

if (fs.existsSync(outputPath)) {
  console.error(`❌ Entry already exists: content/encyclopedia/${id}.md`);
  console.error('   Rename or delete the existing file before creating a new one.');
  process.exit(1);
}

// ── Create entry from template ───────────────────────────────────────────────

const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

const content = template
  .split('{{ID}}').join(id)
  .split('{{NAME}}').join(name);

fs.mkdirSync(CONTENT_DIR, { recursive: true });
fs.writeFileSync(outputPath, content, 'utf-8');

// ── Report ───────────────────────────────────────────────────────────────────

console.log(`✅ Created: content/encyclopedia/${id}.md`);
console.log('');
console.log('Frontmatter to fill in:');
console.log('  quizDay   "YYYY-MM-DD"  — must be unique across all entries');
console.log('  vol       "Month D · Category & Theme"');
console.log('  dates     "YYYY — YYYY"  (or YYYY, Ongoing, Present, c. YYYY)');
console.log('  tags      3–15 tags from content/config/tags.json');
console.log('  desc      one sentence SEO description');
console.log('  tagline   evocative hero line');
console.log('  barClass  politics | innovation | erasure | culture | systems | ""');
console.log('');
console.log('Content sections to write:');
console.log('  ## Timeline       key dates as "- YYYY: description"');
console.log('  ## Question       quiz question text');
console.log('  ## Options        four items starting with -');
console.log('  ## Answer         single digit 0–3');
console.log('  ## Answer Text    explanation of correct answer');
console.log('  ## Subject        entry name + quiz topic');
console.log('  ## Story          full biographical narrative');
console.log('  ## Why It Matters present-day relevance');
console.log('  ## Pull Quote     "Quote text." — Source');
console.log('  ## External Links - URL | Source | Title  (one per line)');
console.log('');
console.log('Validate when ready:');
console.log('  npm run validate');
