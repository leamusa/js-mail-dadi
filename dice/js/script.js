// 1 - asking the player to put their name
var nome = prompt("Put here your name");
console.log(nome);

document.getElementById("user").innerHTML = nome;

// 2 - generate a random number for the player
var numRandomUser = Math.floor(Math.random() * 6) + 1;
console.log(numRandomUser);

document.getElementById("rolling-user").innerHTML = numRandomUser;

// 3 - generate a random number for the computer using a loop
for (var i = 0; i < 1; i++) {
  var numRandomPc = Math.floor(Math.random() * 6) + 1;
  console.log(numRandomPc);

  document.getElementById("rolling-pc").innerHTML = numRandomPc;
}

// 4 - declare who is the winner based on the higher point
var result = "Congratulations... You won!!!!";

if (numRandomUser < numRandomPc) {
  result = "Sorry... You lost!";
} else if (numRandomUser === numRandomPc) {
  result = "It's a draw!";
}

console.log(result);
