document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('img01');
  const closeBtn = document.querySelector('.close');

  if (!modal || !modalImg || !closeBtn) {
    console.error('Modal elements not found. Ensure modal HTML is correct.');
    return;
  }

  // Event delegation for clickable images
  document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('myImg')) {
      const imgSrc = event.target.getAttribute('src');
      if (imgSrc) {
        modal.style.display = 'block';
        modalImg.src = imgSrc;
      } else {
        console.error('Image source not found');
      }
    }
  });

  // Close modal when 'X' is clicked
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal when pressing the 'Escape' key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });

  // Add hover effect for image triggers
  const triggers = document.querySelectorAll('.hover-image-trigger');
  
  triggers.forEach(trigger => {
    const img = new Image();
    img.src = trigger.dataset.image;
    img.className = 'hover-image';
    img.style.maxWidth = '120px';
    img.style.maxHeight = '120px';
    
    trigger.appendChild(img);

    trigger.addEventListener('mouseenter', function() {
      img.style.display = 'block';
    });

    trigger.addEventListener('mouseleave', function() {
      img.style.display = 'none';
    });
  });
});
