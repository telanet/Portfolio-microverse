const form = document.getElementById('form');
const name = document.getElementById('FullName');
const msg = document.getElementById('message');

function formValidate() {
  const error = document.getElementById('error');
  const email = document.getElementById('email');
  if (email.value.trim() === '') {
    error.innerHTML = 'This field cannot be empty';
    return false;
  }
  if (email.value !== email.value.toLowerCase()) {
    error.innerHTML = `Your email is not in lowercase. use ${email.value.toLowerCase()} instead`;
    return false;
  }
  return true;
}

form.addEventListener('submit', (submitForm) => {
  if (!formValidate()) {
    submitForm.preventDefault();
  }
});


const contactForm = document.querySelector('form');

let localSt = {
  FullName: '',
  email: '',
  message: '',
};

if (localStorage.getItem('localSt') != null) {
  localSt = JSON.parse(localStorage.getItem('localSt'));
  contactForm.FullName.value = localSt.FullName;
  contactForm.email.value = localSt.email;
  contactForm.message.value = localSt.message;
}
contactForm.addEventListener('change', () => {
  localSt.FullName = contactForm.FullName.value;
  localSt.email = contactForm.email.value;
  localSt.message = contactForm.message.value;
  localStorage.setItem('localSt', JSON.stringify(localSt));
});