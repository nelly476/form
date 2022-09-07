const password = document.getElementById("psw");
const passwordConfirm = document.getElementById("pswConfirm");

function validatePassword() {
  if (password.value !== passwordConfirm.value) {
    passwordConfirm.setCustomValidity("Passwords don't match");
  } else {
    passwordConfirm.setCustomValidity("");
  }
}

password.onchange = validatePassword;
passwordConfirm.onkeyup = validatePassword;
