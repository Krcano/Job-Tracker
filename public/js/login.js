// Used template from Week 14 Assignments
//const { query } = require("express");
//const { Json } = require("sequelize/types/lib/utils");

//login function
const loginFormHandler = async (event) => {
    console.log("Onload");
    event.preventDefault();

    //Collects values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
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
    .querySelector('#login-btn')
    .addEventListener('click', loginFormHandler);

// Listens to the sign-up button on the signup form section and runs the signup form function
document
    .querySelector('#signup-btn')
    .addEventListener('click', signupFormHandler);