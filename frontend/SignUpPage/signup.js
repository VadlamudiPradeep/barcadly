document.addEventListener('DOMContentLoaded', () => {
document.getElementById('signup-form').addEventListener('submit', handleSignUp);
});

function handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        name,
        email,
        password
    };
 

    axios.post('http://localhost:3000/SignUp/signup', userData)
        .then(response => {
            alert('Sign up successful! Please sign in.');

            window.location.href = '../SignInPage/signin.html';
        })
        .catch(error => {
            console.error('Error signing up:', error);
        });
}