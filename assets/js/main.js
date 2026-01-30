/* Main JS for Improv Comedy Club */

document.addEventListener('DOMContentLoaded', function () {
  console.log('Improv Comedy Club - Ready to Laugh!');

  // Initialize Bootstrap Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  // Theme Toggle Logic
  const toggleBtns = document.querySelectorAll('.bi-moon-stars-fill').forEach(btn => {
    btn.parentElement.addEventListener('click', () => {
      // Simple visual toggle for demo purposes
      // In a real app, this would swap CSS variables or classes on the body
      alert("Theme toggle clicked! (Integration logic would go here to swap --tertiary and --secondary colors)");
    });
  });
});
