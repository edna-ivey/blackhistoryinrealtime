const fs   = require('fs');
const path = require('path');
const vm   = require('vm');
const { escapeHTML } = require('./lib/utils');
const { ENTRIES: RICH_ENTRIES } = require('../content/encyclopedia-rich');

const LEGACY_DATA_PATH = path.join(__dirname, '../encyclopedia-data.js');
const GENERATED_DATA_PATH = path.join(__dirname, '../generated/encyclopedia-data.js');
const DAILY_DATA_PATH = path.join(__dirname, '../generated/daily-data.js');
const OUTPUT_PATH = path.join(__dirname, '../encyclopedia.html');

// ── 1. Load generated data ───────────────────────────────────────────────────

function loadConstArray(filePath, constName) {
  if (!fs.existsSync(filePath)) return [];
  const source = fs.readFileSync(filePath, 'utf-8');
  const sandbox = { [constName]: [] };
  vm.createContext(sandbox);
  const executable = source.replace(new RegExp(`\\bconst\\s+${constName}\\b`), constName);
  vm.runInNewContext(executable, sandbox);
  return sandbox[constName] || [];
}

const legacyEntries = loadConstArray(LEGACY_DATA_PATH, 'ENCYCLOPEDIA').map(e => ({
  ...e,
  pagePath: `encyclopedia/${e.url || `${e.id}.html`}`,
}));
const generatedEntries = loadConstArray(GENERATED_DATA_PATH, 'ENCYCLOPEDIA').map(e => ({
  ...e,
  pagePath: `generated/pages/${e.url || `${e.id}.html`}`,
}));
const dailyEntries = loadConstArray(DAILY_DATA_PATH, 'FUTURE_DAILY').map(e => ({
  id: e.encyclopediaSlug,
  name: e.subject,
  url: e.encyclopediaPath,
  pagePath: e.encyclopediaPath,
  quizDay: e.fullDate,
  vol: `${e.fullDate} · ${e.category}`,
  dates: e.dates,
  category: e.category,
  tags: e.tags || [],
  desc: buildExcerpt(e.story, e.title),
}));
const richEntries = RICH_ENTRIES.map(e => ({
  id: e.encyclopediaSlug,
  name: e.subject,
  url: e.outputPath || `generated/pages/${e.encyclopediaSlug}.html`,
  pagePath: e.outputPath || `generated/pages/${e.encyclopediaSlug}.html`,
  quizDay: e.fullDate,
  vol: `${e.dailyDateLabel || e.fullDate} · ${e.category}`,
  dates: e.dates,
  category: e.category,
  tags: e.tags || [],
  desc: buildExcerpt(e.summary, e.subject),
}));

const seen = new Set();
const entries = [...richEntries, ...legacyEntries, ...generatedEntries, ...dailyEntries].filter(entry => {
  const key = entry.pagePath || entry.id;
  if (!key || seen.has(key)) return false;
  seen.add(key);
  return true;
});

if (!entries.length) {
  console.warn('⚠️  Encyclopedia source entries are empty. Nothing to generate.');
  process.exit(0);
}

console.log(`📄 Entries loaded: ${entries.length}`);

// ── 2. Sort alphabetically by name ───────────────────────────────────────────

const sorted = [...entries].sort((a, b) =>
  (a.name || '').localeCompare(b.name || '')
);

function buildExcerpt(html, fallback = '') {
  const text = String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!text) return fallback;
  const sentence = text.match(/^.{24,}?[.!?](?:\s|$)/);
  if (sentence && sentence[0].length <= 190) return sentence[0].trim();
  if (text.length <= 190) return text;
  const clipped = text.slice(0, 186);
  const lastSpace = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, lastSpace > 80 ? lastSpace : 186).trim()}...`;
}

// ── 3. Build data-tags for filter system ─────────────────────────────────────

const MONTH_NAMES = [
  '', 'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
];

function buildDataTags(entry) {
  const tags = new Set();
  if (entry.category) tags.add(entry.category.toLowerCase());
  if (entry.quizDay && typeof entry.quizDay === 'string') {
    const monthNum = parseInt(entry.quizDay.split('-')[1], 10);
    if (MONTH_NAMES[monthNum]) tags.add(MONTH_NAMES[monthNum]);
  }
  if (Array.isArray(entry.tags)) entry.tags.forEach(t => tags.add(t));
  return [...tags].join(' ');
}

// ── 4. Render cards ──────────────────────────────────────────────────────────

function renderCard(entry, idx) {
  const barClass = entry.barClass ? ` ${entry.barClass}` : '';
  const dataTags = escapeHTML(buildDataTags(entry));
  return [
    `      <a href="${escapeHTML(entry.pagePath || entry.url)}" class="entry-card" data-tags="${dataTags}" data-order="${idx}">`,
    `        <div class="entry-card-bar${barClass}"></div>`,
    `        <div class="entry-card-body">`,
    `          <div class="entry-vol">${escapeHTML(entry.vol || '')}</div>`,
    `          <div class="entry-name">${escapeHTML(entry.name || '')}</div>`,
    `          <div class="entry-dates">${escapeHTML(entry.dates || '')}</div>`,
    `          <div class="entry-desc">${escapeHTML(entry.desc || '')}</div>`,
    `          <span class="entry-cat">${escapeHTML(entry.category || '')}</span>`,
    `          <span class="entry-arrow">&#x2192;</span>`,
    `        </div>`,
    `      </a>`,
  ].join('\n');
}

const cardsHtml = sorted.map(renderCard).join('\n\n');

// ── 5. Build HTML ─────────────────────────────────────────────────────────────

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Encyclopedia &mdash; Black History in Real Time</title>
<meta name="description" content="Full biographical profiles of the people and events in Black history. Deep dives, timelines, and connections across the full story.">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Bebas+Neue&display=swap" rel="stylesheet">
<style>
  :root {
    --red: #C41E3A;
    --black: #0A0A0A;
    --green: #1A5C38;
    --gold: #D4A017;
    --orange: #E8621A;
    --cream: #F5EDD8;
    --white: #FAFAFA;
    --card-bg: #161616;
    --border: rgba(212,160,23,0.2);
    --purple: #6B2D8B;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: var(--black); color: var(--cream); font-family: 'DM Sans', sans-serif; min-height: 100vh; overflow-x: hidden; }
  body::before { content: ''; position: fixed; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E"); pointer-events: none; z-index: 0; }

  .pan-stripe { display: flex; height: 6px; width: 100%; }
  .pan-stripe .s1 { background: var(--red); flex: 1; }
  .pan-stripe .s2 { background: #111; flex: 1; }
  .pan-stripe .s3 { background: var(--green); flex: 1; }

  header { position: sticky; top: 0; z-index: 50; background: rgba(10,10,10,0.97); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); }
  .header-inner { max-width: 1100px; margin: 0 auto; padding: 14px 32px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .logo-area { display: flex; align-items: center; gap: 14px; text-decoration: none; }
  .logo-img { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 0 2px var(--gold), 0 0 20px rgba(212,160,23,0.3); animation: glow 3s ease-in-out infinite; flex-shrink: 0; }
  @keyframes glow { 0%,100% { box-shadow: 0 0 0 2px var(--gold), 0 0 16px rgba(212,160,23,0.3); } 50% { box-shadow: 0 0 0 2px var(--gold), 0 0 32px rgba(212,160,23,0.6); } }
  .logo-text h1 { font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem; letter-spacing: 2px; color: var(--white); line-height: 1; }
  .logo-text h1 span { color: var(--gold); }
  .logo-text p { font-size: 0.65rem; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); margin-top: 1px; }

  nav { border-top: 1px solid rgba(212,160,23,0.1); display: flex; justify-content: center; gap: 0; padding: 0 32px; overflow-x: auto; scrollbar-width: none; }
  nav::-webkit-scrollbar { display: none; }
  nav a { background: none; border: none; border-bottom: 3px solid transparent; color: rgba(245,237,216,0.45); font-family: 'DM Sans', sans-serif; font-size: 0.78rem; letter-spacing: 2.5px; text-transform: uppercase; padding: 12px 18px; cursor: pointer; transition: all 0.2s; white-space: nowrap; text-decoration: none; display: inline-block; }
  nav a:hover { color: var(--cream); }
  nav a.active { color: var(--gold); border-bottom-color: var(--gold); }

  main { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; padding: 56px 32px 100px; }

  .page-header { text-align: center; margin-bottom: 56px; animation: fadeUp 0.5s ease both; }
  .page-label { font-size: 0.72rem; letter-spacing: 5px; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
  .page-header h2 { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 900; color: var(--white); line-height: 1.1; margin-bottom: 16px; }
  .page-header p { font-size: 1rem; line-height: 1.7; color: rgba(245,237,216,0.6); max-width: 600px; margin: 0 auto; }

  .search-wrap { margin-bottom: 40px; animation: fadeUp 0.5s ease 0.1s both; }
  .search-input { width: 100%; background: var(--card-bg); border: 1px solid var(--border); border-radius: 14px; padding: 16px 22px; color: var(--cream); font-family: 'DM Sans', sans-serif; font-size: 1rem; outline: none; transition: border-color 0.2s; }
  .search-input::placeholder { color: rgba(245,237,216,0.3); }
  .search-input:focus { border-color: var(--gold); }

  .filter-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; animation: fadeUp 0.5s ease 0.15s both; }
  .filter-btn { background: rgba(255,255,255,0.04); border: 1px solid rgba(212,160,23,0.15); border-radius: 100px; padding: 7px 16px; color: rgba(245,237,216,0.5); font-family: 'DM Sans', sans-serif; font-size: 0.75rem; letter-spacing: 1.5px; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
  .filter-btn:hover { background: rgba(212,160,23,0.08); color: var(--cream); border-color: rgba(212,160,23,0.4); }
  .filter-btn.active { background: rgba(212,160,23,0.15); color: var(--gold); border-color: var(--gold); }

  .entries-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; animation: fadeUp 0.5s ease 0.2s both; }

  .entry-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; text-decoration: none; display: block; transition: all 0.22s; position: relative; }
  .entry-card:hover { border-color: rgba(212,160,23,0.5); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }

  .entry-card-bar { height: 4px; background: linear-gradient(90deg, var(--red), var(--gold)); }
  .entry-card-bar.politics { background: linear-gradient(90deg, var(--green), #2d9e5f); }
  .entry-card-bar.innovation { background: linear-gradient(90deg, var(--orange), var(--gold)); }
  .entry-card-bar.erasure { background: linear-gradient(90deg, #444, var(--red)); }
  .entry-card-bar.culture { background: linear-gradient(90deg, var(--purple), var(--red)); }
  .entry-card-bar.systems { background: linear-gradient(90deg, #333, var(--orange)); }

  .entry-card-body { padding: 22px 22px 20px; }
  .entry-vol { font-size: 0.62rem; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
  .entry-name { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700; color: var(--white); line-height: 1.25; margin-bottom: 6px; }
  .entry-dates { font-size: 0.68rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(212,160,23,0.6); margin-bottom: 10px; }
  .entry-desc { font-size: 0.85rem; line-height: 1.65; color: rgba(245,237,216,0.6); margin-bottom: 14px; }
  .entry-cat { display: inline-block; background: rgba(212,160,23,0.08); border: 1px solid rgba(212,160,23,0.2); border-radius: 100px; padding: 4px 12px; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; color: rgba(212,160,23,0.7); }
  .entry-arrow { position: absolute; bottom: 20px; right: 20px; color: var(--gold); opacity: 0; transition: opacity 0.2s; font-size: 1.1rem; }
  .entry-card:hover .entry-arrow { opacity: 1; }

  .no-results { text-align: center; padding: 60px 0; color: rgba(245,237,216,0.3); font-size: 0.95rem; display: none; }

  footer { position: relative; z-index: 1; border-top: 1px solid rgba(212,160,23,0.15); padding: 28px 32px; text-align: center; }
  footer p { font-size: 0.72rem; color: rgba(245,237,216,0.28); letter-spacing: 2px; }
  footer a { color: var(--gold); text-decoration: none; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

  @media (max-width: 620px) {
    .header-inner { padding: 12px 16px; }
    nav { padding: 0 16px; }
    nav a { padding: 10px 12px; font-size: 0.72rem; }
    main { padding: 32px 16px 80px; }
    .entries-grid { grid-template-columns: 1fr; }
    .filter-row { gap: 6px; }
    .filter-btn { font-size: 0.68rem; padding: 6px 12px; }
  }
</style>
</head>
<body>

<div class="pan-stripe"><div class="s1"></div><div class="s2"></div><div class="s3"></div></div>

<header>
  <div class="header-inner">
    <a class="logo-area" href="index.html">
      <img src="logo.png" alt="Black History in Real Time" class="logo-img">
      <div class="logo-text">
        <h1>Black<span>History</span></h1>
        <p>In Real Time</p>
      </div>
    </a>
  </div>
  <nav>
    <a href="index.html">Today</a>
    <a href="index.html#now">Making History Now</a>
    <a href="index.html#calendar">Calendar</a>
    <a href="index.html#archive">Archive</a>
    <a href="encyclopedia.html">Encyclopedia</a>
    <a href="index.html#about">About</a>
  </nav>
</header>

<main>
  <div class="page-header">
    <div class="page-label">Black History in Real Time</div>
    <h2>The Encyclopedia</h2>
    <p>Full biographical profiles of the people and events that shaped Black history. Every entry connects to the larger story.</p>
  </div>

  <div class="search-wrap">
    <input type="text" class="search-input" id="searchInput" placeholder="Search by name, event, or keyword..." oninput="filterEntries()">
  </div>

  <div class="filter-row" id="filterRow">
    <button class="filter-btn active" onclick="setFilter('all', this)">All Entries</button>
    <button class="filter-btn" onclick="setFilter('february', this)">February</button>
    <button class="filter-btn" onclick="setFilter('march', this)">March</button>
    <button class="filter-btn" onclick="setFilter('april', this)">April</button>
    <button class="filter-btn" onclick="setFilter('may', this)">May</button>
    <button class="filter-btn" onclick="setFilter('june', this)">June</button>
    <button class="filter-btn" onclick="setFilter('july', this)">July</button>
    <button class="filter-btn" onclick="setFilter('august', this)">August</button>
    <button class="filter-btn" onclick="setFilter('people', this)">People</button>
    <button class="filter-btn" onclick="setFilter('events', this)">Events</button>
    <button class="filter-btn" onclick="setFilter('systems', this)">Systems &amp; Policy</button>
    <button class="filter-btn" onclick="setFilter('culture', this)">Culture</button>
    <button class="filter-btn" onclick="setFilter('women', this)">Black Women</button>
    <button class="filter-btn" onclick="setFilter('hidden-history', this)">Hidden History</button>
    <button class="filter-btn" onclick="setFilter('economics', this)">Economics &amp; Wealth</button>
    <button class="filter-btn" onclick="setFilter('science', this)">Science &amp; Medicine</button>
    <button class="filter-btn" id="sortBtn" style="margin-left:auto;" onclick="toggleSort()">A&ndash;Z &#x2193;</button>
  </div>

  <div id="entriesContainer">
    <div class="entries-grid" id="entriesGrid">

${cardsHtml}

    </div>
  </div>

  <div class="no-results" id="noResults">No entries match your search.</div>

</main>

<footer>
  <p>&copy; 2026 <a href="/">Black History in Real Time</a> &middot; <a href="https://instagram.com/blackhistoryinrealtime" target="_blank">@blackhistoryinrealtime</a> &middot; History happens every day &#x1F4DA;&#x270A;&#x1F3FE;</p>
  <div class="pan-stripe" style="margin-top:20px;height:3px;"><div class="s1"></div><div class="s2"></div><div class="s3"></div></div>
</footer>

<script>
  let activeFilter = 'all';
  let currentSort = 'alpha';

  function toggleSort() {
    const newSort = currentSort === 'alpha' ? 'chrono' : 'alpha';
    sortGrid(newSort);
    document.getElementById('sortBtn').textContent = newSort === 'alpha' ? 'A–Z ↓' : 'By Date ↓';
  }

  function sortGrid(mode) {
    currentSort = mode;
    const grid = document.getElementById('entriesGrid');
    const cards = Array.from(grid.querySelectorAll('.entry-card'));
    if (mode === 'alpha') {
      cards.sort((a, b) => {
        const na = a.querySelector('.entry-name')?.textContent.trim() || '';
        const nb = b.querySelector('.entry-name')?.textContent.trim() || '';
        return na.localeCompare(nb);
      });
    } else {
      cards.sort((a, b) => parseInt(a.dataset.order || 0) - parseInt(b.dataset.order || 0));
    }
    cards.forEach(c => grid.appendChild(c));
    filterEntries();
  }

  function setFilter(filter, btn) {
    activeFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterEntries();
  }

  function filterEntries() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.entry-card');
    let anyVisible = false;

    cards.forEach(card => {
      const tags = card.dataset.tags || '';
      const name = card.querySelector('.entry-name')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.entry-desc')?.textContent.toLowerCase() || '';
      const vol  = card.querySelector('.entry-vol')?.textContent.toLowerCase() || '';

      const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter.toLowerCase());
      const matchesSearch = !query || name.includes(query) || desc.includes(query) || vol.includes(query) || tags.includes(query);

      if (matchesFilter && matchesSearch) {
        card.style.display = 'block';
        anyVisible = true;
      } else {
        card.style.display = 'none';
      }
    });

    document.getElementById('noResults').style.display = anyVisible ? 'none' : 'block';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.entry-card');
    cards.forEach((c, i) => c.dataset.order = i);
    sortGrid('alpha');
  });
</script>
</body>
</html>
`;

// ── 6. Write output ───────────────────────────────────────────────────────────

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, html, 'utf-8');

console.log(`✅ Generated: encyclopedia.html`);
console.log(`   Entries:   ${entries.length}`);
