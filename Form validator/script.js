const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {

  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small  = formControl.querySelector('small');
  small.innerText = message;
}

funtion showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'forn-control success';
}



form.addEventListener('submit', function(e) {
  e.preventDefault();

  const userInput = username.value;

  if(userInput === '') {
    showError(username, 'Username is required'); }
    else {
      hideError();
    }
});



