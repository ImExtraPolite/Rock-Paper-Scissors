function getComputerChoice() {
  let computer;

  computer = Math.floor(Math.random() * 3) + 1;

  return computer;
}

// 1 = rock
// 2 = paper
// 3 = scissors

function getUser(user) {
  user = user.toLowerCase();

  if (getComputerChoice() === 1 && user == "rock") {
    return "Computer chose rock. It's a tie!";
  } else if (getComputerChoice() === 1 && user == "paper") {
    return "Computer chose rock. You win!";
  } else if (getComputerChoice() === 1 && user == "scissors") {
    return "Computer chose rock. You lose!";
  } else if (getComputerChoice() === 2 && user == "rock") {
    return "Computer chose paper. You lose!";
  } else if (getComputerChoice() === 2 && user == "paper") {
    return "Computer chose paper. It's a tie!";
  } else if (getComputerChoice() === 2 && user == "scissor") {
    return "Computer chose paper. You win!";
  } else if (getComputerChoice() === 3 && user == "rock") {
    return "Computer chose scissors. You win!";
  } else if (getComputerChoice() === 3 && user == "paper") {
    return "Computer chose scissors. You lose!";
  } else if (getComputerChoice() === 3 && user == "scissors") {
    return "Computer chose scissors. It's a tie!";
  } else {
    return "Wrong input!";
  }
}

let user = prompt("Enter rock, paper or scissors: ");

console.log(user);
alert(getUser(user));