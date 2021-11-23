// Used template from Week 14 Assignments
//const { query } = require("express");
//const { Json } = require("sequelize/types/lib/utils");

<<<<<<< HEAD
//login function
const loginFormHandler = async (event) => {
    console.log("Onload");
=======
const loginFormHandler = async (event) => {
>>>>>>> 84528fa2e75f6cfe2cb0efd9e8187ebe3079701e
    event.preventDefault();

    //Collects values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
<<<<<<< HEAD
        console.log(email, password);
        //send a POST request to the API endpoint
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }

        });
        console.log(response);
        if (response.ok) {
            console.log("response ok");
            document.location.replace('/feed');
=======
        //send a POST request to the API endpoint
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, passowrd }),
            headers: { 'Content-Type': 'application/json' },

        });

        if (response.ok) {
            document.location.replace('/profile');
>>>>>>> 84528fa2e75f6cfe2cb0efd9e8187ebe3079701e
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    // COllects the values from the sign up form
    const firstName = document.querySelector('#first_name-signup').value.trim();
    const lastName = document.querySelector('#last-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (firstName && lastName && email && password) {
        //Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: { 'ContentType': 'application/json' }
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
<<<<<<< HEAD
    .querySelector('#login-btn')
    .addEventListener('click', loginFormHandler);

// Listens to the sign-up button on the signup form section and runs the signup form function
document
    .querySelector('#signup-btn')
    .addEventListener('click', signupFormHandler);
=======
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

// Listens to the sign-up button on the signup form section and runs the signup form function
document
    .querySelector('signup-form')
    .addEventListener('submit', signupFormHandler);
>>>>>>> 84528fa2e75f6cfe2cb0efd9e8187ebe3079701e
