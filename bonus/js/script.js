// Function to get a random number for the given sides of the die
function getRandomNumber(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Number of sides on the die
var sides = 6;

// Generate random numbers for both player and computer
var numRandomUser, numRandomPc;

for (var i = 0; i < 2; i++) {
  // Generate a random number
  var randomNumber = getRandomNumber(sides);

  // Assign the generated number to the appropriate variable and update the HTML
  if (i === 0) {
    numRandomUser = randomNumber;
    console.log("Player's Random Number:", numRandomUser);
    document.getElementById("rolling-user").innerHTML = numRandomUser;
  } else {
    numRandomPc = randomNumber;
    console.log("Computer's Random Number:", numRandomPc);
    document.getElementById("rolling-pc").innerHTML = numRandomPc;
  }
}
