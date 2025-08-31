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

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(`You lose! Paper beats Rock`);
    console.log(`Computer Score: ${(computerScore = computerScore + 1)}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You win! Paper beats Rock`);
    console.log(`Human Score: ${(humanScore = humanScore + 1)}`);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats paper");
    console.log(`Computer Score: ${(computerScore = computerScore + 1)}`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You wins! Scissors beats paper");
    console.log((humanScore = humanScore + 1));
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You wins! Rock beats scissors ");
    console.log((humanScore = humanScore + 1));
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    console.log((computerScore = computerScore + 1));
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("Tie");
    console.log(computerScore, humanScore);
  } else if (humanChoice == "rock" && computerChoice === "rock") {
    console.log("Tie");
    console.log(computerScore, humanScore);
  } else if (humanChoice == "scissors" && computerChoice === "scissors") {
    console.log("Tie");
    console.log(computerScore, humanScore);
  } else {
    console.log("please enter correct value");
  }
}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

console.log(`Human Selection: ${humanSelection}`);
console.log(`Computer Selection: ${computerSelection}`);
playRound(humanSelection, computerSelection);
