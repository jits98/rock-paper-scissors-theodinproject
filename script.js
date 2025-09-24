function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  if (randomNumber < 34) {
    return "rock";
  } else if (randomNumber < 68) {
    return "paper";
  } else if (randomNumber <= 100) {
    return "scissors";
  }
}

let userScore = 0;
let computerScore = 0;

let result = document.querySelector(".result");

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result.textContent = ` Round result: You win! ${userChoice} beats ${computerChoice} `;
    userScore++;
  } else {
    result.textContent = ` Round result: You lose! ${computerChoice} beats ${userChoice} `;
    computerScore++;
  }

  let scoreCard = document.createElement("div");

  scoreCard.textContent += ` Current Score -> User: ${userScore}, Computer: ${computerScore} `;

  result.appendChild(scoreCard);

  if (userScore === 5 || computerScore === 5) {
    let finalScore = document.createElement("div");

    finalScore.textContent += ` Game Over: ${
      userScore > computerScore ? "User Wins" : "Computer Wins"
    } `;
    userScore = 0;
    computerScore = 0;

    result.appendChild(finalScore);
  }
}

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

function rockButtonClick() {
  playRound("rock", getComputerChoice());
}

function paperButtonClick() {
  playRound("paper", getComputerChoice());
}

function scissorsButtonClick() {
  playRound("scissors", getComputerChoice());
}

rockButton.addEventListener("click", rockButtonClick);

paperButton.addEventListener("click", paperButtonClick);

scissorsButton.addEventListener("click", scissorsButtonClick);
