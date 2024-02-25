# js-mail-dadi

# Description

# Mail:

1.  Ask to the user the e-mail adress,
2.  check if the user is inside of a list of whome can acced,(already registered)
3.  Print an appropriate msg on the exit of the controle.

# Dice Game:

1. Generate a random number from 1 to 6, (both) for the player and for the computer.
2. Determine the winner, based on who makes the highest score.

# Advise:

1. First, write comments.(to understand what you want to do)
2. You need to tell what to do to javascrip otherwise nothing will happen.
3. Try to imagine the operation you want the program will make instead of you, (to perform as we would "by hand").

# Bonus

1. Use an input and a button to insert the email and then we show the results in page

# Tools

1. Verify if the email is present inside of exisent **list** (for opening a cicle):
   var recorded = [...]: (Declaration of an Array) containing registered email addresses.

2. var authorized = false;:
   Boolean variable **initialization**.

3. var mail_user = prompt("Enter your email?"):
   **Istruction** for the user to enter his email address through a prompt box and stores the value in the (mail_user) variable.
4. Start a Loop through for and the array already registered to check if the entered email address is present among the registered ones.

5. var recorded = recorded[i];
   Memorize the current email address during loop iteration in the recorded variable.

6. Compare the entered email address with the currently **iterated** one. If there is a match, set it to true and exit the loop.

7. if(authorized) { ... } else { ... }:
   Check if the user is authorized. If yes, it shows a welcome message in the HTML element with the id "output"; otherwise, it shows a message that requires registration.

8. Use document.getElementById("output"). innerhtml = to updates the content of the HTML element with id "output" with the appropriate message.

# tools dice game

1. asking to the player to put the name
2. generating a random number for user and then for pc
3. declaring who is the winner based to the higher point
