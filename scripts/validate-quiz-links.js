#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const INDEX_FILE = path.join(ROOT, 'index.html');
const GENERATED_DATA_FILE = path.join(ROOT, 'generated', 'encyclopedia-data.js');
const GENERATED_DAILY_FILE = path.join(ROOT, 'generated', 'daily-data.js');

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function extractInitialData() {
  const html = read(INDEX_FILE);
  const start = html.indexOf('const DATA = [');
  if (start === -1) throw new Error('Could not find embedded DATA array in index.html');
  const end = html.indexOf('\n];', start);
  if (end === -1) throw new Error('Could not find end of embedded DATA array in index.html');
  const code = html.slice(start, end + 3);
  const context = vm.createContext({});
  vm.runInContext(`${code}\nthis.DATA = DATA;`, context, { filename: 'index.html DATA' });
  return context.DATA;
}

function loadGeneratedVar(file, varName) {
  const context = vm.createContext({});
  vm.runInContext(`${read(file)}\nthis.${varName} = ${varName};`, context, { filename: file });
  return context[varName] || [];
}

function buildRuntimeDailyData() {
  const data = extractInitialData();
  const existing = new Set(data.map(entry => entry.fullDate));

  loadGeneratedVar(GENERATED_DATA_FILE, 'ENCYCLOPEDIA').forEach(entry => {
    if (!entry.quizDay || existing.has(entry.quizDay)) return;
    data.push({
      fullDate: entry.quizDay,
      category: entry.category || 'History',
      title: entry.name,
      question: `Learn more about ${entry.name}.`,
      options: ['Open the encyclopedia', 'Read another entry', 'Return tomorrow', 'Explore the archive'],
      answer: 0,
      answerText: entry.name,
      subject: entry.name,
      dates: entry.dates || '',
      encyclopediaSlug: entry.slug,
      encyclopediaPath: `generated/pages/${entry.slug}.html`,
      story: entry.description || '',
      whyItMatters: entry.significance || ''
    });
    existing.add(entry.quizDay);
  });

  loadGeneratedVar(GENERATED_DAILY_FILE, 'FUTURE_DAILY').forEach(entry => {
    if (!entry.fullDate || existing.has(entry.fullDate)) return;
    data.push(entry);
    existing.add(entry.fullDate);
  });

  return data.sort((a, b) => a.fullDate.localeCompare(b.fullDate));
}

function walkHtml(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    if (entry.name === '.claude') return;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkHtml(full));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  });
  return files;
}

function pageSlug(file, html) {
  const dataEntry = html.match(/<body[^>]*\bdata-entry-id=["']([^"']+)["']/i);
  if (dataEntry) return dataEntry[1];
  return path.basename(file, '.html');
}

function normalizePathSlug(entry) {
  if (!entry.encyclopediaPath) return '';
  return path.basename(entry.encyclopediaPath, '.html');
}

function isSameEntry(entry, slug) {
  return entry.encyclopediaSlug === slug || normalizePathSlug(entry) === slug;
}

function extractQuizLinks(file) {
  const html = read(file);
  const links = [];
  const anchorPattern = /<a\b([^>]*\bclass=["'][^"']*(?:quiz-card|quiz-link-card|challenge-link)[^"']*["'][^>]*)>/gi;
  let match;
  while ((match = anchorPattern.exec(html)) !== null) {
    const attrs = match[1];
    const hrefMatch = attrs.match(/\bhref=["']([^"']+)["']/i);
    if (!hrefMatch) continue;
    const href = hrefMatch[1];
    if (!/(^|\/|\.\.\/)index\.html(?:[?#]|$)/.test(href)) continue;
    links.push({ file, html, href });
  }
  return links;
}

function validate() {
  const daily = buildRuntimeDailyData();
  const byDate = new Map(daily.map(entry => [entry.fullDate, entry]));
  const files = [
    ...walkHtml(path.join(ROOT, 'encyclopedia')),
    ...walkHtml(path.join(ROOT, 'generated', 'pages'))
  ];
  const errors = [];
  let checked = 0;

  files.flatMap(extractQuizLinks).forEach(link => {
    checked += 1;
    const slug = pageSlug(link.file, link.html);
    const rel = path.relative(ROOT, link.file);
    const parsed = new URL(link.href, 'https://bhirt.local/encyclopedia/');
    const day = parsed.searchParams.get('day');

    if (!/^\d{4}-\d{2}-\d{2}$/.test(day || '')) {
      errors.push(`${rel}: quiz link must use ?day=YYYY-MM-DD, found "${link.href}"`);
      return;
    }

    const entry = byDate.get(day);
    if (!entry) {
      errors.push(`${rel}: quiz link points to missing daily entry ${day}`);
      return;
    }

    if (!isSameEntry(entry, slug)) {
      const target = entry.encyclopediaSlug || normalizePathSlug(entry) || entry.subject || entry.title;
      errors.push(`${rel}: quiz link ${day} resolves to "${target}", not page slug "${slug}"`);
    }
  });

  if (errors.length) {
    console.error('Encyclopedia quiz-link validation failed:');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  }

  console.log(`Encyclopedia quiz-link validation passed: ${checked} quiz CTAs checked.`);
}

validate();
