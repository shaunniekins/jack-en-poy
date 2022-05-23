let scores = document.querySelector("#scores");
let description = document.querySelector("#game_descrip");
let userWeapon = document.querySelector("#user_weapon");
let computerWeapon = document.querySelector("#computer_weapon");
const chosenWeapon = document.querySelectorAll(".box");

let playerScore = 0;
let computerScore = 0;
//let playerSelection;
chosenWeapon.forEach(chosenWeapon_1 => 
  chosenWeapon_1.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }
    game(chosenWeapon_1.getAttribute("id"))
    }
));

/* Random sign for Computer's turn */
function computerPlay() {
  let signs = ["rock", "paper", "scissors"];
  let sign = signs[Math.floor(Math.random()*signs.length)];

  return sign;
}

function playRound(playerSelection, computerSelection) {
  let log = "";

  if (playerSelection == computerSelection) {
    log = "Draw\n";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")) {
    
    //scores.innerText = `${playerScore}   -    ${computerScore}`;
    log = `You win!\n${playerSelection} beats ${computerSelection}.`;
  } else {
    //computerScore++;
    //scores.innerText = `${playerScore}   -    ${computerScore}`;
    log = `You lose!\n${computerSelection} beats ${playerSelection}.`;
  }
  return log;
}

function game(playerSelection) {
  let computerSelection = computerPlay();
  computerWeapon.innerText = `${computerSelection}`;
  userWeapon.innerText = `${playerSelection}`;

  let roundResult = playRound(playerSelection, computerSelection);


  if (roundResult.search('You win!') > -1) {
    playerScore++;
  } else if (roundResult.search('You lose!') > -1) {
    computerScore++;
  }
  
  scores.innerText = `${playerScore}   -    ${computerScore}`;
  description.innerText = roundResult;

  if (playerScore >= 5 && computerScore < 5) {
    description.innerText = "GAME OVER.\nYOU ARE THE WINNER!";
  } else if (playerScore < 5 && computerScore >= 5) {
    description.innerText = "GAME OVER.\nYOU ARE THE LOSER!";
  }
}