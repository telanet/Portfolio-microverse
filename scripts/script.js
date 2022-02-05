const body = document.querySelector('body');
const navBar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.onclick = function () {
  navBar.classList.add('active');
  menuBtn.style.opacity = '0';
  menuBtn.style.pointerEvents = 'none';
  body.style.overflow = 'hidden';
};
cancelBtn.onclick = function () {
  navBar.classList.remove('active');
  menuBtn.style.opacity = '1';
  menuBtn.style.pointerEvents = 'auto';
  body.style.overflow = 'auto';
};

const navLinks = document.querySelectorAll('.menu li a');
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    navBar.classList.remove('active');
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
  });
}