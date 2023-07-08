# rock-paper-scissors

## Explanation

-the **getComputerChoice()** function returns a randomly selected choice ('rock', 'paper', or 'scissors') for the computer.

-The **playRound()** function takes the player's selection and the computer's selection as parameters. *It converts both selections to lowercase for case-insensitive comparison. It then determines the winner based on the classic "rock paper scissors" rules and returns a string that declares the winner and the choices made*.

-The **game()** function handles the overall game logic. It initializes variables for the player's score and the computer's score. It uses a **for** loop to play 5 rounds of the game. In each round, it prompts the player for their choice, generates the computer's choice, and calls the **playRound** function. It updates the scores based on the result of each round and logs the result to the console.

-__After 5 rounds, the game function determines the overall winner based on the scores and logs the final result to the console__