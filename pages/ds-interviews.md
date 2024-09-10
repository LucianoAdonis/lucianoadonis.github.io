---
layout: custom
title: Advanced Interview Tactics
description: The Information That You Always Wanted!
---

This Mini Book is for DevOps and Cloud Engineers leveling up from Semi-Senior Advanced to Senior roles.

For those already there, it could be a fun way to refresh your knowledge of how job interviews work. Think of it as a guide to help you sharpen your skills before you face those interview bosses.

⚠️ Spoilers: Since I’m revealing a lot of techniques and secrets, I’ve decided to make it Dark Souls-themed. 

---

<img class="myImg" src="../images/interviews/main-menu.png" alt="main-menu" style="cursor: pointer;">

---

# Core Mechanics

Before jumping to the other sections, we will expend some time exploring the mechanics. I have seen many people who try to go to an interview without preparation, which is possible when you either are getting to a level below what you currently are or have enough mileage to know how things go down from past experience with similar games.

## Character Creation

Creating a character that aligns with your mindset is best. Speaking from experience, it might seem cool to imitate someone else’s build, but in the end, everything flows more naturally when you’re aligned with your strengths.

<br>

<img class="myImg" src="../images/interviews/interact-box-know-thyself.png" alt="interact-box-know-thyself" style="cursor: pointer;">

<br>

In at least ten minutes during the beginning or middle of an interview, you'll likely be asked to summarize what you've been doing over the past few years—your process, achievements, challenges, and how you've overcome them.

That's why it is important to know yourself just enough so you don't have to improvise and waste mental bandwidth trying to articulate inputs/words.

**Suggested Actions:**
  - **Prepare a Speech:** It might feel challenging initially, especially if you're new to interviews or unfamiliar with English. But you don't want to wing it. Until you're more comfortable discussing your experience, preparing a concise overview and adapting your story to match what they want to hear is best.
    - By "adapting" your story, I mean talking to them about what you know about what they are looking for. They are not going to be interested (at first) in learning about the random pet project that you picked but rather the skills that you have that they need to fill the position.
    - Pay attention to their reactions. You'll know when something piques their interest—it could be that they're looking for a different approach or a more refined structure with X technology. Highlighting these key points is crucial.
  - **Be Familiar with Your Tech Stack**: Do not let the interview be the moment you realize what you didn't understand about your last role.
    - Avoid the dreaded "gaps" in your knowledge, where your answer is, "Yeah, but another guy/team handled that." It's understandable, but at least for general knowledge, you should be well-versed in the tools and methodologies you've worked with—especially if they're on your resume.
  - **Prioritize Rest Over Cramming**: I live by this rule: "Studying isn't worth sacrificing sleep." I figured out back in high school that being rested gives you the edge. The same goes for an interview, you'll perform far better when you're sharp and well-rested.

And above all, style can make a real difference. Keep your equipment in shape and make sure everything is working smoothly. The last thing you want to say is that you had an issue like "ugh controller disconnected and that's why things didn't go well."

## Level Thresholds

How you play this game depends totally on you, but it has a difficulty system that, after you reach a level threshold, tends to match the pace, so it doesn't get too easy, and fewer people can progress further unless they handle the mechanics correctly.

**Semi Senior**:
- Certifications are valid as an extension of knowledge and proof that you care about learning more.
- This type of certification aims to check what you know more than what you have done.
- Having side projects can be helpful to expand your knowledge of what you can use because of the tech stack of your last/current company. It depends a lot on - the interviewer how much it is worth it, but it is preferable to have something to not to have it at all.
- The difficulty may vary on the company you are applying to, but it depends on their expectations and the job you will do.

**Senior**:
I’ll expand on this because it’s more fun, and it is what you need to start practicing to shorten knowledge gaps. I’ll divide this into the following categories:

- Things to know: what are we facing, and how should we do it.
- First phase: knowing each other it’s part of the battle.
- Second phase: what you say it’s what you will get.
- Bonus phase feeling: love at first sight or based on small gestures.
- End phase: congrats!

## Types of Builds

Oh this section is going to be fun, but I'm not writing it yet. I'll leave some pointers to get around it eventually.

The following only applies upon your third or fourth run after the Senior threshold:

- Faith Stack.
- Techmancer.
- SME Strenght.
- MLG Developer.

---

<br>

<img class="myImg" src="../images/interviews/interact-box-character-creation.png" alt="interact-box-character-creation" style="cursor: pointer;">

<br>

---

<a href="/pages/ds-interviews-chapter-1" class="button fork"><strong>Continue to Chapter 1</strong></a>

---

{% raw %}

<style>
  details summary {
    cursor: pointer;
    font-weight: bold;
  }
  details summary::before {
    content: '➕'; /* Plus sign to indicate expandability */
    margin-right: 10px;
  }
  details[open] summary::before {
    content: '➖'; /* Minus sign to indicate it's expanded */
  }
</style>

<!-- Single Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
</div>

<!-- JavaScript for Modal Functionality -->
<script>
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the modal image element
  var modalImg = document.getElementById("img01");

  // Ensure the modal is hidden on page load
  window.onload = function() {
    modal.style.display = "none";
  };

  // Get all images with class "myImg" and loop through them to add the click event
  var images = document.getElementsByClassName("myImg");
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
      modal.style.display = "flex"; // Ensure the modal is displayed using flexbox
      modalImg.src = this.src;
    }
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }

  // Close the modal when clicking outside of the image
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  // Close the modal when pressing the "Esc" key
  document.onkeydown = function(event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  }
</script>
{% endraw %}