// to get computer choices
function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  


  
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
      return "You lose! " + computerSelection + " beats " + playerSelection;
    }
  }
 