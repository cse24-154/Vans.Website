
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.querySelector('#name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        e.preventDefault();
      }
    });
  }
});
