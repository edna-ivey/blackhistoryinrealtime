const fs = require('fs');

const INDEX_PATH = 'encyclopedia.html';
const OUTPUT_PATH = 'docs/ENCYCLOPEDIA_REBUILD_AUDIT.md';

function decode(value) {
  return String(value || '')
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, '-')
    .replace(/&ndash;/g, '-')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractCards(html) {
  const pattern = /<a href="([^"]+)" class="entry-card"[\s\S]*?<div class="entry-name">([\s\S]*?)<\/div>[\s\S]*?<div class="entry-dates">([\s\S]*?)<\/div>[\s\S]*?<div class="entry-desc">([\s\S]*?)<\/div>/g;
  return [...html.matchAll(pattern)].map(match => ({
    href: decode(match[1]),
    name: decode(match[2]),
    dates: decode(match[3]),
    desc: decode(match[4]),
  }));
}

function run() {
  const html = fs.readFileSync(INDEX_PATH, 'utf8');
  const cards = extractCards(html);
  const completed = new Set([
    'generated/pages/voting-rights-act.html',
    'generated/pages/charles-richard-drew.html',
    'generated/pages/fannie-lou-hamer-testimony.html',
    'generated/pages/birmingham-childrens-crusade.html',
    'generated/pages/alma-thomas.html',
    'generated/pages/brown-v-board-plaintiffs.html',
    'generated/pages/annie-easley.html',
    'generated/pages/patricia-bath.html',
  ]);
  const markdownGenerated = new Set([
    'generated/pages/a-philip-randolph.html',
    'generated/pages/elijah-mccoy.html',
    'generated/pages/frederick-douglass.html',
    'generated/pages/freedom-riders.html',
    'generated/pages/james-brown.html',
    'generated/pages/james-meredith.html',
  ]);

  const counts = {
    PASS: 0,
    REWRITE: 0,
    RESEARCH: 0,
    REBUILD: 0,
    MERGE: 0,
    REMOVE: 0,
    BLOCKED: 0,
  };

  const rows = cards.map((card, index) => {
    let status;
    let deficiency;
    if (completed.has(card.href)) {
      status = 'PASS';
      deficiency = 'First rebuild batch complete: rich source, Claudette-style generated page, ledger record, internal links, external links, depth and similarity validation.';
      counts.PASS++;
    } else if (markdownGenerated.has(card.href)) {
      status = 'RESEARCH, REBUILD';
      deficiency = 'Markdown-generated page is stronger than fallback pages but still needs claim-by-claim verification, source ledger expansion, and Claudette visual/template alignment review.';
      counts.RESEARCH++;
      counts.REBUILD++;
    } else if (card.href.startsWith('generated/pages/')) {
      status = 'REWRITE, REBUILD';
      deficiency = 'Scheduled daily fallback page is generated from lede/context/turning/why fields and is not yet encyclopedia-level; needs full research rewrite and rich template rendering.';
      counts.REWRITE++;
      counts.REBUILD++;
    } else {
      status = 'RESEARCH';
      deficiency = 'Legacy page may be visually closer to the March identity but needs independent factual/source audit, external-link verification, and duplication/depth review before PASS.';
      counts.RESEARCH++;
    }
    return `| ${index + 1} | ${card.name} | ${card.href} | ${status} | ${deficiency} |`;
  });

  const next = rows.find(row => !row.includes('| PASS |')) || 'All rows PASS.';
  const output = `# Encyclopedia Rebuild Audit

Status: First rebuild batch complete, whole-encyclopedia rebuild in progress.
Date: 2026-08-13

## Quality Gap Documented

Approved model: \`encyclopedia/claudette-colvin.html\`. It uses a narrow readable column, March identity header, breadcrumb/back navigation, a 100-180 word opening frame, Key Dates timeline, Full Story, verified quote when available, Cost / Impact, Why It Matters Today, Explore More, Connected To, daily challenge link, related internal entries, Learn More, and visible External Links.

Observed generated-page gap before this batch: scheduled pages such as \`generated/pages/voting-rights-act.html\`, \`generated/pages/patricia-bath.html\`, and \`generated/pages/charles-richard-drew.html\` were rendered by \`scripts/generate-daily-data.js\` from daily \`lede\`, \`context\`, \`turning\`, and \`whyItMatters\` fields. They lacked a real timeline, long-form Full Story, Cost / Impact, Connected To cards, visible External Links cards, and Claudette-level spacing/hierarchy. They were functional pages, but not encyclopedia pages.

Legacy pages such as \`encyclopedia/ida-b-wells.html\` and \`encyclopedia/brown-v-board.html\` are closer to the approved structure but still need systematic source verification, quote verification, external-link review, and consistency cleanup. Markdown-generated pages such as \`generated/pages/james-meredith.html\` are deeper than scheduled fallback pages but still diverge from the Claudette layout and need the same research audit.

## Batch 1 Completed

Completed pages: \`voting-rights-act\`, \`charles-richard-drew\`, \`fannie-lou-hamer-testimony\`, \`birmingham-childrens-crusade\`, \`alma-thomas\`, \`brown-v-board-plaintiffs\`, \`annie-easley\`, \`patricia-bath\`.

Batch 1 added rich source records in \`content/encyclopedia-rich/batch-1.js\`, Claudette-style rendering through \`scripts/lib/rich-encyclopedia-renderer.js\`, structured ledger output, and \`scripts/validate-encyclopedia-depth.js\` to guard completed rich pages against shallow or copied daily content.

## Counts

- Total rendered cards audited: ${cards.length}
- PASS: ${counts.PASS}
- REWRITE: ${counts.REWRITE}
- RESEARCH: ${counts.RESEARCH}
- REBUILD: ${counts.REBUILD}
- MERGE: ${counts.MERGE}
- REMOVE: ${counts.REMOVE}
- BLOCKED: ${counts.BLOCKED}

## Continuation Checkpoint

Next unfinished entry: ${next}

Continue in batches of no more than 10, starting with that row, unless editorial priority changes. For every future PASS, require rich source content, research ledger record, Claudette visual structure, internal links, external links, and depth/similarity validation.

## Entry Audit Table

| # | Entry | Path | Status | Deficiency / Required Action |
|---|---|---|---|---|
${rows.join('\n')}
`;

  fs.writeFileSync(OUTPUT_PATH, output, 'utf8');
  console.log(`Generated ${OUTPUT_PATH}`);
  console.log(`Cards: ${cards.length}`);
  console.log(JSON.stringify(counts));
}

run();
