
# Troubleshooting Guide
I've acquired some of these techniques through experience and by channeling my anxiety into productive approaches. And if for some reason my memory gets wiped out, it should take me only a few months to get back to a decent level.

---

⚠️ **I do hope I have enough time and patience to keep up with this effort, as it will definitely save me a lot of time in the long run by avoiding the need to teach these concepts repeatedly.** ⚠️

---

* https://lucianoadonis.github.io/ts/ 
{:toc}

### Reacting to a Problem

>“We cannot choose our external circumstances, but we can always choose how we respond to them”
― Epictetus

Before starting to touch everywhere, you need to diagnose the general case. So it would be best if you asked yourself questions like:

- How bad is it?
  - What is the affected Environment?
  - Does this impact the team delivery?
  - Can we live with the issue?
- What could be a possible cause?
  - Naming: unless you are prepared for the unexpected and have ways to avoid depending on the name of resources, some changes may cause disruption as those could prevent you from accessing the right resource or prevent you from reaching the resource.
  - Paths
  - Versions: a [minor](https://docs.npmjs.com/about-semantic-versioning#:~:text=Backward%20compatible%20new%20features) update may not cause some issues but you never know! Best to be sure.
  - Policies
  - Rules
  - You made plans or had the horrible idea of wanting a relaxed Friday.

Reasoning the scope and range of the issue will reduce the stress caused by the abrupt interruption of your daily activities. And by knowing what it is, you can at least prepare some excuses for the upper management while you figure stuff.

### Negative Thinking

>'Expect the best, prepare for the worst.' — Muhammad Ali Jinnah

Considering the worst-case scenario, such as the risk of exacerbating the issue or even losing your job, can be a powerful motivator to set boundaries when troubleshooting. If you find yourself making things worse, it's a clear sign that these boundaries could have prevented such a situation. Remember, the consequences of not setting these boundaries can be severe.

Like
- Stopping troubleshooting after 11 PM.
- Only restart things if you are sure that those can come back.
- Do not remove things you are unsure the IaC can reconstruct it.


Some may seem counterintuitive, but tech debt makes our work more exciting and, above all, problematic. Finding those flaws in a critical moment won't make your life easier.

Even if we have that in mind you mess up, that's an exciting story for a barbeque or to tell your dates.

### Responsabilities

This may not apply to all companies but it shares some common patterns when working with big teams. I will follow this pattern:
```bash
Infrastructure > Development > Additional Teams > Dependencies > Blame the Cloud Provider
```
But before jumping on each type, let's go in a different direction, our techniques.

### Techniques

>Where should I start? What can I check? Why me? Why on a Friday? - Engineer

It's normal to question where to begin, but without a structured approach, you may find yourself wandering aimlessly, which can lead to a lot of wasted time. As you progress in your career, having a clear direction and a plan for tackling issues is crucial. This will provide you with guidance and support, helping you step up your game.

I will eventually go deep into each one, but consider the following titles as the suggested approach:

#### Quick Methods

If everything has been quiet without any changes I would suggest this:

- **Comparison**: Against another environment that is working, you can draw some conclusions.
- **Contrast**: If you don't have a system that is working, you can refer to another App that has similar conditions, like another region or something.
- **Reading Logs**: I know, this is a last resort, but everything has logs, but they are not always verbose, so you may need to apply additional configuration to have more information.

If you are during implementation or testing use the classic approach:

- **Read the Error**:
- **Google the Error**:
- **Accept the Error**:
- **Live with the Error**:

#### Long Methods

If your problem doesn't appear to go anywhere any time soon, then you will definetely will need to try any or all of the following:

- **Mock**: Sometimes, being right is not enough. You should have a way to demonstrate that the system is working correctly by mimicking part of the setup. For example, you could have a container that loads and shows the variables to prove that things are getting loaded correctly.
- **Rule Out**: Start by examining what is working and limiting the range of causes, services, or dependencies that could be the reason.
- **The scientific Method**: This is a reliable approach for tackling issues that persist beyond 2 hours. Formulate a hypothesis, test it, and evaluate the results. This method instills confidence and ensures a systematic approach to problem-solving.
  - This will take time, but it will allow you to observe and compare various cases.
  - Always remember to take notes. Certain behaviors may only manifest under specific conditions, and in the heat of troubleshooting, it's easy to overlook or repeat steps. Keeping detailed notes helps you stay organized and in control of the situation. 

#### Understanding is Half of the Battle
- **Taking notes**:
- **Making Diagrams**:

Making the process easy to understand will definitely help if new team members have to join the troubleshooting. It's considerate and inclusive to ensure the process is straightforward and accessible to everyone.
There is nothing worse than feeling like you have to start completely from scratch in a troubleshooting process. A new pair of eyes is always welcome, but if things seem to be at a dead end, it is better to concentrate efforts on exploring new avenues to progress. This can save time and effort in the troubleshooting process.


### Proper Escalation



#### Infrastructure
#### Development
#### Dependencies
#### Other Stuff

### Git Gud
>"I've wrestled with alligators, I've tussled with a whale. I done handcuffed lightning And throw thunder in jail (...)" — Muhammad Ali Jinnah

Experience is what will make you proud of yourself. There isn’t a magic trick that will solve all problems; instead, there are tools and techniques that can help facilitate your reaction to things and act accordingly.