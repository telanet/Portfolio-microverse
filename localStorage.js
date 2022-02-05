function saveInput() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);
}
saveInput();
