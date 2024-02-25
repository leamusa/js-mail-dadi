// Function to start the game
function startGame() {
  // Get the dice element
  var diceElement = document.getElementById("rolling-dice");

  // Get the user's name from the input field
  var name = document.getElementById("name").value;

  // Display the name in the welcome message with the userClass
  var userSpan = document.getElementById("user");

  if (userSpan) {
    userSpan.innerHTML = name;
    userSpan.classList.add("userClass");
  } else {
    console.error("Element with id 'user' not found.");
    return; // Exit the function if the element is not found
  }

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

  // Add the roll-animate class to actove the dice rotation
  diceElement.classList.add("roll-animate");

  // Remove the roll-animate class after the animation ends
  setTimeout(() => {
    diceElement.classList.remove("roll-animate");
  }, 1000); // Tempo della transizione
}
