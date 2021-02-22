const buttons = document.querySelectorAll(".btn");

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");

const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");

const resultText = document.querySelector(".result-text");
const winnerText = document.querySelector(".winner-text");

const playAgainButton = document.querySelector(".reset-btn");

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
// - displays the computer choice
// - returns a string that shows the result of the round
function playRound(playerSelection, computerSelection) {
  const rockChoice = document.querySelector(".rock-choice");
  const paperChoice = document.querySelector(".paper-choice");
  const scissorsChoice = document.querySelector(".scissors-choice");

  // hides the computer choice from the previous round
  rockChoice.classList.add("hidden");
  paperChoice.classList.add("hidden");
  scissorsChoice.classList.add("hidden");

  // makes the result text visible again when starting a new game
  if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
    resultText.classList.remove("hidden");
  }

  // shows the computer choice and displays the result of the round
  if(playerSelection == "rock" && computerSelection == "rock") {
    rockChoice.classList.remove("hidden");

    result = "It's a tie!";
  } else if(playerSelection == "rock" && computerSelection == "paper") {
    paperChoice.classList.remove("hidden");

    result = "You lost the round!";
    computerScore += 1;
  } else if(playerSelection == "rock" && computerSelection == "scissors") {
    scissorsChoice.classList.remove("hidden");

    result = "You won the round!";
    playerScore += 1;
  } else if(playerSelection == "paper" && computerSelection == "rock") {
    rockChoice.classList.remove("hidden");

    result = "You won the round!";
    playerScore += 1;
  } else if(playerSelection == "paper" && computerSelection == "paper") {
    paperChoice.classList.remove("hidden");

    result = "It's a tie!";
  } else if(playerSelection == "paper" && computerSelection == "scissors") {
    scissorsChoice.classList.remove("hidden");

    result = "You lost the round!";
    computerScore += 1;
  } else if(playerSelection == "scissors" && computerSelection == "rock") {
    rockChoice.classList.remove("hidden");

    result = "You lost the round!";
    computerScore += 1;
  } else if(playerSelection == "scissors" && computerSelection == "paper") {
    paperChoice.classList.remove("hidden");

    result = "You won the round!";
    playerScore += 1;
  } else if(playerSelection == "scissors" && computerSelection == "scissors") {
    scissorsChoice.classList.remove("hidden");

    result = "It's a tie!";
  }

  return result;
}

// Handles the main game functionality
// - plays a single round on each button press
// - displays the score after each round
// - displays the winner of the game once one player reaches 5 points
function game() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerChoice = button.innerHTML;
      let playerSelection = playerChoice.toLowerCase();

      playRound(playerSelection, computerPlay());
      
      // updates the scoreboard and shows the round result
      playerScoreText.textContent = "Your Score: " + playerScore;
      computerScoreText.textContent = "Computer Score: " + computerScore;

      resultText.textContent = result;

      // shows the winner of the game once either player reaches 5 points
      // - displays the "Play Again" button
      // - disables the option buttons
      // - resets the score
      if(playerScore == 5) {
        winnerText.innerHTML = "<span style=\"color: rgb(36, 172, 104);\">You won the game!</span>";
        playAgainButton.classList.remove("hidden");

        rockButton.setAttribute("disabled", "disabled");
        rockButton.setAttribute("style", "background-color: #484848; cursor: default;");

        paperButton.setAttribute("disabled", "disabled");
        paperButton.setAttribute("style", "background-color: #484848; cursor: default;");

        scissorsButton.setAttribute("disabled", "disabled");
        scissorsButton.setAttribute("style", "background-color: #484848; cursor: default;");

        playerScore = 0;
        computerScore = 0;
      } else if(computerScore == 5) {
        winnerText.innerHTML = "<span style=\"color: rgb(172, 36, 36);\">You lost the game!</span>";
        playAgainButton.classList.remove("hidden");

        rockButton.setAttribute("disabled", "disabled");
        rockButton.setAttribute("style", "background-color: #484848; cursor: default;");

        paperButton.setAttribute("disabled", "disabled");
        paperButton.setAttribute("style", "background-color: #484848; cursor: default;");

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

/* Resets all components to their default state */
function reset() {
  // Enables the buttons again
  rockButton.removeAttribute("disabled");
  rockButton.removeAttribute("style");

  paperButton.removeAttribute("disabled");
  paperButton.removeAttribute("style");

  scissorsButton.removeAttribute("disabled");
  scissorsButton.removeAttribute("style");

  // hides the round result text
  resultText.classList.add("hidden");

  // hides the "Play Again" button
  playAgainButton.classList.add("hidden");
}

game();