# VOICE.md: Luciano's Library (the mini-books)

**Precedence.** This file is the voice contract for every page under `src/content/pages/`. It outranks AGENTS.md and the portable `ironic` persona wherever they disagree (heading case, exclamation points, contractions). Settled 2026-11-17: the owner chose the 2024-25 originals, not the current text, as the source of the voice.


Derived from `.forge/corpus-2025/` (commit 7f1e879, 2025-07-28), never from AGENTS.md or the 2026 `pages/`.
Core sample: 37 hand-written files, 20,334 body words (prose and list lines only). Strict-typed subset: 20 files,
7,175 words, no curly apostrophes. Excluded as template or AI-flavored in the original: adrs, adrs-example,
digital-life, okr*, communications-reference*, slack, talent-quotes, airtable-3-5/3-9, theory-hospital-workflow.
All counts are per 1,000 words unless marked "page" (about 580 words). Re-run (local only, gitignored): `.forge/voice-measure/README.txt`.
Differs from `ironic` only where stated below; the rest of `ironic` holds.

## Register

`brand`. The copy is the product: a hobbyist's guide that teaches through one extended metaphor.

## Audience

A working tech peer, often Spanish-speaking, who wants the shortcut the author wishes they had had.

## Identity (found in all five registers: landing, narrative, how-to, review, game)

1. **You first, I as witness.** you/your 24-33, I 7.5-19.7 (core: 31.1 vs 11.7). `we` is inclusive, 4.7.
2. **Contractions are the default.** Rate 0.58-0.78 in every register (core 0.68, typed 0.64). "Do not" is for stress.
3. **Short blocks.** Paragraph median 1 sentence (53% are one), p90 3, only 2% reach 5. Sentence median 15 words, p90 28.
   8.5% run 30+ words and 15% are 5 or fewer. Comma-chained run-ons are part of the voice. Do not even them out.
4. **Humor is a plain admission against a solemn setup.** "I made it through, but I cried my way to graduation." (confluence-chapter-0.md:37)
   Roles get personified: "they have nightmare stories ... their hearts will remember the experience" (troubleshooting.md:86).
   A list can escalate to a shrug: Read the Error / Google the Error / Accept the Error / Live with the Error (troubleshooting.md:123).
5. **The jokes sit in the packaging.** 7 of 36 descriptions end in ! or ?; titles, epigraphs and headings carry the references
   ("Let's Build a Death Star!" lsp-chapter-3.md:4; "Question Around and Find Out"; "Git Gud"; song-title headings).
6. **Costs in real units and a verdict, good and bad.** "Expect to pay at least $30 USD to forward packages to Chile" (lsp-chapter-3.md:135);
   a "Tried but..." section (shopping.md:134); "Price is awful but understandable." (shopping.md:140).
7. **Unfinished and unsure, said openly.** Hedges (may/might/perhaps/probably) 4.6 per page median; warning banners
   (troubleshooting.md:16); `[Pending to add...]` (company-politics-game.md:38). "I don't know" is never dressed up.
8. **Open on the author's situation or a question, no recap.** 9 hand-written landings: 5 open on "I", 2 on a question, 2 on a problem.
   Chapters end on a hand-off or a rule of thumb, not a summary. Only 2 headings in 37 files are close-ish ("What's Next?", "Random Conclusions").
9. **Headings: Title Case** (143 of 147 multi-word), median 2 words, max 8, 6% questions. Landing pages share
   "How This Mini-Book Can Help You" and "Chapters Overview" (8 of 191 headings each).
10. **Bold-lead bullets.** `**Term**: sentence.` 5.0, colons ~20, 40% of words sit in lists. Reference pages carry the most (p90 15).
11. **One frame, not sprinkled references.** Whole books are metaphors (Dark Souls, chess, LEGO, skill tree). Outside the Dark Souls frame
    there are 15 named-reference moments in about 17k words (0.9), roughly half in descriptions and epigraphs.
12. **Spanish as seasoning.** "jaja" (lsp-chapter-0.md:56), "yeiii" (airtable-chapter-3.md:29), one untranslated proverb
    (troubleshooting.md:97), Chile as an aside (lsp-chapter-3.md:86). Never a full Spanish passage.
13. **US spelling.** 176 US forms, 0 UK forms found.

## Where this corpus differs from `ironic`

Agrees: first person plus "you", short blocks, contrast humor, costs in units, open uncertainty, ellipsis rare, no hype words.
Stronger here: "you" outweighs "I" 2.7 to 1 (instructional, not diary); confessional backstory (confluence-chapter-0.md:25-40); mild profanity
("bullshit", "half-ass": 2 in 20k); a metaphor frame over the whole book; Title Case; bold-lead lists; exclamations at 2.7 (ironic caps at 4 per post).
Weaker here: no "Why? Security." pivots (0.24 per 1k); "lol" never; no closing sign-off.
Em dash: typed files 0.56, files with curly apostrophes 5.96. The dash arrives with the curly quotes, so it reads as an editing tool, not the hand.

## Budgets (measured; page = median / p90 / max over 22 pages of 300+ words)

| Token | Core per 1k | Per page | Rule |
|---|---|---|---|
| Exclamation | 2.7 | 1 / 4 / 9 | cap 4 per page; 0 in body headings |
| Ellipsis | 0.8 | 0 / 1 / 2 | cap 2 |
| Semicolon | 0.8 | 0 / 2 / 5 | cap 2, as "claim; consequence" only |
| Parentheses | 5.4 | 2 / 15 / 23 | aside, not citation; cap 13 per 1k |
| Question mark | 2.7 | 1.5 / 5 / 10 | in-line "Not always the best play?" shape |
| Uncontracted "X not" | 1.3 | 1 / 3 / 4 | cap 4 |
| Strikethrough | 0.2 | 4 in 37 files | once per landing page, claim then correction |
| jaja / haha / yeiii | 0.1 | 3 in 29k words | cap 1 per book |
| Profanity | 0.1 | 2 in 20k | cap 1 per book |
| Named reference | 0.9 | about 1 | cap 2 per page; never two in one paragraph |
| Hedges | 4.6 | 2.5 / 8 | floor, not cap |
| Em dash | 0.56 typed | 1 / 5 / 14 | cap 0 (owner rule), use comma or colon |

## Quirks: keep or fix

Keep (carry personality): the Spanish seasoning above; "a big nono" (airtable-chapter-3.md:64); capital shout "WHAT ARE YOU DOING!?" (troubleshooting.md:91);
"right?, right???" (company-politics-game.md:93); "I digress" (confluence-chapter-0.md:31); Title Case headings.
Fix (plain errors): spelling "saddly", "lenght", "intersting", "definetely", "carefull", "reallity", "discarted", "Mechanichs", "bussinees";
grammar "Depending of" (writing.md:9), "An URL", "a offer", "a event", "I haven't use", "Trying to figuring" (troubleshooting.md:83), dropped subject "Is easier to spot" (writing.md:24);
Spanish calques "Specially" for especially (lsp-chapter-1.md:99), "derivated" (lsp-chapter-0.md:42), "oversighted" (thesis-the-core-five-0.md:46), "IA" for AI, "Responsabilities".
Copy edit may fix these without touching rhythm. Do not fix them by rewriting the sentence.

## Banned, with reason

- Em dash: owner rule; the 2026 batch ran 6.53, typed originals 0.56.
- "It is not X. It is Y." pairs and "Not X. Not Y." fragments: 1.80 and 0.41 in the 2026 books, 0.20 and 0.10 in the core.
- Tidy aphorism closers ("Nobody throws a party for the incident that never happened", thesis-the-core-five-1.md, 2026): seen in the 2026 batch, never in the originals.
- Uncontracted prose throughout: 2026 rate 0.017 against 0.68. Also "I" falling to 1.5 and exclamations to 0.16 per 1k.
- Verb "leverage", "utilize", "robust", "seamless", "streamline", "holistic", "furthermore", "moreover": 0 in the hand-written core (the two hits are the verb in confluence-chapter-3.md:83 and thesis-the-core-five-1.md:47, both in the polished set; "more leverage" as a noun at ds-interviews-chapter-0.md:24 is fine).
- Emoji-bulleted benefit lists and "strategic asset" prose (adrs.md, digital-life.md): AI-flavored even in 2025, 0 in the typed core.
- Sentence-case headings: not banned, not required. The originals use Title Case, so do not convert.
- Opening with a definition ("OKRs are strategic tools ..." okr-chapter-1.md:20): never in the hand-written landings.

## Calibration

Base fact: the LEGO kit reaches Chile by P.O. box, at least 30 USD to forward, 3 to 4 weeks (lsp-chapter-3.md:135-137).

On-voice:
> Buying the kit is the easy part. Getting it to Chile is the expensive one: the P.O. box charges at least 30 USD just to forward it, and then you wait 3 to 4 weeks. Yes, I checked, direct shipping isn't an option. Plan the workshop around the box.

Over-cooked (do not do this):
> Buying the kit is not the hard part. It is the logistics [em dash] and the logistics are brutal. Shipping to Chile takes 3-4 weeks, and the forwarding fee is a staggering 30 USD, jaja!!! Jedi-level patience required. In the end, a workshop without bricks is just a meeting.

The first has one cost in units, one admission, one fragment, a contraction and no ornament. The second stacks the 2026 pair, the dash, shouting,
a Spanish token, a franchise tag and a closing aphorism, all in four sentences.

## Blessed words, extra banned words, bilingual

Blessed: game, build, boss, bonfire, character, skill tree, board, pieces, mapping, rant, mini-book, "How complicated can it be, right?".
Extra banned: those in the lint block. Bilingual: EN pages only, neutral Chilean seasoning; an ES edition is open (see below).

## On-voice example (real)

"I feel awkward writing the following section about myself rather than jumping straight to the topic" (confluence-chapter-0.md:17).

## Open

Which 2025 passages were polished by a tool is unknown (curly quotes and em dashes cluster in 12 files). Rare-token counts (strikethrough, profanity, Spanish) rest on 2 to 4 hits.

```lint
ban /\xE2\x80\x94/ em dash: owner rule; the typed originals use 0.56 per 1k, the 2026 batch 6.53
ban /\b[Ll]everag(es|ed|ing)\b|\b[Ll]everage (the|your|our|it)\b/ verb form: 0 in the hand-written core
ban /\b[Uu]tiliz(e|es|ed|ing)\b/ say use
ban /\b([Rr]obust|[Ss]eamless(ly)?|[Ss]treamlin(e|es|ed|ing)|[Hh]olistic|[Pp]ivotal|[Tt]apestry)\b/ hype words the core never uses
ban /\b([Ff]urthermore|[Mm]oreover|[Ii]n conclusion)\b/ formal connective, 0 in the core
ban /[Ii]t(.s| is) (worth|important) (noting|to note)/ preamble: cut it
ban /[.!?] Not [^.!?]{2,45}[.] Not / 2026 tell: stacked Not-fragments
ban /\b(is|are) not [^.!?]{3,70}[.] (It|That|This|They) (is|are)\b/ 2026 tell: negate then restate, 1.80 per 1k against 0.20
cap 1 /\bThe (real|key|goal|trick|skill|point|difference) (is|isn.t|is not)\b/ 2026 tell: 1.31 per 1k against 0.20
cap 4 /\b(do|does|did|is|are|was|were|have|has|had|would|should|could|will|can) not\b/ uncontracted prose: core median 1 per page, max 4
cap 2 /!!/ stacked exclamation: never in the core (it has 0 doubles)
cap 4 /!(?!\[)/ exclamation (not the ! of Markdown image syntax): median 1 per page, p90 4
cap 2 /\.\.\./ ellipsis: p90 1 per page, max 2
cap 2 /^[^<]*[a-z)]; [A-Za-z]/ prose semicolon, lines with HTML skipped: p90 2 per page, max 5
cap 1 /\b([Jj]aja|[Hh]aha|[Yy]eiii|[Ll]ol)\b/ laughter tokens: 3 in 29k words
cap 2 /\b(Jedi|Anakin|Darth|Star Wars|Zenitsu|Mahoraga|Pokemon|Mario|Tinder)\b/ named references outside the book's own frame
```
