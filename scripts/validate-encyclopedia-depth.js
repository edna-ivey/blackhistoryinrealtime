const fs = require('fs');
const path = require('path');
const { DAILY_COVERAGE } = require('../content/daily/2026-coverage');
const { ENTRIES: RICH_ENTRIES } = require('../content/encyclopedia-rich');

const ROOT = path.join(__dirname, '..');
const LEDGER_PATH = path.join(ROOT, 'docs/RESEARCH_LEDGER.md');

function stripTags(html) {
  return String(html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(text) {
  return stripTags(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCount(text) {
  return normalize(text).split(/\s+/).filter(Boolean).length;
}

function extractBetween(html, startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  if (start === -1) return '';
  const end = html.indexOf(endMarker, start + startMarker.length);
  return end === -1 ? html.slice(start) : html.slice(start, end);
}

function tokenSimilarity(a, b) {
  const toBigrams = value => {
    const tokens = normalize(value).split(/\s+/).filter(Boolean);
    const bigrams = [];
    for (let i = 0; i < tokens.length - 1; i++) bigrams.push(`${tokens[i]} ${tokens[i + 1]}`);
    return new Set(bigrams);
  };
  const aTokens = toBigrams(a);
  const bTokens = toBigrams(b);
  if (!aTokens.size || !bTokens.size) return 0;
  let shared = 0;
  aTokens.forEach(token => {
    if (bTokens.has(token)) shared++;
  });
  return shared / Math.min(aTokens.size, bTokens.size);
}

function localTargetExists(pagePath, href) {
  if (!href || /^(https?:|mailto:|#)/.test(href)) return true;
  const cleanHref = href.split('#')[0].split('?')[0];
  if (!cleanHref) return true;
  const target = path.resolve(path.dirname(pagePath), cleanHref);
  return fs.existsSync(target);
}

function run() {
  const errors = [];
  const ledger = fs.existsSync(LEDGER_PATH) ? fs.readFileSync(LEDGER_PATH, 'utf8') : '';

  RICH_ENTRIES.forEach(entry => {
    const label = `${entry.encyclopediaSlug} (${entry.subject})`;
    const pagePath = path.join(ROOT, entry.outputPath || `generated/pages/${entry.encyclopediaSlug}.html`);
    if (!fs.existsSync(pagePath)) {
      errors.push(`${label}: generated page missing`);
      return;
    }

    const html = fs.readFileSync(pagePath, 'utf8');
    const text = stripTags(html);
    const daily = DAILY_COVERAGE.find(item => item.encyclopediaSlug === entry.encyclopediaSlug);
    const dailyText = daily ? [daily.lede, daily.context, daily.turning, daily.whyItMatters, daily.answerText].filter(Boolean).join(' ') : '';

    [
      'Key Dates',
      'Full Story',
      'Cost / Impact',
      'Why It Matters Today',
      'Connected To',
      'External Links',
    ].forEach(section => {
      if (!text.includes(section)) errors.push(`${label}: missing section "${section}"`);
    });

    const story = extractBetween(html, '<div class="section-title">Full Story</div>', '<div class="cost-section">');
    const storyWords = wordCount(story);
    if (storyWords < 600) errors.push(`${label}: Full Story is too shallow (${storyWords} words)`);

    const totalWords = wordCount(extractBetween(html, '<div class="entry-hero">', '<div class="section-divider"><span>Explore More</span></div>'));
    if (totalWords < 950) errors.push(`${label}: substantive page body is too short (${totalWords} words)`);

    const timelineCount = (html.match(/class="tl-item"/g) || []).length;
    if (timelineCount < 5) errors.push(`${label}: needs at least 5 key dates`);

    const externalCount = (html.match(/class="ext-link"/g) || []).length;
    if (externalCount < 3) errors.push(`${label}: needs at least 3 visible external links`);

    const unresolved = text.match(/\b(TODO|TBD|Lorem ipsum|Loading|undefined|null)\b|\{\{/i);
    if (unresolved) errors.push(`${label}: unresolved placeholder text found`);

    if (dailyText) {
      const dailyNormalized = normalize(dailyText);
      if (dailyNormalized && normalize(html).includes(dailyNormalized)) {
        errors.push(`${label}: reuses combined daily text verbatim`);
      }
      ['lede', 'context', 'turning', 'whyItMatters', 'answerText'].forEach(field => {
        const dailyField = normalize(daily[field] || '');
        if (field === 'answerText' && dailyField.split(/\s+/).filter(Boolean).length < 6) return;
        if (dailyField && normalize(html).includes(dailyField)) {
          errors.push(`${label}: reuses daily ${field} verbatim`);
        }
      });
      const similarity = tokenSimilarity(dailyText, story);
      if (similarity > 0.72) errors.push(`${label}: Full Story is too similar to daily content (${similarity.toFixed(2)})`);
    }

    if (!ledger.includes(`Slug: \`${entry.encyclopediaSlug}\``) || !ledger.includes(`Entry title: ${entry.subject}`)) {
      errors.push(`${label}: missing structured research ledger record`);
    }

    const localHrefs = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]).filter(href => !/^https?:/.test(href));
    localHrefs.forEach(href => {
      if (!localTargetExists(pagePath, href)) errors.push(`${label}: broken internal link ${href}`);
    });
  });

  console.log('Encyclopedia depth validation');
  console.log(`Completed rich pages checked: ${RICH_ENTRIES.length}`);

  if (errors.length) {
    console.error(`Errors: ${errors.length}`);
    errors.forEach(error => console.error(`  ERROR ${error}`));
    process.exit(1);
  }

  console.log('Encyclopedia depth valid for completed rich pages.');
}

run();
