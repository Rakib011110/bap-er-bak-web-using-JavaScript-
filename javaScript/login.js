// step 1
document.getElementById("btn-submit").addEventListener("click", function () {
  // step two get the email
  const emailField = document.getElementById("userEmail");
  email = emailField.value;

  //    step three to get password
  const passwordField = document.getElementById("user-pass");

  password = passwordField.value;

  //    step four varify and password
  //    Do not verify email password on the client side
  if (email === "rakib@gmail.com" && password === "123") {
    window.location.href = "bank.html"

  } else {
    alert(" invalide user");
  }
});
