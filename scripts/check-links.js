// scripts/check-links.js
// Reads all encyclopedia entries, extracts external links, and verifies each URL.

const https = require('https');
const http  = require('http');
const { getAllContentFiles } = require('./lib/utils');
const { parseAllContent }    = require('./lib/content-parser');

const TIMEOUT_MS = 10000;

// ── 1. Collect all external links across entries ─────────────────────────────

const files = getAllContentFiles();
const { entries, errors: parseErrors } = parseAllContent(files);

if (parseErrors.length > 0) {
  console.error('❌ Parse errors — fix content before checking links:');
  parseErrors.forEach(e => console.error(`   ${e.file}: ${e.error}`));
  process.exit(1);
}

const tasks = [];
entries.forEach(entry => {
  (entry.externalLinks || []).forEach(link => {
    tasks.push({ entryId: entry.id, url: link.url, source: link.source, title: link.title });
  });
});

if (tasks.length === 0) {
  console.log('─'.repeat(50));
  console.log('LINK CHECK');
  console.log('─'.repeat(50));
  console.log('ℹ️  No external links found across all entries.');
  process.exit(0);
}

console.log('─'.repeat(50));
console.log('LINK CHECK');
console.log('─'.repeat(50));
console.log(`🔗 Links found: ${tasks.length}`);
console.log('');

// ── 2. Check each URL ────────────────────────────────────────────────────────

function probe(url, method) {
  return new Promise(resolve => {
    let resolved = false;
    const finish = result => { if (!resolved) { resolved = true; resolve(result); } };

    let parsed;
    try { parsed = new URL(url); } catch {
      return finish({ status: 'BROKEN', code: null, detail: 'Invalid URL' });
    }

    const lib = parsed.protocol === 'https:' ? https : http;
    const options = {
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.pathname + parsed.search,
      method,
      headers: { 'User-Agent': 'BlackHistoryInRealTime/1.0 link-checker' },
      timeout: TIMEOUT_MS,
    };

    const timer = setTimeout(
      () => finish({ status: 'TIMEOUT', code: null, detail: `>${TIMEOUT_MS}ms` }),
      TIMEOUT_MS
    );

    try {
      const req = lib.request(options, res => {
        clearTimeout(timer);
        res.destroy(); // never buffer the body
        const code = res.statusCode;
        if (code >= 200 && code < 300) finish({ status: 'OK', code, detail: '' });
        else if (code >= 300 && code < 400) finish({ status: 'REDIRECT', code, detail: res.headers.location || '' });
        else finish({ status: 'BROKEN', code, detail: '' });
      });
      req.on('timeout', () => { clearTimeout(timer); req.destroy(); finish({ status: 'TIMEOUT', code: null, detail: `>${TIMEOUT_MS}ms` }); });
      req.on('error', err => { clearTimeout(timer); finish({ status: 'BROKEN', code: null, detail: err.message }); });
      req.end();
    } catch (err) {
      clearTimeout(timer);
      finish({ status: 'BROKEN', code: null, detail: err.message });
    }
  });
}

// HEAD first; fall back to GET on 405 (Method Not Allowed).
// 403 from HEAD is treated as BLOCKED — many institutional sites (LoC, Smithsonian, NMAAHC)
// reject automated probes at the CDN level while the URL itself is valid in a browser.
async function checkUrl(url) {
  const result = await probe(url, 'HEAD');
  if (result.code === 405) {
    return probe(url, 'GET');
  }
  if (result.code === 403) {
    return { status: 'BLOCKED', code: 403, detail: 'Site blocks automated probes — verify manually' };
  }
  return result;
}

// ── 3. Run checks sequentially to avoid hammering servers ───────────────────

async function run() {
  const results = { ok: 0, redirect: 0, blocked: 0, broken: 0, timeout: 0 };
  const broken  = [];

  for (const task of tasks) {
    const { status, code, detail } = await checkUrl(task.url);
    const codeStr = code ? ` [${code}]` : '';
    const icon = { OK: '✅', REDIRECT: '↪️ ', BLOCKED: '🔒', BROKEN: '❌', TIMEOUT: '⏱️ ' }[status] || '❓';

    console.log(`${icon} ${status}${codeStr}  ${task.entryId}  ${task.url}`);
    if (detail) console.log(`      ${detail}`);

    results[status.toLowerCase()] = (results[status.toLowerCase()] || 0) + 1;
    if (status === 'BROKEN' || status === 'TIMEOUT') {
      broken.push({ ...task, status, code, detail });
    }
  }

  console.log('');
  console.log('═'.repeat(50));
  console.log(`✅ OK:       ${results.ok      || 0}`);
  console.log(`↪️  Redirect: ${results.redirect || 0}`);
  console.log(`🔒 Blocked:  ${results.blocked  || 0}  (verify manually — site blocks bots)`);
  console.log(`❌ Broken:   ${results.broken   || 0}`);
  console.log(`⏱️  Timeout:  ${results.timeout  || 0}`);
  console.log('═'.repeat(50));

  if (broken.length > 0) {
    console.log('\n⚠️  Fix these links before publishing:');
    broken.forEach(b => {
      const codeStr = b.code ? ` [${b.code}]` : '';
      console.log(`   ${b.entryId} → ${b.url}${codeStr}`);
      if (b.detail) console.log(`      ${b.detail}`);
    });
    process.exit(1);
  }

  console.log('\n✅ All verifiable links OK.');
}

run().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
