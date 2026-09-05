# Black History in Real Time

Black History in Real Time is a static daily-history site published from this repository to `blackhistoryinrealtime.com`.

## Current Coverage

Daily coverage is valid from `2026-02-01` through `2026-10-31`.

- February through April 2026 live in the legacy `DATA` array in `index.html`.
- May 1-5 and June 6 2026 are markdown-driven encyclopedia entries in `content/encyclopedia/`.
- May 6 through September 7 2026 live in `content/daily/2026-coverage.js`.
- September 8 through October 31 2026 live in `content/daily/2026-fall.js`; both source modules generate into `generated/daily-data.js`.
- Generated encyclopedia pages for scheduled daily entries live under `generated/pages/`.
- Newly added or materially updated daily content is audited in `docs/RESEARCH_LEDGER.md`.

## Development

Install dependencies, then run the full generation and validation loop:

```bash
npm install
npm run generate
npm test
```

Serve the production static output locally from the repository root:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Validation

`npm run validate` runs the markdown content validator and the daily coverage validator. The daily validator checks required dates, duplicate dates, duplicate slugs, required fields, option counts, answer indexes, approved tags, encyclopedia targets, placeholder text, generated/source reachability, and research source URL coverage for scheduled entries.

`npm run generate` regenerates legacy encyclopedia pages, markdown encyclopedia pages, daily scheduled data, the encyclopedia index, and the research ledger, then reruns the daily validator against generated targets.

## Production

The public site is a static site served from the production branch with `CNAME` set to `blackhistoryinrealtime.com`. `origin/HEAD` points to `main`; deployment should preserve the existing March visual identity and the approved challenge language:

- `THE CHALLENGE`
- `Think before you swipe.`
