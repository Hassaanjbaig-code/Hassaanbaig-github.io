const error = document.querySelector('.error');

function validation() {
  const email = document.getElementById('email');
  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Email should be in lower case';
    return false;
  }
  error.textContent = '';
  return true;
}