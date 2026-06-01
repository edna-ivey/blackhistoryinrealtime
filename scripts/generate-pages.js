const fs = require('fs');
const path = require('path');
const { getAllContentFiles, escapeHTML } = require('./lib/utils');
const { parseContentFile } = require('./lib/content-parser');
const { ContentValidator } = require('./lib/validator');

const TEMPLATE_PATH = path.join(__dirname, '../content/templates/encyclopedia-entry.html');
const OUTPUT_DIR   = path.join(__dirname, '../generated/pages');

// ── 1. Load template ─────────────────────────────────────────────────────────

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error(`❌ Template not found: ${TEMPLATE_PATH}`);
  process.exit(1);
}
const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// ── 2. Find content files ────────────────────────────────────────────────────

const files = getAllContentFiles();

console.log('─'.repeat(50));
console.log('PAGE GENERATION');
console.log('─'.repeat(50));

if (files.length === 0) {
  console.warn('⚠️  No markdown files found under content/encyclopedia.');
  console.warn('    Nothing to generate.');
  process.exit(0);
}

console.log(`📁 Files found:    ${files.length}`);

// ── 3. Parse ─────────────────────────────────────────────────────────────────

const entries = [];
const parseErrors = [];

files.forEach(file => {
  try {
    entries.push(parseContentFile(file));
  } catch (err) {
    parseErrors.push({ file, error: err.message });
  }
});

console.log(`📄 Entries parsed: ${entries.length}`);

if (parseErrors.length > 0) {
  console.error('\n❌ Parse errors — cannot generate:');
  parseErrors.forEach(e => console.error(`   ${e.file}\n   ${e.error}`));
  process.exit(1);
}

// ── 4. Validate ──────────────────────────────────────────────────────────────

const validator = new ContentValidator();
const results = validator.validateAll(entries);
console.log(validator.formatResults(results));

if (results.invalid > 0) {
  console.error('Validation failed. Fix errors before generating pages.');
  process.exit(1);
}

// ── 5. Generate pages ────────────────────────────────────────────────────────

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

let generated = 0;

entries.forEach(entry => {
  const html = renderPage(template, entry);
  const outputPath = path.join(OUTPUT_DIR, `${entry.id}.html`);
  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`✅ generated/pages/${entry.id}.html`);
  generated++;
});

console.log(`\n${generated} page(s) written to generated/pages/`);

// ── Rendering ────────────────────────────────────────────────────────────────

function renderTimeline(items) {
  if (!items || items.length === 0) return '';
  const rows = items.map(item =>
    '  <div class="timeline-item">\n'
    + `    <div class="tl-year">${escapeHTML(item.year)}</div>\n`
    + `    <div class="tl-event">${escapeHTML(item.event)}</div>\n`
    + '  </div>'
  ).join('\n');
  return `<div class="timeline-strip">\n${rows}\n</div>`;
}

function renderPage(tmpl, entry) {
  const quote = entry.quote || {};

  const replacements = [
    // Structural — output path depth relative to site root
    ['{{BASE_PATH}}',       '../../'],

    // Plain text / attribute values — escape HTML special characters
    ['{{ENTRY_ID}}',        entry.id                          || ''],
    ['{{NAME}}',            escapeHTML(entry.name             || '')],
    ['{{VOL}}',             escapeHTML(entry.vol              || '')],
    ['{{DATES}}',           escapeHTML(entry.dates            || '')],
    ['{{CATEGORY}}',        escapeHTML(entry.category         || '')],
    ['{{DESC}}',            escapeHTML(entry.desc             || '')],
    ['{{TAGLINE}}',         escapeHTML(entry.tagline          || '')],
    ['{{QUOTE_TEXT}}',      escapeHTML(quote.text             || '')],
    ['{{QUOTE_SOURCE}}',    escapeHTML(quote.source           || '')],
    ['{{QUIZ_DAY}}',        escapeHTML(String(entry.quizDay   || ''))],

    // Already-rendered HTML — insert raw, no escaping
    ['{{STORY}}',           entry.story                       || ''],
    ['{{WHY_IT_MATTERS}}',  entry.whyItMatters                || ''],

    // Already-rendered HTML — timeline built from entry.timeline array
    ['{{TIMELINE}}',        renderTimeline(entry.timeline)],

    // Reserved — empty until future phases add this data
    ['{{RELATED_ENTRIES}}', ''],
    ['{{EXTERNAL_LINKS}}',  ''],
  ];

  // split/join avoids String.replace() special $-sequence expansion
  // which would corrupt HTML content containing $& $' $` etc.
  return replacements.reduce(
    (html, [placeholder, value]) => html.split(placeholder).join(value),
    tmpl
  );
}
