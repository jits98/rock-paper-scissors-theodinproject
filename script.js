function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  if (randomNumber < 34) {
    return "rock";
  } else if (randomNumber < 68) {
    return "paper";
  } else if (randomNumber < 100) {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt(
    "Please write one of the following 'rock', 'paper' & 'scissors' ",
    ""
  );
  userInput = userInput.toLowerCase();
  return userInput;
}

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`Round result: You win! ${userChoice} beats ${computerChoice}`);
    userScore++;
  } else {
    console.log(
      `Round result: You lose! ${computerChoice} beats ${userChoice}`
    );
    computerScore++;
  }

  console.log(
    `Current Score -> User: ${userScore}, Computer: ${computerScore}`
  );

  // if (humanChoice === "rock" && computerChoice === "paper") {
  //   console.log(`You lose! Paper beats Rock`);
  //   return computerScore++;
  // } else if (humanChoice === "paper" && computerChoice === "rock") {
  //   console.log(`You win! Paper beats Rock`);
  //   return humanScore++;
  // } else if (humanChoice === "paper" && computerChoice === "scissors") {
  //   console.log("You lose! Scissors beats paper");
  //   return computerScore++;
  // } else if (humanChoice === "scissors" && computerChoice === "paper") {
  //   console.log("You wins! Scissors beats paper");
  //   return humanScore++;
  // } else if (humanChoice === "rock" && computerChoice === "scissors") {
  //   console.log("You wins! Rock beats scissors ");
  //   return humanScore++;
  // } else if (humanChoice === "scissors" && computerChoice === "rock") {
  //   console.log("You lose! Rock beats Scissors");
  //   return computerScore++;
  // } else if (humanChoice === "paper" && computerChoice === "paper") {
  //   console.log("Tie");
  //   return computerScore, humanScore;
  // } else if (humanChoice == "rock" && computerChoice === "rock") {
  //   console.log("Tie");
  //   return computerScore, humanScore;
  // } else if (humanChoice == "scissors" && computerChoice === "scissors") {
  //   console.log("Tie");
  //   return computerScore, humanScore;
  // } else {
  //   console.log("please enter correct value");
  // }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Score: Player ${userScore} - Computer ${computerScore}`);
    console.log("--------------------------");
  }
  console.log("Game Over!");
  if (userScore > computerScore) {
    console.log("You are the winner!");
  } else if (userScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a draw");
  }
}

playGame();
