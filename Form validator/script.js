const username = document.getElementById('username');
const email = document.getElementById('email');


const userInput = username.value;

console.log(userInput);

username.addEventListener('onload', e => {

  e.preventDefault();
  userInput;
})