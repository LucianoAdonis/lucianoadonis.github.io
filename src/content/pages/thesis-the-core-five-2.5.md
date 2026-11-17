---
title: The Piece Matrix
description: Know what you have before you move it
status: orange
started: 2026-02-24
revised: 2026-02-24
book: thesis-the-core-five
chapter: 2.5
plate: ../../assets/images/headers/cian-chess-board.png
plateAlt: A light blue banner with a knight, a bishop, a rook and a queen, each labeled with its point value (3, 3, 5 and 9), then a king and a document icon
---

## The Probability Matrix

Forget how expert someone is in a specific technology, what qualities are we looking for?

Leaving out the King (the business, the project, the thing everyone is protecting), each piece maps to a mix of the Core Five that shows up over and over in real teams.

| Piece | Power | Range | Foresight | Insight | Versatility | Speed |
|-------|-------|-------|-----------|---------|-------------|-------|
| Queen | High | High | High | High | High | High |
| Rook | High | Low | Low | Medium | Low | High |
| Bishop | Low | Medium | High | High | Medium | Low |
| Knight | Medium | High | Medium | Medium | High | Medium |
| Pawn | Low | Low | Low | Low | Low | Low |

A knight isn't better or worse than a rook, they solve different problems and fail in different conditions. The matrix shows what each piece will probably bring to the board, and what it probably won't.

---

## The Pieces

### Queen

The manager, the lead, the one who moves in any direction at any distance. Queens speed things up because they have enough of every dimension to unblock a situation without waiting for the right specialist.

What a queen does on the board:

- Potentiate and arrange people rather than play every square
- Provide direction and the clarity of the whole picture
- Handle the deadlines and the high-level conversations with the client
- Give insight about the movement of the pieces to whoever needs it

The risk is dependency. Route every hard decision through one person and you have a single point of failure wearing a crown. <!-- source: 2026 batch (8126bde), restored --> When the queen is busy, away or burned out, nothing moves.

Nothing personal, but heroes can become twisted, and the same goes for geniuses. A hero only creates victims to be rescued, and when the hero is busy the people are helpless.

### Rook

High Power, high Speed. The straight-line specialist: reliable, fast and strong in its lane. Point it at a well-defined problem and it'll solve it faster than anyone else, and it's a safe bet when you'd rather skip the mental gymnastics.

The limit is direction. A rook can't go diagonal and can't jump. When the problem needs a cross-cutting answer, it forces a straight line anyway. Sometimes that works, often it leaves debt for someone else to untangle, and you get delays or a solution that misses the point. <!-- source: 2026 batch (8126bde), restored -->

It's easier to play a game with only rooks, but it doesn't last. A team of rooks delivers fast, handles crises well, and slowly gets rigid, and change gets harder and harder. It's also why engineers with tunnel vision can't see priorities that look obvious from above. Their profile wasn't built for that angle.

### Bishop

High Foresight, high Insight. The diagonal thinker. Bishops see patterns, anticipate risks and understand context. They flag a dependency issue three sprints before it blocks anyone, and they know why the last three attempts failed.

The limit is color. A bishop stays on one color for the whole game, and the technical version is someone whose insight runs deep in one domain and struggles to transfer. A bishop who knows infrastructure well may have blind spots in product decisions, mostly from lack of exposure. <!-- source: 2026 batch (8126bde), restored -->

Bishops are easy to undervalue because their output is invisible. They prevent problems instead of solving them loudly.

### Knight

High Versatility, high Range. The unconventional mover. Knights come at problems sideways, jump over blockers that stop everyone else, and produce solutions that work in more than one context.

They're harder to predict and harder to manage, because their strength is that they can't move in straight lines. What looks odd from outside is just how they see the board.

In complex positions, many pieces, many constraints, many competing priorities, a knight's way around obstacles makes them disproportionately useful. <!-- source: 2026 batch (8126bde), restored --> On a clean board with a simple goal, a rook beats them every time.

What they bring is the delta of ideas and creativity, if you don't just squeeze their soul for output. You have to let them move the way they move.

### Pawn

Low across the board, for now. The pawn is potential: junior engineers, new hires in unfamiliar contexts, people who haven't had the chance to develop a profile yet.

A pawn can promote. Given time, investment and a senior covering for them, it can become any other piece, and the path depends on which dimensions the project and the mentorship actually develop.

A pawn on a Reactive project grows Power and Speed, and becomes a rook. A pawn paired with a strong bishop on a Sustaining project with deep context needs grows Foresight and Insight, and becomes a bishop. A pawn exposed to different problems across teams, with a lead who encourages lateral thinking, grows Versatility and Range, and becomes a knight.

<!-- source: 2026 batch (8126bde), restored -->
The project type determines the piece type. That's why placement matters from day one, and why "just give them more work" as a development plan only produces rooks.

---

## Compensation Patterns

Not every position needs every dimension. What matters is whether the ones you have can cover for the ones you don't.

| Combination | Compensates for | How it works |
|-------------|-----------------|--------------|
| Power + Speed | Versatility | Brute-force through what can't be navigated around. Works short-term. |
| Versatility + Speed | Power | Adapt and iterate faster than the problem requires raw strength. |
| Power + Versatility | Speed | Depth plus breadth absorb the cost of taking longer. |
| Range | Hard to compensate | Scope of solutions can't be faked by combining other dimensions. |

Range is the hardest to cover because it needs exposure nothing else substitutes for. You've seen enough contexts to produce solutions that scale, or you haven't<span data-review="new">, and that's why losing one hurts</span>.

### What It Looks Like on the Board

A rook (Power + Speed) can fill a role that needs a knight (Versatility + Range) for a while, but the solutions will be narrower. It works for now and the mismatch piles up.

A knight can fill a rook's role too, but delivery is slower and less predictable. Better designed, later.

A pair of rooks can't do what one bishop does, no amount of execution speed replaces seeing the problem coming. But a rook with a bishop, one giving direction and the other execution, produces more than either alone.

Power and Speed with good support can let pieces position themselves while they learn patterns to improve their moves. A lead keeps the other priorities in check, and the idea is to let the piece handle it, not to handle it for them.

<!-- source: 2026 batch (8126bde), restored -->
Pieces need to be well placed and have other pieces beside them.

---

## Hidden Variables

The matrix assumes each piece plays at its actual level. In practice engineers often underperform their profile, and the reasons have nothing to do with the Core Five.

Why good engineers don't act as they usually do against problems:

- **Perception**: how the person reads the situation. Two people on the same codebase will spot different problems based on what they've trained to notice.
- **Character**: temperament under pressure. Some shut down, some fight, some freeze. It isn't a skill gap, it's a pattern that fits the situation or doesn't. <!-- source: 2026 batch (8126bde), restored -->
- **Skills**: the gap between knowing and executing. Having Foresight doesn't mean having the technical skill to build what you can see.
- **Empathy**: accounting for other people's constraints. Building solutions without thinking of the team that maintains them is a Versatility gap disguised as a technical one.
- **Politics**: the unwritten rules. Who approves what, which battles are worth it, whose opinion counts whatever the org chart says. Engineers who ignore politics get surprised by it.

These five modulate the Core Five. A knight with bad political awareness proposes excellent solutions that never get approved. A rook with low empathy delivers fast and leaves frustrated colleagues behind.

Knowledge in one area doesn't necessarily carry over to others. That's why the engineer you hired at a certain level can still struggle with a problem that looks small from outside.

<!-- source: 2026 batch (8126bde), restored -->
Look at which dimensions the problem needs and which hidden variables are getting in the way, before blaming their level.

---

## Development Difficulty

Not all dimensions improve at the same rate or the same way.

<!-- source: 2026 batch (8126bde), restored -->
Any skill can improve with good working experience, but how much it improves varies a lot.

| Dimension | Improves through | Difficulty |
|-----------|-----------------|------------|
| Power | Practice, repetition, exposure | Moderate |
| Speed | Pressure, deadlines, volume | Low to Moderate |
| Range | Diverse contexts, cross-team work | High |
| Foresight | Understanding decisions, learning from outcomes | High |
| Insight | Time in context, institutional knowledge | Moderate to High |
| Versatility | Varied problems, uncomfortable assignments | High |

Power and Speed improve with practice. Make someone deliver again and again and they grow. That's why most development programs default to giving people more work: it develops the easy dimensions and gives the illusion of progress.

Versatility, Insight and Foresight only improve by understanding the decisions and learning from their consequences. More on that in [Chapter One](/pages/thesis-the-core-five-1#automation-opportunities).

<!-- source: 2026 batch (8126bde), restored -->
Reading and writing let people receive part of that experience second hand, and documentation is the automation that cuts the friction. Real growth in these three still means being close to the decisions.

So a pawn's promotion path depends on the project type more than on the training program.

---
