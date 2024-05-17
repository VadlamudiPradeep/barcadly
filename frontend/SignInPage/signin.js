document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signin-form').addEventListener('submit', handleSignIn);
});

function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        email,
        password
    };

    axios.post('http://localhost:3000/SignIn/s', userData)
        .then(response => {
            alert('Sign in successful!');
            // Redirect to home page or user profile page after successful sign-in
            window.location.href = '../HomePage/index.html';
        })
        .catch(error => {
            console.error('Error signing in:', error);
        });
}
