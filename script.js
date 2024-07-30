const inputFirstName = document.getElementById("first_name");
const inputLastName = document.getElementById("last_name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const inputPhoneNumber = document.getElementById("phone_number");
const submitBtn = document.getElementById("submit-btn");

const inputs = [
    inputFirstName,
    inputLastName,
    inputEmail,
    inputPassword,
    confirmPassword,
    inputPhoneNumber,
];

submitBtn.addEventListener("click", function () {
    if (!inputFirstName.value) {
        console.log("First name cannot be empty");
    }

    if (!inputLastName.value) {
        console.log("Last name cannot be empty");
    }

    if (!inputEmail.value) {
        console.log("Email cannot be empty");
    }

    if (!inputPassword.value) {
        console.log("Password cannot be empty");
    }

    if (!inputPhoneNumber.value) {
        console.log("Phone Number cannot be empty");
    }
});
