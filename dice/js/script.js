// End of 1 ex
//Second ex: Dice Game
//  Generate a random number from 1 to 6, (both) for the player and for the computer.
// Determine the winner, based on who makes the highest score.

//  1- asking to the player to put the name

var nome = prompt("Put here your name");
console.log(nome);

document.getElementById("user").innerHTML = nome;
1;
// 2 - generare un numero random per il giocatore

var numRandomUser = Math.floor(Math.random() * 6) + 1;
console.log(numRandomUser);

document.getElementById("rolling-user").innerHTML = numRandomUser;
// 3 - generating a random number for pc

var numRandomPc = Math.floor(Math.random() * 6) + 1;
console.log(numRandomPc);

document.getElementById("rolling-pc").innerHTML = numRandomPc;
// 4 - declaring who is the winner based to the higher point

var result = "Congratulations... You won!!!!";

(" Congratulations... You won!!!!");

if (numRandomUser < numRandomPc) {
  result = "Sorry...You lost!";
} else if (numRandomUser == numRandomPc) {
  result = "draw";
}
