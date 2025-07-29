// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('header nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Placeholder script for future functionality
console.log('Script loaded');
