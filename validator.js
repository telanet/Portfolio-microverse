const form = document.getElementById('form');

function formValidate() {
  const error = document.getElementById('error');
  const email = document.getElementById('email');

  if (email.value !== email.value.toLowerCase()) {
    error.innerHTML = `Your email is not in lowercase. Consider using ${email.value.toLowerCase()} instead`;
    return false;
  }
  return true;
}

form.addEventListener('submit', (submitForm) => {
  if (!formValidate()) {
    submitForm.preventDefault();
  }
});
