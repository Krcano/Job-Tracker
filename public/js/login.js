//login function
const loginFormHandler = async (event) => {
    event.preventDefault();

    //Collects values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        //send a POST request to the API endpoint
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }

        });
        console.log(response);

        if (response.ok) {
            console.log("REPLACING LOCATION !!!!!!!!!!!")
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    // COllects the values from the sign up form
    const first_name = document.querySelector('#first_name-signup').value.trim();
    const last_name = document.querySelector('#last_name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (first_name && last_name && email && password) {
        //Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

//Listens to submit button on the login-form section and runs the login form function
document
    .querySelector('#login-button')
    .addEventListener('click', loginFormHandler);

// Listens to the sign-up button on the signup form section and runs the signup form function
document
    .querySelector('#signup-button')
    .addEventListener('click', signupFormHandler);
