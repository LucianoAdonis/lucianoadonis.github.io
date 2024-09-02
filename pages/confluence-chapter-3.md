---
layout: custom
title: Confluence - Chapter 3
description: Structure Above Else
---

---

<a href="/confluence-chapter-2" class="button fork"><strong>Chapter 2</strong></a>

---

# Datasource Pages

Just like it sounds, a Datasource Page is where you consolidate information. With Macros like [Multiexcerpt](https://confluence.atlassian.com/conf719/excerpt-macro-1157466743.html) and [Table Include](https://docs.stiltsoft.com/tfac/dc-server/how-to-use-table-excerpt-and-table-excerpt-include-macros-42241623.html), you can save yourself a ton of headaches by keeping your source of truth and attached pages in sync.

If you ever change the name or something on the datasource page, it won’t break the pages that depend on it—it updates automatically. So go ahead, get creative!

## Structure

## Example
The reusable content can be anything that you can place in that box, so be either text or image it can be there. Of course, with the exception of tables which have their own macro to do that.

<img class="myImg" src="../images/confluence/multiexcerpt-example.png" alt="multiexcerpt-example" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

To include something you have to use the multiexcerpt include macro which will display you the available options in the page and a small preview of the content retrieved:

<img class="myImg" src="../images/confluence/multiexcerpt-include-macro-menu.png" alt="multiexcerpt-include-macro-menu" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

From the edition menu will look like this:

<img class="myImg" src="../images/confluence/multiexcerpt-include-macro-example.png" alt="multiexcerpt-include-macro-example" style="border: 2px solid #000; border-radius: 4px; padding: 5px; cursor: pointer;">

# Tagging

[Live Search](https://confluence.atlassian.com/conf719/livesearch-macro-1157466803.html) gets even better when you’re using proper tagging, so take the time to tag your content wisely.

[Go to Types of Pages](#types-of-pages) for more inspiration.

# Security & Limitations

Not much to say, just to complain.  

- There are not granular controls over the documentation by default. Basically an exclusive list or allow all. There is a solution sold by Confluence to have more visibility over everything for each type of implementation:
  - [Crowd (On-Prem)](https://www.atlassian.com/software/crowd).
  - [Guard (Cloud)](https://www.atlassian.com/software/access/capabilities).
- Someone could dump everything.
- Page Ownership is only available in Cloud Version.

# References

There isn't much from Confluence but there are a few sources that are worth looking:

- That YouTube Channel.
- Stuff.


{% raw %}
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
