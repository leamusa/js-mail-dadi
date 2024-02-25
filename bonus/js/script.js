// Function to start the game
function startGame() {
  // Get the dice element
  var diceElement = document.getElementById("rolling-dice");

  // Display the name in the welcome message with the userClass
  var userSpan = document.getElementById("user");
  userSpan.innerHTML = name;
  userSpan.classList.add("userClass");

  // Generate a random number for the player
  var numRandomUser = Math.floor(Math.random() * 6) + 1;
  console.log(numRandomUser);
  document.getElementById("rolling-user").innerHTML = numRandomUser;

  // Generate a random number for the computer
  var numRandomPc = Math.floor(Math.random() * 6) + 1;
  console.log(numRandomPc);
  document.getElementById("rolling-pc").innerHTML = numRandomPc;

  // Determine the winner based on the higher score
  var gameResult = "Congratulations... You won!";

  if (numRandomUser < numRandomPc) {
    gameResult = "Sorry... You lost!";
  } else if (numRandomUser === numRandomPc) {
    gameResult = "It's a draw";
  }

  // Display the game result
  document.getElementById("result").innerHTML = gameResult;

  // Add the roll class to trigger the dice animation
  diceElement.classList.add("roll");

  // Remove the roll class after the animation ends
  diceElement.addEventListener("animationend", function () {
    diceElement.classList.remove("roll");
  });
}
