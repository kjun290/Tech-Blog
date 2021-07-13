const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#login-userName').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
