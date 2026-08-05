---
# REQUIRED — lowercase letters, numbers, and hyphens only (auto-filled by new-entry.js)
id: {{ID}}

# REQUIRED — full display name (auto-filled by new-entry.js)
name: {{NAME}}

# REQUIRED — ISO date string, quoted to prevent YAML from parsing it as a Date object
quizDay: "YYYY-MM-DD"

# REQUIRED — volume label shown in the hero and card
#   Format: "Month D · Category & Theme"
#   Example: "May 1 · Leadership & Community"
vol: "Month D · Category & Theme"

# REQUIRED — date range using an em-dash (—). Accepted formats:
#   "YYYY — YYYY"         living person or known span
#   "YYYY — Present"      still living
#   "c. YYYY — c. YYYY"   approximate dates
#   "c. YYYY"             single approximate date
#   "YYYY"                single year (events)
#   "Ongoing"             still unfolding
dates: "YYYY — YYYY"

# REQUIRED — must be exactly one of: People | Events | Systems | Culture
category: People

# REQUIRED — 3 to 15 tags, all lowercase-hyphenated
#   Use only tags from content/config/tags.json
#   Add new tags to tags.json first if needed
tags:
  - tag-one
  - tag-two
  - tag-three

# REQUIRED — one factual sentence for the SEO meta description
#   Used in <meta name="description"> only — not shown in the hero
desc: "One factual sentence describing this entry for search engines and social sharing."

# REQUIRED — editorial line shown beneath the title in the hero section
#   Should be evocative and make the reader want to keep reading
tagline: "The line that makes a reader want to keep reading."

# OPTIONAL — card color bar class. Controls the gradient on the entry card.
#   Leave empty for the default red-gold gradient.
#   Options: politics | innovation | erasure | culture | systems
barClass: ""
---

## Timeline

- YYYY: First key life event
- YYYY: Second key event
- YYYY: Third key event
- YYYY: Fourth key event
- YYYY: Fifth key event

## Question

Quiz question text here — end with a question mark?

## Options

- Option A (this will be index 0)
- Option B (this will be index 1)
- Option C (this will be index 2)
- Option D (this will be index 3)

## Answer

0

## Answer Text

One or two sentences explaining the correct answer and providing context.

## Subject

{{NAME}} and the Topic Being Quizzed

## Daily Story

Short quiz-reveal story shown immediately after the answer is revealed on the quiz page.
150–250 words. Punchy, emotional, immediate. Must stand alone — not a summary of the
encyclopedia biography. Hook first. Payoff last. No textbook tone.

## Wait... What?!

The single most surprising or counterintuitive fact about this person or event.
30–200 words. Should work as a standalone callout — the moment that makes a reader stop.
Do not summarize the story. Isolate the jaw-dropping part.

## Cost / Impact

The personal price paid — what was lost, risked, or sacrificed.
50–250 words. Specific and human. Not abstract. Name the cost directly.

## Story

Opening paragraph — establish who this person is and why they matter in the first sentence.

Second paragraph — go deeper into their life, work, or the event.

Third paragraph — historical context, obstacles, or turning points.

Fourth paragraph — legacy, impact, or what happened next.

## Why It Matters

One paragraph explaining the ongoing relevance of this person or event today. Be direct and specific — connect the history to the present.

## Pull Quote

"Quote text goes here." — Source Name

## External Links

- https://example.com | Source Name | Link title or description
- https://example.com | Source Name | Link title or description
- https://example.com | Source Name | Link title or description
