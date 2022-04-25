const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using contraint API
  isValid = form.checkValidity();
  // style error msg
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "blue";
    password2El.style.borderColor = "blue";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // if form is valid and passwords passwordsMatch
  if (isValid && passwordsMatch) {
    message.textContent = "Registration was successful!";
    message.style.color = "blue";
    messageContainer.style.borderColor = "blue";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  };
  // do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // validate Form
  validateForm();
  // submit data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
// event listeners
form.addEventListener("submit", processFormData);
