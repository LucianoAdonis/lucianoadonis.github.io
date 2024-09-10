---
layout: custom
title: Interviews - Chapter 1
description: It's not you, it's me, Mario
---

<div class="nav-buttons">
  <a href="/pages/ds-interviews" class="ds-button left-button"><strong>Go to Chapter 1</strong></a>
  <a href="/pages/ds-interviews-chapter-3" class="ds-button right-button"><strong>Go to Chapter 3</strong></a>
</div>

---

<img class="myImg" src="../images/interviews/location-interview-asylum.png" alt="location-interview-asylum" style="cursor: pointer;">

---

# Preparation Bonfire

Yup, not so fast to the boss fight. We need to gather a few essential items before pushing forward. The good news? These items improve with time, but you’ll need them in your inventory to stand a chance.

You might be one of the hardcore ones, breezing through everything with 0% damage. But for the rest of us mere mortals, proper preparations are essential.

<br>

## Work Experience Over General Knowledge

Hands-on experience with tools is more valuable than theoretical knowledge. By the time you reach the mid-level (Ssr), you’re expected to know the essentials—this is the baseline.

Do we have here some General knowledge questions? Those are a separate challenge. But don’t worry. We’ve covered you with the [Interview Preparation](#interview-preparation) section to give you a glimpse of the critical topics.

<img class="myImg" src="../images/interviews/object-estus-flask.png" alt="object-estus-flask" style="cursor: pointer;">
<br>

## Certifications are Good, But...

They’re mostly just a way to skip the easy questions in interviews, but if you play your cards right, they can serve as leverage to claim even greater rewards.

- It’s tough for those who’ve put in a serious effort to get certified. Still, all a certification tells me is that you have time to study, a good memory, and probably a Cloud Guru subscription or whatever young ones use these days.
- Certifications can even backfire. That’s why I only certify in technologies I’m actively working with and have enough hands-on experience to support. Otherwise, it’s just cramming knowledge.
- If your approach is, “I want to dive deeper into X technology, and I’m using this certification as a challenge to find a related job,” that’s valid, too.

In short, if the certification supports your build, great! Otherwise, it’s like being a Strength build and wasting early points on learning a spell you can barely cast, leaving you open to attacks instead of focusing on fortifying your core skills.

<img class="myImg" src="../images/interviews/object-certification-spear.png" alt="object-certification-spear" style="cursor: pointer;">
<br>

## Accents

Since you're reading this, I assume you're comfortable with written and spoken English, which is safe. However, many underestimate the challenge of understanding everyday speech, especially from people who aren't native speakers.

A few takeaways:

- In tutorial videos, people often speak at a perfect pace and enunciate clearly. But in real life, it's common to encounter native speakers who mumble, rush through sentences, or use slang.
- You'll work with people worldwide, and only some people care about flawless grammar or polished speech as long as they can convey their message.
- Clients from other countries are patient and understanding with non-native speakers. So don't stress over it, you will **git gud**.
  - If you find some weird case... well It will make you stronger.

<img class="myImg" src="../images/interviews/object-sun-speech.png" alt="object-sun-speech" style="cursor: pointer;">
<br>

## Communication

Clear Communication is Crucial whether in interviews or building relationships with clients, the ability to explain your ideas is not just a must but a significant factor in your professional success. Preparation is your Estus Flask—it will keep you going. While there will come a time when you'll breeze through interviews, preparation is key until then.

With this in mind, at least you won’t stumble right out of the fog gate, giving off the wrong impression.

<img class="myImg" src="../images/interviews/object-charisma.png" alt="object-charisma" style="cursor: pointer;">

<br>
---

<img class="myImg" src="../images/interviews/location-interview-asylum-exit.png" alt="location-interview-asylum-exit" style="cursor: pointer;">

---
<br>

---

<a href="/pages/ds-interviews-chapter-1.5" class="button fork"><strong>Chapter 1.5</strong></a>
<a href="/pages/ds-interviews-chapter-2" class="button fork"><strong>Chapter 2</strong></a>

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
