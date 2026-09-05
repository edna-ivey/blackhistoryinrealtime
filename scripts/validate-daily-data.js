const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { getAllContentFiles } = require('./lib/utils');
const { parseAllContent } = require('./lib/content-parser');
const { DAILY_COVERAGE } = require('../content/daily/2026-coverage');
const ALLOWED_TAGS = require('../content/config/tags.json');

const ROOT = path.join(__dirname, '..');
const COVERAGE_START = process.env.COVERAGE_START || '2026-02-01';
const COVERAGE_END = process.env.COVERAGE_END || '2026-10-31';
const SOURCE_ONLY = process.argv.includes('--source-only');
const APPROVED_REPEATED_SLUGS = new Set([
  'redlining',
  'coretta-scott-king',
  'dorothy-height',
  'althea-gibson',
  'barbara-jordan',
  'sports-integration',
  'little-rock-nine',
  'frederick-douglass',
  'paul-robeson',
  'muhammad-ali',
  'emmett-till',
  'jacob-lawrence',
]);

function extractArraySource(source, marker) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Cannot find ${marker}`);
  const bracketStart = source.indexOf('[', start);
  if (bracketStart === -1) throw new Error(`Cannot find array after ${marker}`);
  let depth = 0;
  let quote = null;
  let templateDepth = 0;
  let escaped = false;
  for (let i = bracketStart; i < source.length; i++) {
    const ch = source[i];
    const prev = source[i - 1];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (quote && ch === '\\') {
      escaped = true;
      continue;
    }
    if (quote === '`' && ch === '$' && source[i + 1] === '{') {
      templateDepth++;
      i++;
      continue;
    }
    if (quote && ch === quote && !(quote === '`' && templateDepth > 0)) {
      quote = null;
      continue;
    }
    if (!quote && (ch === '"' || ch === "'" || ch === '`')) {
      quote = ch;
      continue;
    }
    if (!quote && ch === '[') depth++;
    if (!quote && ch === ']') {
      depth--;
      if (depth === 0) return source.slice(bracketStart, i + 1);
    }
    if (quote === '`' && templateDepth > 0 && ch === '}') {
      templateDepth--;
    }
  }
  throw new Error(`Cannot close array for ${marker}`);
}

function loadLegacyData() {
  const indexSource = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const arraySource = extractArraySource(indexSource, 'const DATA =');
  const sandbox = { DATA: [] };
  vm.createContext(sandbox);
  vm.runInContext(`DATA = ${arraySource};`, sandbox);
  return sandbox.DATA;
}

function markdownDailyEntries() {
  const files = getAllContentFiles();
  const { entries, errors } = parseAllContent(files);
  if (errors.length) {
    throw new Error(errors.map(e => `${e.file}: ${e.error}`).join('\n'));
  }
  return entries
    .filter(entry => entry.quizDay)
    .map(entry => ({
      fullDate: entry.quizDay,
      category: entry.vol ? (entry.vol.split(' · ')[1] || entry.category) : entry.category,
      title: entry.subject || entry.name,
      question: stripTags(entry.question || ''),
      options: entry.options || [],
      answer: entry.answer,
      answerText: entry.answerText,
      subject: entry.name,
      dates: entry.dates,
      encyclopediaSlug: entry.id,
      encyclopediaPath: `generated/pages/${entry.id}.html`,
      story: entry.dailyStory || '',
      whyItMatters: entry.whyItMatters || '',
      tags: entry.tags || [],
    }));
}

function stripTags(value) {
  return String(value).replace(/<[^>]+>/g, '').trim();
}

function dateRange(start, end) {
  const dates = [];
  let current = new Date(`${start}T00:00:00Z`);
  const last = new Date(`${end}T00:00:00Z`);
  while (current <= last) {
    dates.push(current.toISOString().slice(0, 10));
    current.setUTCDate(current.getUTCDate() + 1);
  }
  return dates;
}

function pageExists(entry) {
  const pagePath = entry.encyclopediaPath
    || (entry.encyclopediaSlug ? `encyclopedia/${entry.encyclopediaSlug}.html` : '');
  if (!pagePath) return false;
  if (SOURCE_ONLY && pagePath.startsWith('generated/pages/')) return true;
  return fs.existsSync(path.join(ROOT, pagePath));
}

function validateEntry(entry, errors) {
  const label = `${entry.fullDate || 'NO-DATE'} ${entry.subject || entry.title || 'NO-SUBJECT'}`;
  const required = ['fullDate', 'category', 'title', 'question', 'answerText', 'subject', 'dates', 'story', 'whyItMatters'];
  required.forEach(field => {
    if (!entry[field] || !String(entry[field]).trim()) errors.push(`${label}: missing ${field}`);
  });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.fullDate || '')) errors.push(`${label}: invalid fullDate`);
  if (!Array.isArray(entry.options) || entry.options.length !== 4) errors.push(`${label}: must have exactly 4 options`);
  if (!Number.isInteger(entry.answer) || entry.answer < 0 || entry.answer > 3) errors.push(`${label}: answer must be integer 0-3`);
  if (entry.fullDate >= '2026-09-01') {
    if (!entry.answerExplanation || String(entry.answerExplanation).trim().split(/\s+/).length < 12) {
      errors.push(`${label}: September entries require a substantive answerExplanation`);
    }
    if (!entry.igCaption || !String(entry.igCaption).trim()) {
      errors.push(`${label}: September entries require igCaption`);
    }
  }
  if (Array.isArray(entry.options) && Number.isInteger(entry.answer) && entry.options[entry.answer] && !entry.answerText.toLowerCase().includes(entry.options[entry.answer].split(' ')[0].toLowerCase())) {
    // Advisory only: answer explanations may contain expanded labels.
  }
  if (!entry.encyclopediaSlug && !entry.encyclopediaPath) errors.push(`${label}: missing encyclopediaSlug or encyclopediaPath`);
  if (entry.tags && Array.isArray(entry.tags)) {
    entry.tags.forEach(tag => {
      if (!ALLOWED_TAGS.includes(tag)) errors.push(`${label}: invalid tag "${tag}"`);
    });
  }
  if (!pageExists(entry)) errors.push(`${label}: encyclopedia target does not exist`);
  const combined = JSON.stringify(entry);
  if (/TODO|TBD|Lorem ipsum|Loading\.\.\.|{{[^}]+}}/.test(combined)) errors.push(`${label}: unresolved placeholder text`);
}

function validateSourceLedger(entries, errors) {
  entries.forEach(entry => {
    const label = `${entry.fullDate || 'NO-DATE'} ${entry.subject || entry.title || 'NO-SUBJECT'}`;
    if (!Array.isArray(entry.sources) || entry.sources.length < 2) {
      errors.push(`${label}: scheduled entries must include at least two research source URLs`);
      return;
    }
    entry.sources.forEach(source => {
      try {
        const url = new URL(source);
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error('unsupported protocol');
      } catch {
        errors.push(`${label}: invalid source URL "${source}"`);
      }
    });
  });
}

function run() {
  const errors = [];
  const warnings = [];
  const legacy = loadLegacyData();
  const markdown = markdownDailyEntries();
  const sourceFuture = DAILY_COVERAGE.map(entry => ({
    ...entry,
    encyclopediaPath: entry.encyclopediaPath || `generated/pages/${entry.encyclopediaSlug}.html`,
    story: [entry.lede, entry.context, entry.turning].filter(Boolean).join(' '),
  }));
  validateSourceLedger(DAILY_COVERAGE, errors);

  const byDate = new Map();
  const combined = [];
  [legacy, markdown, sourceFuture].forEach(group => {
    group.forEach(entry => {
      if (!byDate.has(entry.fullDate)) {
        byDate.set(entry.fullDate, entry);
        combined.push(entry);
      }
    });
  });

  combined.forEach(entry => validateEntry(entry, errors));

  dateRange(COVERAGE_START, COVERAGE_END).forEach(date => {
    if (!byDate.has(date)) errors.push(`Missing required daily entry: ${date}`);
  });

  const slugEntries = new Map();
  combined.forEach(entry => {
    const slug = entry.encyclopediaSlug || entry.encyclopediaPath;
    if (!slug) return;
    if (!slugEntries.has(slug)) slugEntries.set(slug, []);
    slugEntries.get(slug).push(entry);
  });
  slugEntries.forEach((entries, slug) => {
    const repeatedEntriesAreIntentional = entries.slice(1).every(entry => entry.allowSharedEncyclopedia);
    if (entries.length > 1 && !APPROVED_REPEATED_SLUGS.has(slug) && !repeatedEntriesAreIntentional) {
      errors.push(`${slug}: referenced by multiple dates (${entries.map(entry => entry.fullDate).join(', ')})`);
    }
  });

  const questionDates = new Map();
  combined.forEach(entry => {
    const question = String(entry.question || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (!questionDates.has(question)) questionDates.set(question, []);
    questionDates.get(question).push(entry.fullDate);
  });
  questionDates.forEach((dates, question) => {
    if (question && dates.length > 1) errors.push(`Duplicate quiz question (${dates.join(', ')}): ${question}`);
  });

  console.log('Daily coverage validation');
  console.log(`Coverage: ${COVERAGE_START} through ${COVERAGE_END}`);
  console.log(`Combined entries: ${combined.length}`);
  console.log(`Warnings: ${warnings.length}`);
  warnings.slice(0, 25).forEach(warn => console.log(`  WARN ${warn}`));
  if (warnings.length > 25) console.log(`  WARN ... ${warnings.length - 25} more`);

  if (errors.length) {
    console.error(`Errors: ${errors.length}`);
    errors.forEach(error => console.error(`  ERROR ${error}`));
    process.exit(1);
  }

  console.log('Daily coverage valid.');
}

run();
