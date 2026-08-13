# Black History In Real Time — Content Pipeline

**Status:** Operational and project-management tracker
**As of:** June 13, 2026
**Editorial source of truth:** `docs/BLACK_HISTORY_BIBLE.md`
**Publication history:** `docs/HISTORY_OF_PUBLICATIONS.md`

---

## Current Operating State — August 5, 2026

The site is currently maintained as a static application.

- Daily quiz/story coverage validates from `2026-02-01` through `2026-08-31`.
- Legacy February-April entries remain in the `DATA` array in `index.html`.
- Markdown-driven encyclopedia entries remain in `content/encyclopedia/` and are generated with `scripts/generate-pages.js`.
- Scheduled May-August daily entries live in `content/daily/2026-coverage.js`.
- `scripts/generate-daily-data.js` writes `generated/daily-data.js`, generated encyclopedia pages under `generated/pages/`, and `docs/RESEARCH_LEDGER.md`.
- `scripts/generate-missing-legacy-pages.js` now fills the April legacy encyclopedia gaps that previously produced broken "Learn More" links.
- `scripts/generate-encyclopedia-index.js` writes the public root `encyclopedia.html` and merges legacy, markdown, and scheduled daily entries.
- `scripts/validate-encyclopedia-index.js` checks the rendered encyclopedia for duplicate cards, broken local links, malformed cards, and visibly truncated descriptions.
- `npm run validate`, `npm run generate`, and `npm test` are the required maintenance loop before publication.

The priority-A April broken-link queue below is retained as historical context; those 25 pages have generated legacy HTML pages in `encyclopedia/` as of August 5, 2026.
Carter G. Woodson's accidental legacy/generated duplicate was resolved on August 12, 2026 by preserving the richer legacy page and removing the duplicate markdown source/generated page.

---

## Operational Field Definitions

These four fields appear as columns in the Subject Registry in
`docs/BLACK_HISTORY_BIBLE.md`. Definitions live here to keep the Bible
focused on editorial content.

### Subject Status

The current publishing lifecycle state of the subject.

| Value | Meaning |
|---|---|
| Published | Has live quiz or pipeline content |
| Scheduled | Approved for a specific future date; content not yet generated |
| Planned | Proposed date but pending editorial approval |
| Legacy | Has older encyclopedia HTML only; not in the quiz system |
| Archived | No longer in active use |

### Quiz Status

Whether this subject has a live quiz entry on the Today page.

| Value | Meaning |
|---|---|
| Published | Live in the DATA array or pipeline with a `quizDay` |
| Scheduled | Approved for a future `quizDay`; not yet live |
| Not Published | No quiz entry |

### Encyclopedia Status

The current state of the encyclopedia page for this subject.

| Value | Meaning |
|---|---|
| None | No encyclopedia page of any kind |
| Legacy HTML | Hand-crafted HTML exists in `encyclopedia/` |
| Markdown Source | `.md` file exists in `content/encyclopedia/` only |
| Generated Page | Pipeline has run; `generated/pages/[slug].html` exists |
| Legacy + Generated | Both legacy HTML and generated page exist |

### Workflow Status

`Idea` → `Planned` → `Drafting` → `Drafted` → `Reviewed` → `Approved` → `Published`

A subject may not advance to **Drafting** until all 12 Drafting Gate fields
are assigned. See the Drafting Gate section in `docs/BLACK_HISTORY_BIBLE.md`.

---

## Content Production Workflow

Use this sequence for every new encyclopedia entry.

1. Check `docs/BLACK_HISTORY_BIBLE.md` Subject Registry.
2. Confirm subject status, date, angle, and duplication rules.
3. Draft the markdown entry in `content/encyclopedia/[slug].md`.
4. Run validation: `npm run validate` or `node scripts/lib/validator.js`.
5. Check all external links (verify 200 status).
6. Run the generator: `npm run generate`.
7. Review the generated page locally.
8. Approve.
9. Commit.
10. Verify clean working tree: `git status`.
11. Continue with the next batch.

---

## Milestone Rule

Do not mix infrastructure, layout, and content generation in the same commit
unless explicitly approved.

**Required sequence for every milestone:**

Implement → Validate → Review → Approve → Commit → Show commit hash/git status → Begin next milestone.

---

## Priority Work Queue

### Priority A — Create Encyclopedia Pages for Published Quiz Entries

The following 25 published quiz entries have no encyclopedia page of any kind.
Clicking "Learn More" from the Today page produces a broken or missing link.
All should be written as markdown pipeline entries in `content/encyclopedia/`.

1. 1968 Olympic Protest
2. Assassination of MLK
3. August Wilson
4. Bayard Rustin
5. Billie Holiday
6. Duke Ellington
7. Ella Fitzgerald
8. Environmental Justice
9. Fair Housing Act
10. Gordon Parks
11. Hank Aaron
12. Holy Week Uprisings
13. Jackie Robinson
14. James Baldwin
15. Jean-Michel Basquiat
16. Josephine Baker
17. Kareem Abdul-Jabbar
18. Martin Luther King Jr. (final days)
19. Maya Angelou
20. New York Slave Revolt of 1712
21. Nina Simone
22. Pauli Murray
23. Rachel Robinson
24. Thurgood Marshall
25. Wilma Rudolph

### Priority B — Migrate Older Encyclopedia Pages to Markdown Format

67 HTML files in `encyclopedia/` predate the pipeline. They are accessible
via the encyclopedia index but cannot feed the quiz system, are not validated
by the build pipeline, and cannot be regenerated consistently.

Of these, 59 subjects also have a published quiz entry. The 4 legacy-only
subjects (Barack Obama, Black Press, Black Women in Politics, Harlem
Renaissance) have no quiz entry and are lower migration priority unless a
quiz entry is also planned.

4 planned calendar entries (The Great Migration, HBCUs, Juneteenth, Greenwood /
Black Wall Street) have legacy HTML pages that will need migration before or
during content generation. See Migration Status below.

### Priority C — Review Planned Subjects Before Generating Files

59 subjects in the Planned — Calendar section of the Subject Registry have
proposed dates for May–June 2026. These have not been editorially approved.
Review all against the Duplication Prevention rules and the Repeated Figure
Rule in `docs/BLACK_HISTORY_BIBLE.md` before generating any `.md` files.

24 subjects in the Planned — Pool section have no proposed date. Schedule or
defer based on editorial priorities.

---

## Coverage Gaps

Structural gaps in the current state of the repository.

1. **25 published quiz entries have no linked encyclopedia page.** See
   Priority A above.

2. **`generated/encyclopedia.html` is stale.** Contains only Carter Woodson.
   `scripts/generate-encyclopedia-index.js` is not wired into `npm run
   generate`. The encyclopedia index does not reflect James Meredith or any
   future entries. Resolution: wire `generate-encyclopedia-index.js` into
   `npm run generate` so the index rebuilds automatically on every run.

3. **Resolved August 12, 2026: Carter Woodson dual-page split.** The Feb 1
   quiz entry remains linked to the stronger legacy page at
   `encyclopedia/carter-woodson.html`. The duplicate markdown source and
   `generated/pages/carter-woodson.html` page were removed so the encyclopedia
   index renders one Carter G. Woodson card.

4. **4 legacy pages are not linked from the Today page.** `barack-obama`,
   `black-press`, `black-women-in-politics`, and `harlem-renaissance` are
   accessible via the encyclopedia index but have no corresponding quiz entry.

5. **No `quizDay` field in any legacy HTML file** (except carter-woodson,
   which was migrated to the pipeline). Legacy files cannot feed the
   Today-page quiz without migration to the pipeline format.

---

## Migration Status — Older Encyclopedia Pages

These 67 hand-crafted HTML files live in `encyclopedia/`. Accessible via
`encyclopedia.html` (index) but not connected to the Today-page quiz system.
Reference this table for migration planning.

| Slug | Subject | In Quiz? |
|---|---|---|
| 13th-amendment | Mass Incarceration & the 13th Amendment | Yes (Feb 25) |
| aave | AAVE & Linguistic Culture | Yes (Feb 15) |
| althea-gibson | Althea Gibson | Yes (Mar 26, Apr 17) |
| barack-obama | Barack Obama | No |
| barbara-jordan | Barbara Jordan | Yes (Mar 27, Apr 9) |
| bessie-coleman | Bessie Coleman | Yes (Mar 12) |
| beulah-mae-donald | Beulah Mae Donald | Yes (Mar 11) |
| black-culinary-history | Black Culinary History | Yes (Feb 19) |
| black-dance | Black Dance Culture | Yes (Feb 18) |
| black-fashion | Black Fashion & Cultural Appropriation | Yes (Feb 16) |
| black-press | Black Press | No |
| black-tech-pioneers | Black Tech Pioneers | Yes (Feb 20) |
| black-wall-street | Black Wall Street / Greenwood | No — planned May 31 |
| black-women-in-politics | Black Women in Politics | No |
| brown-v-board | Brown v. Board of Education | Yes (Feb 5) |
| carter-woodson | Carter G. Woodson | Yes (Feb 1) |
| claudette-colvin | Claudette Colvin | Yes (Mar 6) |
| cointelpro | COINTELPRO | Yes (Feb 8) |
| coretta-scott-king | Coretta Scott King | Yes (Mar 24, Apr 3) |
| daniel-hale-williams | Daniel Hale Williams | Yes (Feb 6) |
| diane-nash | Diane Nash | Yes (Mar 9) |
| dorothy-height | Dorothy Height | Yes (Mar 25, Apr 12) |
| education-inequality | Education Inequality by Design | Yes (Feb 24) |
| enslaved-labor | Enslaved Labor & American Infrastructure | Yes (Feb 13) |
| environmental-racism | Environmental Racism | Yes (Feb 26) |
| ericka-huggins | Ericka Huggins | Yes (Mar 21) |
| fannie-lou-hamer | Fannie Lou Hamer | Yes (Mar 3) |
| garrett-morgan | Garrett Morgan | Yes (Feb 3) |
| great-migration | The Great Migration | No — planned May 27 |
| gwendolyn-brooks | Gwendolyn Brooks | Yes (Mar 23) |
| harlem-renaissance | The Harlem Renaissance | No |
| harriet-tubman | Harriet Tubman | Yes (Mar 17) |
| hbcus | HBCUs | No — planned May 30 |
| helen-octavia-dickens | Dr. Helen Octavia Dickens | Yes (Mar 30) |
| henrietta-lacks | Henrietta Lacks | Yes (Mar 1) |
| ida-b-wells | Ida B. Wells | Yes (Mar 2) |
| juneteenth | Juneteenth | No — planned Jun 19 |
| katherine-johnson | Katherine Johnson | Yes (Mar 22) |
| kathleen-cleaver | Kathleen Cleaver | Yes (Mar 20) |
| loving-v-virginia | Loving v. Virginia | Yes (Feb 14) |
| madam-cj-walker | Madam C.J. Walker | Yes (Mar 4) |
| mae-jemison | Mae Jemison | Yes (Mar 5) |
| mamie-till-mobley | Mamie Till-Mobley | Yes (Mar 13) |
| mansa-musa | Mansa Musa | Yes (Feb 4) |
| marsha-p-johnson | Marsha P. Johnson | Yes (Mar 28) |
| mary-mcleod-bethune | Mary McLeod Bethune | Yes (Mar 18) |
| melvin-van-peebles | Melvin Van Peebles | Yes (Feb 17) |
| michelle-obama | Michelle Obama | Yes (Mar 31) |
| mis-education | The Mis-Education of the Negro | Yes (Feb 28) |
| modern-civil-rights | Modern Civil Rights Leaders | Yes (Feb 27) |
| myrlie-evers-williams | Myrlie Evers-Williams | Yes (Mar 16) |
| redlining | Redlining | Yes (Feb 12, Apr 10) |
| rihanna | Rihanna | Yes (Mar 15) |
| rosewood-massacre | The Rosewood Massacre | Yes (Feb 9) |
| ruby-bridges | Ruby Bridges | Yes (Mar 7) |
| sarah-rector | Sarah Rector | Yes (Mar 10) |
| septima-clark | Septima Clark | Yes (Mar 8) |
| shirley-ann-jackson | Dr. Shirley Ann Jackson | Yes (Mar 19) |
| shirley-chisholm | Shirley Chisholm | Yes (Feb 2) |
| slave-patrols | Slave Patrols & Origins of American Policing | Yes (Feb 22) |
| sports-integration | Sports Integration Beyond the Headlines | Yes (Feb 21) |
| the-blues | The Blues | Yes (Feb 11) |
| toni-morrison | Toni Morrison | Yes (Mar 29) |
| tulsa-massacre | The Tulsa Race Massacre | Yes (Feb 7) |
| tuskegee-airmen | The Tuskegee Airmen | Yes (Feb 10) |
| voting-rights | Voting Rights & Suppression | Yes (Feb 23) |
| zora-neale-hurston | Zora Neale Hurston | Yes (Mar 14) |

---

## Automation Recommendations

1. **Generate the registry from the pipeline.** `scripts/generate-data.js`
   already parses all `content/encyclopedia/*.md` frontmatter. A separate
   script could write a machine-readable registry (JSON or CSV) from that
   source, then sync the Tags and Enc. Status columns in `BLACK_HISTORY_BIBLE.md`
   automatically on each `npm run generate` run.

2. **Extract DATA array tags.** The 89-entry DATA array in `index.html`
   contains tag arrays per entry. A one-time script to parse those and
   backfill the Tags column in the Subject Registry would eliminate
   approximately 80 TBD values.

3. **Track workflow status in frontmatter.** Adding a `workflowStatus` field
   to each `.md` file would let the pipeline report it automatically rather
   than requiring manual registry updates.

4. **Auto-update Encyclopedia Status.** The build pipeline already knows
   which slugs have generated pages. It could write an updated status column
   back to a machine-readable registry file after each run.

5. **Wire encyclopedia index generation.** See Coverage Gaps item 2 above.

---

## Open Work

Items approved and queued but not yet started. Update this section as work
is completed or reprioritized.

| Item | Priority | Notes |
|---|---|---|
| Write Priority A encyclopedia pages (25 subjects) | High | No page exists; broken Learn More links |
| Wire `generate-encyclopedia-index.js` into `npm run generate` | High | Encyclopedia index is stale |
| Resolve Carter Woodson dual-page split | Done Aug 12, 2026 | Preserved legacy page; removed duplicate generated page |
| Migrate 4 planned calendar legacy pages before generation | Medium | great-migration, hbcus, juneteenth, black-wall-street |
| Editorially approve May–June 2026 calendar (59 subjects) | Medium | Not yet approved; no files should be generated yet |
| Schedule or defer 24 Pool subjects | Low | No proposed dates |
| Migrate 63 remaining legacy HTML pages to pipeline | Low | Long-term; prioritize subjects with planned quiz dates first |
