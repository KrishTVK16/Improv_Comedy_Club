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

    btn.parentElement.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('dark-mode');

      // Update icon (optional visual feedback)
      const icon = btn;
      if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-sun-fill');
      } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-stars-fill');
      }
    });
  });

  // Sticky Navbar Logic
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  btn.parentElement.addEventListener('click', () => {
    // Simple visual toggle for demo purposes
    // In a real app, this would swap CSS variables or classes on the body
    alert("Theme toggle clicked! (Integration logic would go here to swap --tertiary and --secondary colors)");
  });
});

// Scroll to Top Button Logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

