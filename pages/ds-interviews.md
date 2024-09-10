---
layout: custom
title: Advanced Interview Tactics
description: The Information That You Always Wanted!
---

~~This Mini Book is for DevOps and Cloud Engineers leveling up from Semi-Senior Advanced to Senior roles.~~

I originally started writing this to help Cloud/DevOps/SRE Semi-Seniors to advance to Senior roles. I found myself repeatedly sharing the same practical advice, so summarizing everything made sense.

As a fun touch, I styled this like a Dark Souls playthrough guide. Of course, that led to me diverting my attention and delving into multiple topics beyond just interviews.

The references might be confusing for some, and for others, they may be helpful as an analogy. In any case, I understand that this may be a bit overwhelming, but I hope this helps you in some way!

---

<img class="myImg" src="../images/interviews/main-menu.png" alt="main-menu" style="cursor: pointer;">

---

# Menu


- [Chapter 0: Game Modes](/pages/ds-interviews-chapter-0): optional content, to talk a little bit about ~~companies~~ covenants.
- [Chapter 1: Setting Your Character](/pages/ds-interviews-chapter-1): customization and types of builds.
- [Chapter 1.5: Grand Archives](/pages/ds-interviews-chapter-1.5): optional content to get more experience and preparation. 
- [Chapter 2: Preparation Bonfire](/pages/ds-interviews-chapter-2):
- [Chapter 3: Boss Fight](/pages/ds-interviews-chapter-3):


---

<a href="/pages/ds-interviews-chapter-0" class="button fork"><strong>Continue to Optional Chapter 0</strong></a>

<a href="/pages/ds-interviews-chapter-1" class="button fork"><strong>Continue to Chapter 1</strong></a>


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
