const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#signup-pw').value.trim();

    if (username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Unable to sign up.')
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);