const error = document.querySelector('.error');
const fname = document.getElementById('name');
const text = document.getElementById('Complaint');

function store(n, e, t) {
  const stored = { name: n, email: e, comment: t };
  const convert = JSON.stringify(stored);
  localStorage.setItem('data', convert);
}

// function validation() {
//   const email = document.getElementById('email');
//   if (email.value !== email.value.toLowerCase()) {
//     error.textContent = 'Email should be in lower case';
//     return false;
//   }
//   error.textContent = '';
//   return store(fname.value, email.value, text.value);
// }

// const submitButton = document.getElementById('Submit');
// submitButton.addEventListener('click', validation);
