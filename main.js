// Toggle menu
const menuToggle = document.querySelector('.header__toggle');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');

menuToggle.addEventListener('click', () => {
  header.classList.toggle('active');
});

headerOverlay.addEventListener('click', () => {
  header.classList.remove('active');
});
