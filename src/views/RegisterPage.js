// script.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Process form (e.g., send data to server)
    console.log('Form submitted:', { email, password });
    
    // Reset form
    form.reset();
  });
});
