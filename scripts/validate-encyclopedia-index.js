const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'encyclopedia.html');

function decodeHtml(value) {
  return String(value || '')
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(value) {
  return decodeHtml(value)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function extractCards(html) {
  const pattern = /<a href="([^"]+)" class="entry-card"[\s\S]*?<div class="entry-name">([\s\S]*?)<\/div>[\s\S]*?<div class="entry-dates">([\s\S]*?)<\/div>[\s\S]*?<div class="entry-desc">([\s\S]*?)<\/div>/g;
  return [...html.matchAll(pattern)].map(match => ({
    href: decodeHtml(match[1]),
    name: decodeHtml(match[2].replace(/<[^>]+>/g, '')),
    dates: decodeHtml(match[3].replace(/<[^>]+>/g, '')),
    desc: decodeHtml(match[4].replace(/<[^>]+>/g, '')),
  }));
}

function groupBy(items, keyFn) {
  const groups = new Map();
  items.forEach(item => {
    const key = keyFn(item);
    if (!key) return;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  return [...groups.entries()].filter(([, group]) => group.length > 1);
}

function run() {
  const errors = [];
  if (!fs.existsSync(INDEX_PATH)) {
    console.error('Encyclopedia index is missing.');
    process.exit(1);
  }

  const cards = extractCards(fs.readFileSync(INDEX_PATH, 'utf8'));
  if (!cards.length) errors.push('No encyclopedia cards found.');

  groupBy(cards, card => normalize(card.name)).forEach(([name, group]) => {
    errors.push(`Duplicate encyclopedia card subject "${name}": ${group.map(card => card.href).join(', ')}`);
  });

  groupBy(cards, card => card.href).forEach(([href, group]) => {
    errors.push(`Duplicate encyclopedia card href "${href}" appears ${group.length} times.`);
  });

  cards.forEach(card => {
    if (!card.href || !card.name || !card.dates || !card.desc) {
      errors.push(`Malformed encyclopedia card: ${JSON.stringify(card)}`);
    }
    if (/TODO|TBD|Loading|undefined|null|\{\{|\}\}/i.test(JSON.stringify(card))) {
      errors.push(`Placeholder text in encyclopedia card: ${card.name || card.href}`);
    }
    if (card.desc.length >= 175 && !/[.!?…]['")\]]?$/.test(card.desc)) {
      errors.push(`Visibly truncated encyclopedia description: ${card.name}`);
    }
    if (/^https?:\/\//.test(card.href)) return;
    const target = path.join(ROOT, card.href.split('#')[0].split('?')[0]);
    if (!fs.existsSync(target)) errors.push(`Broken encyclopedia card link for ${card.name}: ${card.href}`);
  });

  console.log('Encyclopedia index validation');
  console.log(`Cards: ${cards.length}`);

  if (errors.length) {
    console.error(`Errors: ${errors.length}`);
    errors.forEach(error => console.error(`  ERROR ${error}`));
    process.exit(1);
  }

  console.log('Encyclopedia index valid.');
}

run();
