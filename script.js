// Example of a JavaScript improvement for toggling a modal or overlay
document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggle-overlay');
  var overlay = document.getElementById('overlay');

  toggleButton.addEventListener('click', function() {
    var isHidden = overlay.style.display === 'none';
    overlay.style.display = isHidden ? 'block' : 'none';
  });
});
