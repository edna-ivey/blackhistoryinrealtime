const fs = require('fs');
const path = require('path');
const { DAILY_COVERAGE } = require('../content/daily/2026-coverage');
const { escapeHTML } = require('./lib/utils');

const DAILY_OUTPUT = path.join(__dirname, '../generated/daily-data.js');
const PAGES_DIR = path.join(__dirname, '../generated/pages');
const LEDGER_OUTPUT = path.join(__dirname, '../docs/RESEARCH_LEDGER.md');

function renderParagraphs(entry) {
  return [entry.lede, entry.context, entry.turning]
    .filter(Boolean)
    .map(text => `<p>${escapeHTML(text)}</p>`)
    .join('');
}

function renderPage(entry) {
  const sourceLinks = (entry.sources || [])
    .map(url => `<li><a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(url)}</a></li>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHTML(entry.subject)} - Black History in Real Time Encyclopedia</title>
<meta name="description" content="${escapeHTML(entry.lede)}">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Bebas+Neue&display=swap" rel="stylesheet">
<style>
  :root { --red:#C41E3A; --black:#0A0A0A; --green:#1A5C38; --gold:#D4A017; --orange:#E8621A; --cream:#F5EDD8; --white:#FAFAFA; --card-bg:#161616; --border:rgba(212,160,23,0.2); }
  * { box-sizing:border-box; margin:0; padding:0; }
  body { min-height:100vh; background:var(--black); color:var(--cream); font-family:'DM Sans', sans-serif; line-height:1.75; }
  body::before { content:''; position:fixed; inset:0; pointer-events:none; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E"); }
  .pan-stripe { display:flex; height:6px; width:100%; }
  .pan-stripe div { flex:1; } .s1{background:var(--red)} .s2{background:#111} .s3{background:var(--green)}
  header { position:sticky; top:0; z-index:5; background:rgba(10,10,10,0.97); border-bottom:1px solid var(--border); }
  .header-inner { max-width:1100px; margin:0 auto; padding:14px 32px; display:flex; align-items:center; gap:14px; }
  .logo { display:flex; align-items:center; gap:14px; color:var(--white); text-decoration:none; }
  .logo img { width:52px; height:52px; border-radius:50%; object-fit:cover; box-shadow:0 0 0 2px var(--gold); }
  .logo h1 { font-family:'Bebas Neue', sans-serif; letter-spacing:2px; font-size:1.6rem; line-height:1; }
  .logo span { color:var(--gold); }
  nav { border-top:1px solid rgba(212,160,23,0.1); display:flex; justify-content:center; gap:0; padding:0 24px; overflow-x:auto; }
  nav a { color:rgba(245,237,216,0.55); text-decoration:none; text-transform:uppercase; letter-spacing:2.5px; font-size:.78rem; padding:12px 18px; border-bottom:3px solid transparent; white-space:nowrap; }
  nav a:hover { color:var(--gold); }
  main { width:min(900px, calc(100% - 40px)); margin:0 auto; padding:52px 0 90px; position:relative; z-index:1; }
  .label { color:var(--gold); text-transform:uppercase; letter-spacing:5px; font-size:.7rem; margin-bottom:14px; }
  h2 { font-family:'Playfair Display', serif; color:var(--white); font-size:clamp(2.3rem, 7vw, 4.7rem); line-height:1.05; margin-bottom:16px; }
  .meta { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:34px; }
  .badge { border:1px solid rgba(212,160,23,.3); border-radius:999px; padding:5px 12px; color:var(--gold); text-transform:uppercase; letter-spacing:2px; font-size:.68rem; }
  article { background:var(--card-bg); border:1px solid var(--border); border-radius:16px; padding:28px; }
  article p { margin-bottom:16px; color:rgba(245,237,216,.82); }
  h3 { font-family:'Bebas Neue', sans-serif; color:var(--gold); letter-spacing:3px; margin:28px 0 8px; font-size:1rem; }
  .why { margin-top:24px; padding:18px 20px; border:1px solid rgba(196,30,58,.25); background:rgba(196,30,58,.08); border-radius:12px; }
  .sources { margin-top:24px; font-size:.82rem; color:rgba(245,237,216,.6); overflow-wrap:anywhere; }
  .sources ul { padding-left:18px; }
  .challenge-link { display:inline-flex; margin-top:24px; border:1px solid rgba(212,160,23,.35); border-radius:999px; padding:9px 16px; text-transform:uppercase; letter-spacing:2px; font-size:.72rem; color:var(--gold); text-decoration:none; }
  .challenge-link:hover { background:rgba(212,160,23,.08); }
  a { color:var(--gold); }
  @media (max-width:620px) { .header-inner{padding:12px 16px} nav{justify-content:flex-start;padding:0 12px} nav a{font-size:.7rem;padding:10px 12px} main{width:calc(100% - 28px);padding-top:34px} article{padding:22px 18px} }
</style>
</head>
<body>
<div class="pan-stripe"><div class="s1"></div><div class="s2"></div><div class="s3"></div></div>
<header>
  <div class="header-inner">
    <a class="logo" href="../../index.html">
      <img src="../../logo.png" alt="Black History in Real Time">
      <h1>Black<span>History</span></h1>
    </a>
  </div>
  <nav>
    <a href="../../index.html">Today</a>
    <a href="../../index.html#now">Making History Now</a>
    <a href="../../index.html#calendar">Calendar</a>
    <a href="../../index.html#archive">Archive</a>
    <a href="../../encyclopedia.html">Encyclopedia</a>
  </nav>
</header>
<main>
  <div class="label">Black History in Real Time</div>
  <h2>${escapeHTML(entry.subject)}</h2>
  <div class="meta">
    <span class="badge">${escapeHTML(entry.dates)}</span>
    <span class="badge">${escapeHTML(entry.category)}</span>
    <span class="badge">${escapeHTML(entry.fullDate)}</span>
  </div>
  <article>
    ${renderParagraphs(entry)}
    <div class="why">
      <h3>Why It Matters</h3>
      <p>${escapeHTML(entry.whyItMatters)}</p>
    </div>
    <div class="sources">
      <h3>Research Ledger</h3>
      <ul>
${sourceLinks}
      </ul>
    </div>
    <a class="challenge-link" href="../../index.html?day=${escapeHTML(entry.fullDate)}">Open The Challenge</a>
  </article>
</main>
<footer><div class="pan-stripe" style="height:3px"><div class="s1"></div><div class="s2"></div><div class="s3"></div></div></footer>
</body>
</html>
`;
}

function toPublicEntry(entry) {
  const pagePath = entry.encyclopediaPath || `generated/pages/${entry.encyclopediaSlug}.html`;
  return {
    fullDate: entry.fullDate,
    category: entry.category,
    title: entry.title,
    question: entry.question,
    options: entry.options,
    answer: entry.answer,
    answerText: entry.answerText,
    subject: entry.subject,
    dates: entry.dates,
    encyclopediaSlug: entry.encyclopediaSlug,
    encyclopediaPath: pagePath,
    story: renderParagraphs(entry),
    whyItMatters: entry.whyItMatters,
    tags: entry.tags,
  };
}

function writeLedger(entries) {
  const rows = entries.map(entry => {
    const sourceRows = entry.sources.map(url => `  - ${url}`).join('\n');
    return `### ${entry.fullDate} - ${entry.subject}

- Slug: \`${entry.encyclopediaSlug}\`
- Core claims: ${entry.lede} ${entry.context} ${entry.turning}
- Sources:
${sourceRows}`;
  }).join('\n\n');

  const content = `# Black History in Real Time - Research Ledger

Generated from \`content/daily/2026-coverage.js\`.

Coverage file contains source URLs used to verify newly scheduled daily entries through August 31, 2026.

${rows}
`;
  fs.writeFileSync(LEDGER_OUTPUT, content, 'utf8');
}

function run() {
  fs.mkdirSync(path.dirname(DAILY_OUTPUT), { recursive: true });
  fs.mkdirSync(PAGES_DIR, { recursive: true });

  DAILY_COVERAGE.forEach(entry => {
    if (!entry.encyclopediaPath) {
      fs.writeFileSync(path.join(PAGES_DIR, `${entry.encyclopediaSlug}.html`), renderPage(entry), 'utf8');
    }
  });

  const publicEntries = DAILY_COVERAGE.map(toPublicEntry);
  const output = `// generated/daily-data.js
// Auto-generated by scripts/generate-daily-data.js. Do not edit by hand.
// Source: content/daily/2026-coverage.js

const FUTURE_DAILY = ${JSON.stringify(publicEntries, null, 2)};
`;
  fs.writeFileSync(DAILY_OUTPUT, output, 'utf8');
  writeLedger(DAILY_COVERAGE);

  console.log('Generated: generated/daily-data.js');
  console.log(`Entries:   ${publicEntries.length}`);
  console.log('Generated: docs/RESEARCH_LEDGER.md');
}

run();
