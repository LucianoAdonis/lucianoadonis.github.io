document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.hover-preview');
  const previewBox = document.createElement('div');
  previewBox.className = 'preview-box';
  document.body.appendChild(previewBox);

  links.forEach(link => {
    link.addEventListener('mouseover', function (e) {
      const previewUrl = link.getAttribute('data-preview');
      previewBox.innerHTML = `<img src="${previewUrl}" alt="Preview Image">`;
      previewBox.style.display = 'block';
      previewBox.style.left = e.pageX + 'px';
      previewBox.style.top = e.pageY + 'px';
    });

    link.addEventListener('mousemove', function (e) {
      previewBox.style.left = e.pageX + 'px';
      previewBox.style.top = e.pageY + 'px';
    });

    link.addEventListener('mouseout', function () {
      previewBox.style.display = 'none';
      previewBox.innerHTML = '';  // Clear the image when not hovering
    });
  });
});
