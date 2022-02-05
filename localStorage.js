function saveInput(){
let name, email , message;
name = document.getElementById('name').value
email = document.getElementById('email').value
message = document.getElementById('message').value

localStorage.setItem('name',name);
localStorage.setItem('email',email);
localStorage.setItem('message',message);
}