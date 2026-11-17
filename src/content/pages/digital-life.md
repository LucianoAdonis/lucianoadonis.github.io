---
title: Digital Life
description: Taking back some control of your digital life, and a bit of productivity while you're at it.
status: yellow
started: 2024-09-09
revised: 2026-02-21
shelf: life
spine:
  hue: 157
  glyph: lock
elsewhere:
  name: SafeGuard
  url: https://safeguard.neorgon.com/
  relation: related
  note: Step-by-step security guides for accounts and devices.
plate: ../../assets/images/headers/grey-obsidian-graph-view-version-two.png
plateAlt: A web of colored dots joined by thin lines on a dark grey background, like an Obsidian graph view.
---

Ever feel like tech companies know you better than you know yourself? If that's giving you the creeps (and it should), keep reading. This guide's packed with sneaky-smart ways to take back control of your digital life and boost your productivity while you're at it.

---

## Passwords

Reusing passwords is how most digital lives unravel. One breached service hands your credentials to anyone holding the data, and every other service using the same password is next.

The fix is a password manager. "Remembering a strong password for each site" fails at scale. A tool that generates, stores and fills unique passwords doesn't.

<!-- source: 2026 batch (8126bde), restored -->
Once you have one, the workflow is simple. The manager generates a random password for each new account, saves it, and fills it in next time you log in. You only remember one strong master password.

- **Bitwarden**: free, open source, works on every platform and browser. The default recommendation for most people.
- **1Password**: paid, nicer to use, with good shared vaults for families or small teams.

The built-in manager in Chrome, Safari or Firefox is better than nothing, but if someone gets into your browser session they get your passwords too. A separate app adds an independent lock.

---

## Email (Gmail)

<!-- source: 2026 batch (8126bde), restored -->
Your email address is your main digital identifier. How you manage it decides a lot of what lands in your inbox, and what gets exposed when a service gets breached.

### Plus Sign Possibilities

Gmail treats `username+anything@gmail.com` as the same address as `username@gmail.com`. Add any tag after the `+` and the mail still lands in your inbox.

- `username+work@gmail.com` for professional correspondence
- `username+shopping@gmail.com` for online retail accounts

<!-- source: 2026 batch (8126bde), restored -->
Same trick works for `username+newsletters@gmail.com`.

It simplifies filtering and rules, and it tells you who shares your address. If you signed up at a store with `+shopping` and spam starts arriving at that exact address, you know where it came from.

<!-- source: 2026 batch (8126bde), restored -->
A filter can label anything sent to `username+shopping` as "Shopping" and skip the inbox, too.

### Labels

Labels do more than add color: they also help you check who a sender really is. Nested labels keep things readable (`Work/HR`, `Work/Receipts`, `Personal/Banking`), filters can apply them automatically, and you can use them in searches like `label:work/receipts`.

A filter that works well for receipts:

```
From: (noreply@amazon.com OR orders@apple.com)
→ Apply label: Shopping/Receipts
→ Skip inbox
```

### Unsubscribe

Unsubscribing beats building an elaborate labeling system. A filter needs upkeep, unsubscribing is done once.

<!-- source: 2026 batch (8126bde), restored -->
If you catch yourself adding filters for promotional emails, unsubscribe from them instead.

<!-- source: 2026 batch (8126bde), restored -->
- Use Gmail's built-in unsubscribe link when it's there; it's the safest route.
- Be careful with unfamiliar unsubscribe links, some are phishing attempts that confirm your address is alive.
- A service like Unroll.me can handle subscriptions in bulk.

### Account Separation

One address for everything means one breach exposes everything. Splitting it up helps with spam and security:

- **Personal**: people you know.
- **Professional**: work and anything career-related.
- **Online services**: shopping and signups.
- **Disposable**: one-time signups, via SimpleLogin or just a second Gmail account.
- **Aliases**: for contexts like job hunting or volunteering.

When the shopping address gets spam, you deal with it without touching the one you give to people.

<!-- source: 2026 batch (8126bde), restored -->
The disposable one is for signups where you don't expect any kind of relationship.

### Security

<!-- source: 2026 batch (8126bde), restored -->
These go in rough order of impact.

- Enable two-factor authentication, especially on email and anything financial. Use an authenticator app instead of SMS, since SMS codes can be intercepted.
- Use physical security keys for critical accounts.
- Review account activity and connected apps every few months. Old integrations are a forgotten attack surface.
- Set recovery options (backup email, phone number). You'll need them exactly once and be very glad they're there.

<!-- source: 2026 batch (8126bde), restored -->
Google Authenticator and Authy both work for two-factor. Connected apps live in your Google account settings, and anything you no longer use should go.

### Forward Account

Make a separate email account for mobile notifications, so your main inbox stays off a phone you don't fully trust. Create filters that forward only non-sensitive emails, set up Gmail's vacation responder on the forwarding account, and review the rules once in a while.

<!-- source: git e50da50 -->
In an emergency, stop the forwarding rule.

---

## Notifications

Most apps shouldn't be able to interrupt you. The default answer to a notification permission request is no. You can always turn it on later, and you almost never need to.

- **Allow**: calls, messages from people you know, calendar reminders, banking alerts.
- **Check on your schedule**: email, Slack, social media, news.
- **Disable entirely**: promotional apps, games, most social platforms.

<!-- source: 2026 batch (8126bde), restored -->
Email and Slack can wait for a check you schedule. The apps on the disable list exist to pull you back in, so they lose nothing by going quiet.

Do Not Disturb on a schedule (say 10 PM to 8 AM) removes the temptation to check late at night. Both iPhone and Android let you set exceptions for specific contacts, so real emergencies still get through.

---

## Browser

### Profiles for Work and Personal

<!-- source: 2026 batch (8126bde), restored -->
Browser profiles are the most underused organization tool for anyone who mixes work and personal browsing on the same machine.

A profile is a separate browser instance with its own bookmarks, extensions, accounts and history. Make one for work and one for personal. Closing the work profile at the end of the day draws a clean line that a pile of tabs doesn't.

<!-- source: 2026 batch (8126bde), restored -->
The work profile gets your work Google account, work tools and work extensions. The personal one gets everything else.

No more posting from the wrong account, and your VPN or internal-tool extensions stay out of your personal browsing.

<!-- source: 2026 batch (8126bde), restored -->
Your work and personal search history stop mixing too. In Chrome, Edge and Firefox, click your profile icon at the top right to create one.

### Tab Management

40 open tabs is a lot of decisions you've put off.

- Reading it later? Move it to a read-later app (Readwise Reader, or whatever you already use) and close it. It won't get read as a tab either.
- Keeping it as a reference? Bookmark it in a named folder or put it in your notes, then close it.

Closing tabs at the end of the day takes less than five minutes, and the next morning is a lot less overwhelming.

### Useful Extensions

- **uBlock Origin**: blocks ads and trackers. Pages load faster and a lot of cross-site tracking stops. Install this first.
- **Bitwarden**: or your password manager of choice, so filling passwords is one less excuse to reuse them.

More than two or three extensions slows the browser down. Keep it minimal.

---

## Files and Storage

### File Naming

The habit that pays off most over time: prefix every file with the date in `YYYY-MM-DD` format.

```
2025-02-21 contract draft.pdf
2025-01-15 architecture review notes.md
2024-12-03 tax return.pdf
```

They sort chronologically in every file system, and you stop opening five files named `Contract FINAL (2).pdf`.

### Folder Structure

Three top-level folders cover most cases:

- **Projects**: active work you're on right now.
- **Reference**: things you consult but don't produce (documentation, templates, guides).
- **Archive**: finished projects and old versions you might need someday.

If you haven't opened a folder in three months and it isn't Reference, it goes to Archive.

### Backups

Keep your files in at least two places, one of them offsite. For most people that's your machine synced to the cloud (Google Drive, iCloud, Dropbox), plus an occasional copy to an external drive for anything irreplaceable. The cloud covers hardware failure, the drive covers a locked cloud account.

Photos deserve a mention: a phone full of photos with no backup is one dropped phone away from losing years. Pick iCloud Photos, Google Photos or a manual export, and make it automatic.

---

## Calendar

If your calendar only shows meetings, your real work has nowhere to go.

- **Block time for real work**: if a task needs focus, put it on the calendar or it'll get scheduled over. Treat them like any external meeting: rescheduling your own blocks is fine, letting them get overwritten silently isn't.
- **Color coding**: one color for meetings, one for focus blocks, one for personal. Three is usually enough.
- **Buffer**: back-to-back meetings look efficient on paper. They aren't. Those 15 minutes are when you write the follow-up and switch context.
- **Weekly review**: 15 minutes on Friday to check next week is realistic and the focus blocks are still there.

<!-- source: 2026 batch (8126bde), restored -->
Label the block for what it's for ("architecture doc", "sprint planning prep") so it holds up against invites. That work needs concentration and never comes with one.

<!-- source: 2026 batch (8126bde), restored -->
A color split also shows you a meeting-heavy week before it happens.

<!-- source: 2026 batch (8126bde), restored -->
Those 15 minutes between meetings are also when you process what was just decided, and without them actions fall through. If your calendar fills with consecutive meetings all the time, ask which of them needed to be a meeting.

<!-- source: 2026 batch (8126bde), restored -->
On the weekly review, move anything that shifted, focus blocks first.

---

## Social Presence

<!-- source: 2026 batch (8126bde), restored -->
What shows up when someone searches your name isn't entirely in your control, but it's worth being deliberate about what you put there.

### Usernames

Consistent usernames across platforms make you easier to find and help your personal brand. Use variations for accounts you want to keep apart from your professional identity. Consistent means searchable, which is great professionally and less so for anything you'd rather keep quiet.

### LinkedIn

Treat it as a living record of your work, not something you update only when job hunting. Then you're not writing your history from memory under pressure.

<!-- source: 2026 batch (8126bde), restored -->
Keep three things current: your role with a short description of what you actually do (not just the title), recent projects or outcomes if you can talk about them publicly, and skills that point at what you want to do next, not only what you've done.

### GitHub

More people read your GitHub profile than you'd expect. Pin repositories you'd actually show someone, and add a profile README (a repository named like your username). A few sentences beat the empty default.

<!-- source: 2026 batch (8126bde), restored -->
It adds context about what you work on and what you're interested in, and it takes almost no effort.

### Linktree and Carrd.co

<!-- source: 2026 batch (8126bde), restored -->
One URL that points to everything: Linktree, Carrd.co if you want something more customizable, or just a GitHub README. Put links in order of your current goal (job seeking, networking) and update them now and then so they stay relevant. Keep the look consistent with your personal brand. On Carrd.co you can also use a custom domain and add a clear call to action for whatever you're after now.

<!-- source: 2026 batch (8126bde), restored -->
A job seeker and someone promoting a side project should have different things at the top of the list.
