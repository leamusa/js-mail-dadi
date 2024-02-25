// VARIABLE
var register = [
  "gio90@gmail.com",
  "stefy@gmail.com",
  "adriana@gmail.com",
  "bibi@gmail.com",
  "martina@gmail.com",
];
var authorized = false; // will change after with registered users*

// Asking email to user
var user_mail = prompt("Enter your email?");
// verify if the email is already registered
for (var i = 0; i < register.length; i++) {
  // starting the loop
  var registered = register[i]; // Array
  if (user_mail === registered) {
    // user's input
    authorized = true;
    break; // stopping the loop with true*
  }
}

// Display output based on authorization
if (authorized) {
  // If authorized, display a welcome message with the user's email
  document.getElementById("output").innerHTML = "Welcome " + user_mail + "!";
} else {
  // If not authorized, display a message indicating no access and a suggestion to register
  document.getElementById("output").innerHTML =
    "IMPOSSIBLE TO ACCESS IF NOT REGISTERED!" +
    "<br>Please register to access the contents of the page";
}
// End of 1 ex
//Second ex: Dice Game
