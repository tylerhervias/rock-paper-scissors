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
  if(playerSelection == "rock" && computerSelection == "rock") {
    result = "TIE (Rock vs Rock)";
  } else if(playerSelection == "rock" && computerSelection == "paper") {
    result = "LOSE (Rock vs Paper)";
    computerScore += 1;
  } else if(playerSelection == "rock" && computerSelection == "scissors") {
    result = "WIN (Rock vs Scissors)";
    playerScore += 1;
  } else if(playerSelection == "paper" && computerSelection == "rock") {
    result = "WIN (Paper vs Rock)";
    playerScore += 1;
  } else if(playerSelection == "paper" && computerSelection == "paper") {
    result = "TIE (Paper vs Paper)";
  } else if(playerSelection == "paper" && computerSelection == "scissors") {
    result = "LOSE (Paper vs Scissors)";
    computerScore += 1;
  } else if(playerSelection == "scissors" && computerSelection == "rock") {
    result = "LOSE (Scissors vs Rock)";
    computerScore += 1;
  } else if(playerSelection == "scissors" && computerSelection == "paper") {
    result = "WIN (Scissors vs Paper)";
    playerScore += 1;
  } else if(playerSelection == "scissors" && computerSelection == "scissors") {
    result = "TIE (Scissors vs Scissors)";
  }

  return result;
}

// Handles the main game functionality
// - plays a single round on each button press
// - displays the score after each round
// - displays the winner once one player reaches 5 points
function game() {
  const buttons = document.querySelectorAll(".btn");
  const resultText = document.querySelector(".result-text");
  const playerScoreText = document.querySelector(".player-score");
  const computerScoreText = document.querySelector(".computer-score");
  const winnerText = document.querySelector(".winner-text");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerChoice = button.innerHTML;
      let playerSelection = playerChoice.toLowerCase();
      playRound(playerSelection, computerPlay());

      resultText.textContent = result; 
      playerScoreText.textContent = "Your Score: " + playerScore;
      computerScoreText.textContent = "Computer Score: " + computerScore;

      if(playerScore == 5) {
        winnerText.textContent = "You won the game!";

        const rockButton = document.querySelector(".rock-btn");
        rockButton.setAttribute("disabled", "disabled");
        rockButton.setAttribute("style", "background-color: #484848; cursor: default;");

        const paperButton = document.querySelector(".paper-btn");
        paperButton.setAttribute("disabled", "disabled");
        paperButton.setAttribute("style", "background-color: #484848; cursor: default;");

        const scissorsButton = document.querySelector(".scissors-btn");
        scissorsButton.setAttribute("disabled", "disabled");
        scissorsButton.setAttribute("style", "background-color: #484848; cursor: default;");

        playerScore = 0;
        computerScore = 0;
      } else if(computerScore == 5) {
        winnerText.textContent = "You lost the game!";

        const rockButton = document.querySelector(".rock-btn");
        rockButton.setAttribute("disabled", "disabled");
        rockButton.setAttribute("style", "background-color: #484848; cursor: default;");

        const paperButton = document.querySelector(".paper-btn");
        paperButton.setAttribute("disabled", "disabled");
        paperButton.setAttribute("style", "background-color: #484848; cursor: default;");

        const scissorsButton = document.querySelector(".scissors-btn");
        scissorsButton.setAttribute("disabled", "disabled");
        scissorsButton.setAttribute("style", "background-color: #484848; cursor: default;");

        playerScore = 0;
        computerScore = 0;
      } else {
        winnerText.textContent = "";
      }
    });
  });
}

game();