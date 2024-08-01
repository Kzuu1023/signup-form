const inputFirstName = document.getElementById("first_name");
const inputLastName = document.getElementById("last_name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const inputPhoneNumber = document.getElementById("phone_number");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.querySelector(".error-msg");
const form = document.getElementById("form");
const inputs = [
    inputFirstName,
    inputLastName,
    inputEmail,
    inputPhoneNumber,
    inputPassword,
    confirmPassword,
];

let isValid = true;
submitBtn.addEventListener("click", function () {
    inputs.forEach((input) => {
        input.nextElementSibling.textContent = "";
        console.log(typeof input.checkValidity());
        if (input.checkValidity()) {
            input.parentElement.classList.add("valid");
            input.parentElement.classList.remove("invalid");
        } else {
            input.parentElement.classList.add("invalid");
            input.parentElement.classList.remove("valid");
            isValid = false;
        }
    });

    if (!inputFirstName.value) {
        isValid = false;

        inputFirstName.nextElementSibling.textContent =
            "First name cannot be empty";
        inputFirstName.style.borderColor = "var(--error)";
    } else {
        inputFirstName.style.borderColor = "var(--valid)";
    }

    if (!inputLastName.value) {
        isValid = false;
        inputLastName.nextElementSibling.textContent =
            "Last name cannot be empty";
        inputLastName.style.borderColor = "var(--error)";
    } else {
        inputLastName.style.borderColor = "var(--valid)";
    }

    if (!inputEmail.value) {
        inputEmail.nextElementSibling.textContent = "Email cannot be empty";
        inputEmail.style.borderColor = "var(--error)";
    } else {
        inputEmail.style.borderColor = "var(--valid)";
    }

    if (!inputPassword.value) {
        inputPassword.nextElementSibling.textContent =
            "Password cannot be empty";
        inputPassword.style.borderColor = "var(--error)";
    } else {
        inputPassword.style.borderColor = "var(--valid)";
    }

    if (!inputPhoneNumber.value) {
        inputPhoneNumber.nextElementSibling.textContent =
            "Phone Number cannot be empty";
        inputPhoneNumber.style.borderColor = "var(--error)";
    } else {
        inputPhoneNumber.style.borderColor = "var(--valid)";
    }

    if (
        confirmPassword.value !== inputPassword.value ||
        !confirmPassword.value
    ) {
        confirmPassword.nextElementSibling.textContent =
            "Confirm Password does not match";
        confirmPassword.style.borderColor = "var(--error)";
    } else {
        confirmPassword.style.borderColor = "var(--valid)";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
});
