function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum == 1) {
    return "rock";
  } else if (randomNum == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  
  if(playerSelection == "rock" && computerSelection == "rock") {
    return "tie!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock."
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock.";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "tie";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! scissors beat paper.";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beat scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! scissors beats paper";
  } else {
    return "tie.";
  }
}

let userChoice = prompt("Rock, paper or scissors: ");
console.log(playRound(userChoice, getComputerChoice()));
