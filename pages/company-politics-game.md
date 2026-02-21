---
layout: custom
title: Tech Manager
description: Take less to play than the actual thing!
status: red
category: meta
---

A boardgame to teach players how to became a successful ~~or at least how to survive as a~~ manager.
Making them aware of the cards that they have, how they can play with them, but also how they can take into account the ones from other players and use them against them. All to prove to the higher ups who's the best to keep around.

## Summary

As candidate Manager looking for a promotion, your objective is to build your team, complete projects, earn reputation points, secure your position, and if you play your cards well, become a Director.

Contents:

- **Players**: 3-4(5).
- **Duration**: 40 Min.
- **Items**:
	- Event Deck
	- Early Layoff Cards
	- Bonus Projects Cards 
		- Lv 1
		- Lv 2
	- Rush Quarter Deck
	- Base Deck
		- People Cards 👤
		- Projects Cards 📦
		- Charisma Cards ✨
		- Communication Cards 📣
		- Technical Cards 🔧
		- Complexity Cards 📈 
		- (...)

<br>

## Mechanichs

[Pending to add/consider the style card as an additional reinforcement]

A match is composed of 8 quarters (2 fiscal years), and a quarter is a round of cadidates' turns.

During each turn, candidates will pick an event from the **Event Deck**. More often than not this will present a challenge that they will have to face using their cards as resources to face them.

The events may range from net positive to loses. Good news, decent news and drama, is what you can expect.

The types of cards will be later on explained, but the basic strategy is to keep a good balance between **People Cards** and **Project Cards**, played in front of you. This cards at the end of the game will represent your work history.

---

Every quarter one player will choose a card from the **Rush Quarter Deck**, and select a candidate to resolve it. This type of event can cause effects like:

- Hand size reduction (affecting the next quarter).
- Moral Damage to People Card.
- Opening new paths to victory.

_But we aware, the gains from this betrayal will cost you more than you think!_

Candidates may and should choose to play cooperatively at some points in the game, as it's key to get far and not get an **Early Layoff**.

After the first fiscal year, three **Early Layoff** cards will be added to the **Event Deck**. The candidate that started playing will be the first **Target**. Each quarter, it will change to the next player following the same order of play.

If a **Early Layoff** is drawn and the **Target** doesn't have enough **reputation points** to justify it's position, it's out of the game. But in case it does, it will lose all his played cards with the exception of half of the people cards and it will gain inmmunity so the target of the layoff will skip it.

<br>

### Projects

Projects are what provide you **reputation points**, you can only work on projects if you have enough team (**People Cards**) to assign to them.
There is a base limit of three active projects per player, which means that your team even if you have more people can only work at three until completed.

You can play team cards, but you need to complete the amm

```

╔═══════════════════════════╗
║     On-Prem Migration  📦 ║   ← Title, Type
╠═══════════════════════════╣
║     (Image goes here)     ║   ← Image area
║       ASCII/Art/etc.      ║
╠═══════════════════════════╣
║ 👤 Total: 5 People        ║   ← Total of people that must have participated across all quarters
║ 🩸 Deadline: 3 Quarters   ║   ← Amount of rounds to complete.
║ 🏆 Reward: 20 Rep. Pts.   ║ 
║ ⚠️ Penalty: 10 Rep. Pts.  ║   ← If you are not able to complete the project, you will lose reputation.
╚═══════════════════════════╝

```

Clarifications:
- If you have three people assigned to it, during two quarters, the project will be completed. 
- If you receive a new project be either as a bonus or "favor" for another candidate, you won't be able to work on them until you finish one of the other projects.
	- You can assign people to them, but you are not allowed to move people from the project until completed.
		- *If have someone already working with the team, you wouldn't pull them out, right?, right???*


### People

```

╔═══════════════════════════╗
║         Tech Lead      👤 ║   ← Title, Type
╠═══════════════════════════╣
║     (Image goes here)     ║   ← Image area
║       ASCII/Art/etc.      ║
╠═══════════════════════════╣
║ 👤 Skill: x2 People       ║   ← Skill may increase the 
║ 🩸 Deadline: 3 Quarters   ║   ← Amount of rounds to complete.
║ 🏆 Bonus: Lv1 Project.    ║   ← If a project is completed with this member in the team, the client will request an additional project without time limit.
║ ⚠️ Risks: Events.         ║   ← 
╚═══════════════════════════╝

```

You can change cards based on their number per the cost of users.

Points from Cards: 
- 2 = 1 Member
- 3 = 2 Members
- 4 = 3 Members


<br>

### Profiles

Each manager has their own style, be either to lead or to work. But for sake of simplicity, just Lead style:

- **Strategist Explorer**: no project distribution limit as long as it has people.
	- (To not forget) Can be punished by scope creep and delays like Complexity Cards or Events.
- **Strategist Full Focus**: increases the multipler for all projects by 1
	- Can only have two active projects.
- **Technical Expert**: can use communication cards to progress projects.
	- (To not forget) Communication cards can punish this playstyle and reduce multiplers.


<br>

### A Turn

- You pick 5 cards. Shuffling some once is allowed as you should ensure to have at least one **People Card**.
	- People cards are multipliers, those stay after every quarter, unless they state otherwise.
- The first player doesn't pick a event before starting it's turn.
	- Events have priority resolving at the start of a turn.
	- If an event cannot be applied (e.g., condition can no longer decrease certain attributes) it's skipped.
	- If it applies, it must be resolved.
		- Complexity Cards can be played at this point by other players.
			- Complexity cards add added pointing to the direction of the player that used them. If you have three, it can negate or reduce an effect from a card. Consider it, repaying favors.
- You can play as many cards as you want in front of you. But be aware, you only one per turn, with the exception of the first round were you can draw two.
	- This is with the purpose to provide a good first impression.
- Every 2 quarters, your handsize will reduce 1 card, so you need to choose carefully what to keep around.
- You can at any moment of your turn decide to put a facedown card that won't be affected by any other cards. It may not ensure your victory, but may as well turn the tide.
- There are two type of cards that give you points:
	- **People Cards**:
		- Duration: undefined, based on the card.
		- Value: multipliers, always multipled by 1.
		- Redeem Condition: associated project, no blockers or delays.
		- Example:
			- Small Team: 3x (1)
	- **Projects**: contains duration 
		- Duration: undefined, based on the card.
		- Value: based on the card.
		- Redeem Conditions: associated project, no blockers or delays.
		- Example:
			- Small Project: 1 Quarter, 1 Points
			- Big Project: 2 Quarter, 2 Points
			- Big Chungus Project: 4 Quarters, X Points
- 

Events

- Bonus Projects (Lv 2):
	- Will appear after the third quarter, and depending on their conditions candidates will be preselected to them.
	- Candidates will have to play their cards to ensure the project falls on their team.
		- Here is when other candidates can start affecting the projects, by reducing or delaying their rewards, like with the Dependencies (Complexity Card).
Each card has a set value, every turn events will happen. When this occur.

Every Quarter 

Events

At the end of each turn, a player 

 -
 -
 -

Favors

 -
 -
 -

Consetions



Topic

Reunite points 

Types of cards:

Each card has two effects 

Looks similar to a pendulumn yugioh card

[    ] (Title)
------
[    ] (Image)
------
[    ] (Red background)
[    ] (Blue background)

Each card may be an advantage or disadvantage if conflict arise, so this ensures that your strategy also could play against you if you don't take preventive measures.

- Charisma:
	- Force a player
	- Improve relationships
	- Reduce penalties
	- Improve results
- Technical Expertise
	- Highlevel/Lowelevel
	- 
- Conflict Resolution
- Communication: disrupt or improve
- People
    - Steal Talent/Stolen Talent
    - Hiring/Salary Cuts



