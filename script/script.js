// Enable Bootstrap form validation styles on submit
(function () {
  'use strict';
  const forms = document.querySelectorAll('form');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Example: Optional toggle for any custom menu or content
const toggleButtons = document.querySelectorAll('[data-toggle-target]');
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSelector = button.getAttribute('data-toggle-target');
    const target = document.querySelector(targetSelector);
    if (target) {
      target.classList.toggle('show');
    }
  });
});

// Example: Dynamic content on page load (can be customized)
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded - custom script running');
  // Add any dynamic content loading code here...
});
