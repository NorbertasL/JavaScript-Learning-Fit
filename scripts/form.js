// Define constants for all of the elements we will be working with
const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#emailAddress');
const nameError = document.querySelector('#fullName + .field-error');
const emailError = document.querySelector('#emailAddress + .field-error');

function validateName() {
  // Code that will run whenever we want to validate the fullName field
}

function showNameError() {
    // Code to display an error message for the fullName field
}

function validateEmail() {
    // Code that will run whenever we want to validate the email field
}

function showEmailError() {
    // Code to display an error message for the email field
}

function validateForm(event) {
    // Code that we want to run to validate the entire form (both fields)
}

// Set up an event listener for each of the fields in the form
// The event we are listening for is "input" (occurs when user types or pastes text into a field)
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);

// Set up an event listener for the form
// The event we are listening for is "submit" (occurs when user trys to submit the form)
form.addEventListener('submit', validateForm);
