const { escapeHTML } = require('./utils');

function paragraphs(items) {
  return (items || [])
    .filter(Boolean)
    .map(text => `<p>${escapeHTML(text)}</p>`)
    .join('\n');
}

function renderTimeline(items) {
  return (items || [])
    .map(item => `<div class="tl-item"><div class="tl-date">${escapeHTML(item.date)}</div><div class="tl-event">${escapeHTML(item.event)}</div></div>`)
    .join('\n');
}

function renderQuote(quote) {
  if (!quote || !quote.text) return '';
  return `<div class="pull-quote">
    <div class="pq-bar"></div>
    <blockquote>${escapeHTML(quote.text)}</blockquote>
    <cite>${escapeHTML(quote.cite || '')}</cite>
  </div>`;
}

function resolveHref(href, basePath) {
  if (href && href.startsWith('@root/')) return `${basePath}${href.slice(6)}`;
  return href;
}

function renderConnected(links, basePath) {
  return (links || [])
    .map(link => `<a href="${escapeHTML(resolveHref(link.href, basePath))}" class="connected-card">
        <div class="connected-type">${escapeHTML(link.type || 'Related Entry')}</div>
        <div class="connected-name">${escapeHTML(link.title)}</div>
        <div class="connected-desc">${escapeHTML(link.description || '')}</div>
      </a>`)
    .join('\n');
}

function renderExternal(links) {
  return (links || [])
    .map(link => `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer" class="ext-link">
        <div class="ext-left">
          <div class="ext-source">${escapeHTML(link.source)}</div>
          <div class="ext-title">${escapeHTML(link.title)}</div>
        </div>
        <span class="ext-arrow">&#x2197;</span>
      </a>`)
    .join('\n');
}

function renderQuizCard(entry, basePath, dateLabel) {
  if (!entry.fullDate) return '';
  return `    <a href="${basePath}index.html?day=${escapeHTML(entry.fullDate)}" class="quiz-card">
      <div class="quiz-card-left">
        <div class="quiz-card-label">Take the Challenge &middot; ${escapeHTML(dateLabel)}</div>
        <div class="quiz-card-title">Open the daily challenge for ${escapeHTML(entry.subject)}</div>
      </div>
      <div class="quiz-card-icon">&#x2192;</div>
    </a>`;
}

function renderRichPage(entry) {
  const dateLabel = entry.dailyDateLabel || entry.fullDate;
  const basePath = entry.basePath || '../../';
  const quoteHtml = renderQuote(entry.quote);
  const relatedHtml = renderConnected(entry.connected, basePath);
  const externalHtml = renderExternal(entry.externalLinks);
  const quizHtml = renderQuizCard(entry, basePath, dateLabel);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHTML(entry.subject)} - Black History in Real Time Encyclopedia</title>
<meta name="description" content="${escapeHTML(entry.summary)}">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Bebas+Neue&display=swap" rel="stylesheet">
<style>
  :root { --red:#C41E3A; --black:#0A0A0A; --green:#1A5C38; --gold:#D4A017; --orange:#E8621A; --cream:#F5EDD8; --white:#FAFAFA; --card-bg:#161616; --border:rgba(212,160,23,0.2); --purple:#6B2D8B; }
  *{margin:0;padding:0;box-sizing:border-box;} html{scroll-behavior:smooth;}
  body{background:var(--black);color:var(--cream);font-family:'DM Sans',sans-serif;min-height:100vh;overflow-x:hidden;}
  body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");pointer-events:none;z-index:0;}
  .pan-stripe{display:flex;height:6px;width:100%;}.pan-stripe .s1{background:var(--red);flex:1;}.pan-stripe .s2{background:#111;flex:1;}.pan-stripe .s3{background:var(--green);flex:1;}
  header{position:sticky;top:0;z-index:50;background:rgba(10,10,10,0.97);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);}
  .header-inner{max-width:1100px;margin:0 auto;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
  .logo-area{display:flex;align-items:center;gap:14px;text-decoration:none;}
  .logo-img{width:52px;height:52px;border-radius:50%;object-fit:cover;box-shadow:0 0 0 2px var(--gold),0 0 20px rgba(212,160,23,0.3);flex-shrink:0;}
  .logo-text h1{font-family:'Bebas Neue',sans-serif;font-size:1.6rem;letter-spacing:2px;color:var(--white);line-height:1;}.logo-text h1 span{color:var(--gold);}
  .logo-text p{font-size:0.65rem;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-top:1px;}
  nav{border-top:1px solid rgba(212,160,23,0.1);display:flex;justify-content:center;gap:0;padding:0 32px;overflow-x:auto;scrollbar-width:none;} nav::-webkit-scrollbar{display:none;}
  nav a{border-bottom:3px solid transparent;color:rgba(245,237,216,0.45);font-size:0.78rem;letter-spacing:2.5px;text-transform:uppercase;padding:12px 18px;white-space:nowrap;text-decoration:none;display:inline-block;transition:all .2s;}
  nav a:hover{color:var(--cream);} nav a.active{color:var(--gold);border-bottom-color:var(--gold);}
  main{position:relative;z-index:1;max-width:780px;margin:0 auto;padding:48px 32px 100px;}
  .breadcrumb{font-size:0.68rem;letter-spacing:2px;text-transform:uppercase;color:rgba(245,237,216,0.35);margin-bottom:32px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
  .breadcrumb a{color:var(--gold);text-decoration:none;}.breadcrumb a:hover{text-decoration:underline;}
  .back-btn{display:inline-flex;align-items:center;gap:8px;background:rgba(212,160,23,0.06);border:1px solid var(--border);border-radius:100px;padding:8px 18px;color:var(--gold);font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;text-decoration:none;margin-bottom:40px;transition:all .2s;}
  .back-btn:hover{background:rgba(212,160,23,0.12);border-color:rgba(212,160,23,0.5);}
  .entry-hero{margin-bottom:48px;animation:fadeUp .5s ease both;}
  .entry-vol-label{font-size:0.68rem;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
  .entry-hero h1{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,6vw,4rem);font-weight:900;color:var(--white);line-height:1.1;margin-bottom:16px;}
  .entry-tagline{font-size:1.05rem;line-height:1.75;color:rgba(245,237,216,0.65);margin-bottom:24px;}
  .entry-badges{display:flex;gap:10px;flex-wrap:wrap;}.badge{background:rgba(212,160,23,0.08);border:1px solid rgba(212,160,23,0.2);border-radius:100px;padding:5px 14px;font-size:0.68rem;letter-spacing:2px;text-transform:uppercase;color:rgba(212,160,23,0.7);}
  .hero-bar{height:4px;width:100%;margin-top:32px;border-radius:2px;background:linear-gradient(90deg,var(--red),var(--gold));}
  .timeline-strip{background:var(--card-bg);border:1px solid var(--border);border-radius:16px;padding:28px 28px 20px;margin-bottom:48px;animation:fadeUp .5s ease .1s both;}
  .timeline-label{font-size:0.65rem;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
  .timeline-items{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:16px;}
  .tl-date{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:2px;color:var(--gold);line-height:1;margin-bottom:4px;}.tl-event{font-size:0.78rem;line-height:1.5;color:rgba(245,237,216,0.6);}
  .bio-section{animation:fadeUp .5s ease .15s both;}.section-title{font-family:'Bebas Neue',sans-serif;font-size:1.15rem;letter-spacing:5px;color:var(--white);margin-bottom:20px;}
  .bio-section p{font-size:0.98rem;line-height:1.85;color:rgba(245,237,216,0.78);margin-bottom:20px;}
  .pull-quote{background:var(--card-bg);border:1px solid var(--border);border-left:none;border-radius:0 16px 16px 0;padding:28px 28px 28px 32px;margin:36px 0;position:relative;}
  .pq-bar{position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,var(--red),var(--gold));border-radius:2px 0 0 2px;}
  .pull-quote blockquote{font-family:'Playfair Display',serif;font-size:1.1rem;font-style:italic;line-height:1.7;color:var(--cream);margin-bottom:12px;}.pull-quote cite{font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;color:rgba(212,160,23,0.6);}
  .why-section{background:rgba(196,30,58,0.05);border:1px solid rgba(196,30,58,0.15);border-radius:16px;padding:32px;margin:40px 0;}.why-label{font-size:0.65rem;letter-spacing:4px;text-transform:uppercase;color:var(--red);margin-bottom:12px;}
  .why-section p{font-size:0.95rem;line-height:1.8;color:rgba(245,237,216,0.72);margin-bottom:14px;}.why-section p:last-child{margin-bottom:0;}
  .cost-section{background:rgba(180,90,0,0.06);border:1px solid rgba(180,90,0,0.2);border-radius:16px;padding:32px;margin:24px 0;}.cost-label{font-size:0.65rem;text-transform:uppercase;color:#b45a00;margin-bottom:12px;font-family:'Bebas Neue',sans-serif;letter-spacing:3px;}
  .cost-section p{font-size:0.95rem;line-height:1.8;color:rgba(245,237,216,0.72);margin-bottom:14px;}.cost-section p:last-child{margin-bottom:0;}
  .section-divider{display:flex;align-items:center;gap:16px;margin:48px 0 32px;}.section-divider span{font-size:0.65rem;letter-spacing:4px;text-transform:uppercase;color:rgba(212,160,23,0.4);white-space:nowrap;}.section-divider::before,.section-divider::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(212,160,23,0.2),transparent);}
  .connected-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;}.connected-card{background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:18px;text-decoration:none;display:block;transition:all .2s;position:relative;}.connected-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--red),var(--gold));border-radius:12px 12px 0 0;}.connected-card:hover{border-color:rgba(212,160,23,0.5);transform:translateY(-2px);}
  .connected-type{font-size:0.6rem;letter-spacing:3px;text-transform:uppercase;color:rgba(212,160,23,0.5);margin-bottom:6px;}.connected-name{font-family:'Playfair Display',serif;font-size:0.95rem;font-weight:700;color:var(--white);line-height:1.3;margin-bottom:6px;}.connected-desc{font-size:0.78rem;line-height:1.55;color:rgba(245,237,216,0.5);}
  .quiz-card{display:flex;align-items:center;justify-content:space-between;gap:16px;background:rgba(196,30,58,0.12);border:1px solid rgba(196,30,58,0.3);border-radius:12px;padding:20px 22px;text-decoration:none;transition:all .2s;margin-bottom:12px;}.quiz-card:hover{background:rgba(196,30,58,0.2);border-color:rgba(196,30,58,0.6);transform:translateY(-2px);}
  .quiz-card-label{font-size:0.6rem;letter-spacing:3px;text-transform:uppercase;color:var(--red);margin-bottom:6px;}.quiz-card-title{font-family:'Playfair Display',serif;font-size:1rem;font-weight:700;color:var(--white);line-height:1.3;}.quiz-card-icon{font-size:1.6rem;flex-shrink:0;color:var(--gold);}
  .external-links{display:flex;flex-direction:column;gap:10px;}.ext-link{display:flex;align-items:center;justify-content:space-between;gap:16px;background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:18px 22px;text-decoration:none;transition:all .2s;}.ext-link:hover{border-color:rgba(212,160,23,0.5);transform:translateX(4px);}
  .ext-source{font-size:0.62rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:4px;}.ext-title{font-size:0.88rem;color:var(--cream);line-height:1.4;}.ext-arrow{color:var(--gold);font-size:1.1rem;flex-shrink:0;}
  footer{position:relative;z-index:1;border-top:1px solid rgba(212,160,23,0.15);padding:28px 32px;text-align:center;} footer p{font-size:0.72rem;color:rgba(245,237,216,0.28);letter-spacing:2px;} footer a{color:var(--gold);text-decoration:none;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
  @media(max-width:620px){.header-inner{padding:12px 16px;}nav{padding:0 16px;justify-content:flex-start;}nav a{padding:10px 12px;font-size:0.72rem;}main{padding:32px 16px 80px;}.timeline-items{grid-template-columns:1fr 1fr;}.connected-grid{grid-template-columns:1fr;}}
</style>
</head>
<body data-entry-id="${escapeHTML(entry.encyclopediaSlug)}">
<div class="pan-stripe"><div class="s1"></div><div class="s2"></div><div class="s3"></div></div>
<header>
  <div class="header-inner">
    <a class="logo-area" href="${basePath}index.html">
      <img src="${basePath}logo.png" alt="Black History in Real Time" class="logo-img">
      <div class="logo-text"><h1>Black<span>History</span></h1><p>In Real Time</p></div>
    </a>
  </div>
  <nav>
    <a href="${basePath}index.html">Today</a>
    <a href="${basePath}index.html#now">Making History Now</a>
    <a href="${basePath}index.html#calendar">Calendar</a>
    <a href="${basePath}index.html#archive">Archive</a>
    <a href="${basePath}encyclopedia.html" class="active">Encyclopedia</a>
    <a href="${basePath}index.html#about">About</a>
  </nav>
</header>
<main>
  <div class="breadcrumb">
    <a href="${basePath}encyclopedia.html">Encyclopedia</a>
    <span>&#x203A;</span>
    <span>${escapeHTML(dateLabel)} &middot; ${escapeHTML(entry.category)}</span>
  </div>
  <a href="${basePath}encyclopedia.html" class="back-btn">&#x2190; Back to Encyclopedia</a>

  <div class="entry-hero">
    <div class="entry-vol-label">${escapeHTML(dateLabel)} &middot; ${escapeHTML(entry.category)}</div>
    <h1>${escapeHTML(entry.subject)}</h1>
    <p class="entry-tagline">${escapeHTML(entry.summary)}</p>
    <div class="entry-badges">
      <span class="badge">${escapeHTML(entry.type || 'People')}</span>
      <span class="badge">${escapeHTML(entry.dates)}</span>
    </div>
    <div class="hero-bar"></div>
  </div>

  <div class="timeline-strip">
    <div class="timeline-label">Key Dates</div>
    <div class="timeline-items">
${renderTimeline(entry.timeline)}
    </div>
  </div>

  <div class="bio-section">
    <div class="section-title">Full Story</div>
${paragraphs(entry.fullStory)}
  </div>

${quoteHtml ? `  ${quoteHtml}\n` : ''}
  <div class="cost-section">
    <div class="cost-label">Cost / Impact</div>
${paragraphs(entry.costImpact)}
  </div>

  <div class="why-section">
    <div class="why-label">Why It Matters Today</div>
${paragraphs(entry.whyItMattersToday)}
  </div>

  <div class="section-divider"><span>Explore More</span></div>
  <div class="connected-section">
    <div class="section-title">Connected To</div>
${quizHtml}
    <div class="connected-grid" style="margin-top:0;">
${relatedHtml}
    </div>
  </div>

  <div class="section-divider"><span>Learn More</span></div>
  <div class="external-section">
    <div class="section-title">External Links</div>
    <div class="external-links">
${externalHtml}
    </div>
  </div>
</main>
<footer>
  <p>&copy; 2026 <a href="${basePath}index.html">Black History in Real Time</a> &middot; <a href="https://instagram.com/blackhistoryinrealtime" target="_blank" rel="noopener noreferrer">@blackhistoryinrealtime</a> &middot; History happens every day</p>
  <div class="pan-stripe" style="margin-top:20px;height:3px;"><div class="s1"></div><div class="s2"></div><div class="s3"></div></div>
</footer>
</body>
</html>
`;
}

module.exports = {
  renderRichPage,
};
