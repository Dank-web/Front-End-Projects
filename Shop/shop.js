
AOS.init({ duration: 1000, once: true });

// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') body.classList.add('dark-mode');
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Basic Cart Notification
const buttons = document.querySelectorAll('.product-card .btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Item added to cart 🛒');
  });
});