let playerScore = 0;
let computerScore = 0;

// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  let randomInt = Math.floor(Math.random() * 3); // Generates a random int between 0 and 2
  let randomChoice = undefined;

  if(randomInt == 0) {
    randomChoice = "rock";
  } else if(randomInt == 1) {
    randomChoice = "paper";
  } else {
    randomChoice = "scissors";
  }

  return randomChoice;
}

// Plays a single round of Rock Paper Scissors
// Returns a string that declares the winner of the round
function playRound(playerSelection, computerSelection) {
  if(playerSelection == 'rock' && computerSelection == 'rock') {
    result = "TIE (Rock vs Rock)";
  } else if(playerSelection == 'rock' && computerSelection == 'paper') {
    result = "LOSE (Rock vs Paper)";
    computerScore += 1;
  } else if(playerSelection == 'rock' && computerSelection == 'scissors') {
    result = "WIN (Rock vs Scissors)";
    playerScore += 1;
  } else if(playerSelection == 'paper' && computerSelection == 'rock') {
    result = "WIN (Paper vs Rock)";
    playerScore += 1;
  } else if(playerSelection == 'paper' && computerSelection == 'paper') {
    result = "TIE (Paper vs Paper)";
  } else if(playerSelection == 'paper' && computerSelection == 'scissors') {
    result = "LOSE (Paper vs Scissors)";
    computerScore += 1;
  } else if(playerSelection == 'scissors' && computerSelection == 'rock') {
    result = "LOSE (Scissors vs Rock)";
    computerScore += 1;
  } else if(playerSelection == 'scissors' && computerSelection == 'paper') {
    result = "WIN (Scissors vs Paper)";
    playerScore += 1;
  } else if(playerSelection == 'scissors' && computerSelection == 'scissors') {
    result = "TIE (Scissors vs Scissors)";
  }

  return result;
}

// Simulates a 5 round game
// - prompts the user for a choice at the start of each round
// - displays the score after each round
// - displays the winner at the end of the game
function game() {
  for(let roundNumber = 1; roundNumber < 6; roundNumber++) {
    let playerInput = prompt("Choose 'Rock', 'Paper', or 'Scissors'");
    let playerSelection = playerInput.toLowerCase();

    if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
      playRound(playerSelection, computerPlay());
      console.log("Round " + roundNumber + " of 5 - " + result);
      console.log("Score: " + playerScore + " - " + computerScore);
      console.log("");
    } else {
      console.log('You entered an invalid option.');
      break;
    }
  }

  if(roundNumber = 5 && playerScore > computerScore) {
    console.log("GAME OVER: You won the game!");
    console.log("Type 'game()' in the console to play again.");
    playerScore = 0;
    computerScore = 0;
  } else if(roundNumber = 5 && computerScore > playerScore) {
    console.log("GAME OVER: You lose the game!");
    console.log("Type 'game()' in the console to play again.");
    playerScore = 0;
    computerScore = 0;
  } else if(roundNumber = 5 && playerScore == computerScore) {
    console.log("GAME OVER: It's a tie!");
    console.log("Type 'game()' in the console to play again.");
  }
}