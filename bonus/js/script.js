// Function to start the game
function startGame() {
  // Get the name input value
  var name = document.getElementById("name").value;

  // Display the name in the welcome message
  document.getElementById("user").innerHTML = name;

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
}
