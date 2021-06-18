// Toggle menu
const menuToggle = document.querySelector('.header__toggle');
const header = document.querySelector('.header');
const headerOverlay = document.querySelector('.header__overlay');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
  header.classList.add('active');
  body.style.overflowY = 'hidden';
});

headerOverlay.addEventListener('click', () => {
  header.classList.remove('active');
  body.style.overflow = 'auto';
});
