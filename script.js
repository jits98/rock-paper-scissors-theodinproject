function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);

  if (randomNumber < 34) {
    console.log("rock");
  } else if (randomNumber < 68) {
    console.log("paper");
  } else if (randomNumber < 100) {
    console.log("scissors");
  }
}

function getHumanChoice() {
  const userInput = prompt(
    "Please write one of the following 'rock', 'paper' & 'scissor' ",
    ""
  );

  console.log(userInput);
}

const humanScore = 0;

const computerScore = 0;
