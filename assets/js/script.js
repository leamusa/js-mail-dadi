// VARIABle
var register = [
  "gio90@gmail.com",
  "stefy@gmail.com",
  "adriana@gmail.com",
  "bibi@gmail.com",
  "martina@gmail.com",
];
var autorized = false; //will change after

// Asking email to user
var user_mail = prompt("Enter your email?");
// verify if th email is already registered
for (var i = 0; i < registerd.length; i++) {
  //loop
  var registered = registered[i]; //Array
  if (user_mail === registered) {
    // user's input
    authorized = true;
    break; //stopping the loop with true
  }
}
