const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { escapeHTML } = require('./lib/utils');

const ROOT = path.join(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'index.html');
const OUTPUT_DIR = path.join(ROOT, 'encyclopedia');

function extractArraySource(source, marker) {
  const start = source.indexOf(marker);
  const bracketStart = source.indexOf('[', start);
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let i = bracketStart; i < source.length; i++) {
    const ch = source[i];
    if (escaped) { escaped = false; continue; }
    if (quote && ch === '\\') { escaped = true; continue; }
    if (quote && ch === quote) { quote = null; continue; }
    if (!quote && (ch === '"' || ch === "'" || ch === '`')) { quote = ch; continue; }
    if (!quote && ch === '[') depth++;
    if (!quote && ch === ']') {
      depth--;
      if (depth === 0) return source.slice(bracketStart, i + 1);
    }
  }
  throw new Error(`Unable to extract ${marker}`);
}

function loadData() {
  const source = fs.readFileSync(INDEX_PATH, 'utf8');
  const arraySource = extractArraySource(source, 'const DATA =');
  const sandbox = { DATA: [] };
  vm.createContext(sandbox);
  vm.runInContext(`DATA = ${arraySource};`, sandbox);
  return sandbox.DATA;
}

function render(entry) {
  const cost = entry.cost ? `<h3>Cost / Impact</h3><p>${escapeHTML(entry.cost)}</p>` : '';
  const quote = entry.quote ? `<blockquote>"${escapeHTML(entry.quote.text)}"<cite>${escapeHTML(entry.quote.source || '')}</cite></blockquote>` : '';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHTML(entry.subject)} - Black History in Real Time Encyclopedia</title>
<meta name="description" content="${escapeHTML(entry.title)}">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Bebas+Neue&display=swap" rel="stylesheet">
<style>
  :root{--red:#C41E3A;--black:#0A0A0A;--green:#1A5C38;--gold:#D4A017;--cream:#F5EDD8;--white:#FAFAFA;--card-bg:#161616;--border:rgba(212,160,23,.2)}
  *{box-sizing:border-box;margin:0;padding:0} body{background:var(--black);color:var(--cream);font-family:'DM Sans',sans-serif;line-height:1.75;min-height:100vh}
  .pan-stripe{display:flex;height:6px}.pan-stripe div{flex:1}.s1{background:var(--red)}.s2{background:#111}.s3{background:var(--green)}
  header{position:sticky;top:0;background:rgba(10,10,10,.97);border-bottom:1px solid var(--border);z-index:5}.header-inner{max-width:1100px;margin:auto;padding:14px 32px}
  .logo{display:flex;align-items:center;gap:14px;color:var(--white);text-decoration:none}.logo img{width:52px;height:52px;border-radius:50%;box-shadow:0 0 0 2px var(--gold)}.logo h1{font-family:'Bebas Neue';font-size:1.6rem;letter-spacing:2px}.logo span{color:var(--gold)}
  nav{border-top:1px solid rgba(212,160,23,.1);display:flex;justify-content:center;overflow-x:auto;padding:0 24px}nav a{color:rgba(245,237,216,.55);text-decoration:none;text-transform:uppercase;letter-spacing:2.5px;font-size:.78rem;padding:12px 18px;white-space:nowrap}
  main{width:min(900px,calc(100% - 40px));margin:auto;padding:52px 0 90px}.label{color:var(--gold);text-transform:uppercase;letter-spacing:5px;font-size:.7rem;margin-bottom:14px}
  h2{font-family:'Playfair Display',serif;color:var(--white);font-size:clamp(2.3rem,7vw,4.7rem);line-height:1.05;margin-bottom:16px}.meta{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:34px}.badge{border:1px solid rgba(212,160,23,.3);border-radius:999px;padding:5px 12px;color:var(--gold);text-transform:uppercase;letter-spacing:2px;font-size:.68rem}
  article{background:var(--card-bg);border:1px solid var(--border);border-radius:16px;padding:28px}article p{margin-bottom:16px;color:rgba(245,237,216,.82)}h3{font-family:'Bebas Neue';color:var(--gold);letter-spacing:3px;margin:28px 0 8px;font-size:1rem}.why{margin-top:24px;padding:18px 20px;border:1px solid rgba(196,30,58,.25);background:rgba(196,30,58,.08);border-radius:12px}blockquote{border-left:4px solid var(--gold);padding:12px 18px;margin:20px 0;color:var(--gold);background:rgba(212,160,23,.06)}cite{display:block;color:rgba(212,160,23,.65);font-size:.75rem;letter-spacing:1.5px;text-transform:uppercase;margin-top:8px}
  a{color:var(--gold)}@media(max-width:620px){.header-inner{padding:12px 16px}nav{justify-content:flex-start;padding:0 12px}nav a{font-size:.7rem;padding:10px 12px}main{width:calc(100% - 28px);padding-top:34px}article{padding:22px 18px}}
</style>
</head>
<body>
<div class="pan-stripe"><div class="s1"></div><div class="s2"></div><div class="s3"></div></div>
<header><div class="header-inner"><a class="logo" href="../index.html"><img src="../logo.png" alt="Black History in Real Time"><h1>Black<span>History</span></h1></a></div><nav><a href="../index.html">Today</a><a href="../index.html#calendar">Calendar</a><a href="../index.html#archive">Archive</a><a href="../encyclopedia.html">Encyclopedia</a></nav></header>
<main>
  <div class="label">Black History in Real Time</div>
  <h2>${escapeHTML(entry.subject)}</h2>
  <div class="meta"><span class="badge">${escapeHTML(entry.dates)}</span><span class="badge">${escapeHTML(entry.category)}</span><span class="badge">${escapeHTML(entry.fullDate)}</span></div>
  <article>
    ${entry.story || ''}
    ${quote}
    ${cost}
    <div class="why"><h3>Why It Matters</h3><p>${escapeHTML(entry.whyItMatters || '')}</p></div>
  </article>
</main>
<footer><div class="pan-stripe" style="height:3px"><div class="s1"></div><div class="s2"></div><div class="s3"></div></div></footer>
</body>
</html>
`;
}

function run() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const data = loadData();
  let written = 0;
  data.forEach(entry => {
    if (!entry.encyclopediaSlug) return;
    const outputPath = path.join(OUTPUT_DIR, `${entry.encyclopediaSlug}.html`);
    if (fs.existsSync(outputPath)) return;
    fs.writeFileSync(outputPath, render(entry), 'utf8');
    written++;
  });
  console.log(`Generated missing legacy encyclopedia pages: ${written}`);
}

run();
