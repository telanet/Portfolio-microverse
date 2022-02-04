/* eslint-disable func-names */
/* eslint-disable linebreak-style */
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

// const error = document.getElementById('error');

// // email validation
// const email = document.getElementById('email');
// const form = document.getElementById('form');
// const errorMessage = document.getElementById('error');
// form.addEventListener(submit, (e)=> {
//   const emailRegex =
//     // eslint-disable-next-line no-useless-escape
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const numRegex = /['1''2''0''3''4''5''6''7''8''9'\W]+/;

//   if (!emailRegex.test(email.value)) {
//     emailError.textContent = 'Invalid Email address format ';
//   } else if (email.value !== email.value.toLowerCase()) {
//     emailError.textContent = 'Email address should be in lowercase';
//     email.className = 'invalid';
//   } else {
//     emailError.textContent = '';
//     email.className = 'valid';
//   }
  

// })


