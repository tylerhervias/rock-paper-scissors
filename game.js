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
  const rockChoice = document.querySelector(".rock-choice");
  const paperChoice = document.querySelector(".paper-choice");
  const scissorsChoice = document.querySelector(".scissors-choice");

  rockChoice.classList.add("hidden");
  paperChoice.classList.add("hidden");
  scissorsChoice.classList.add("hidden");

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
        winnerText.innerHTML = "<span style=\"color: rgb(36, 172, 104);\">You won the game!</span>";

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
        winnerText.innerHTML = "<span style=\"color: rgb(172, 36, 36);\">You lost the game!</span>";

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