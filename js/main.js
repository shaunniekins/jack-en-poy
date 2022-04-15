/* Random sign for Computer's turn */
function computerPlay() {
  const signs = ["rock", "paper", "scissors"];
  const sign = signs[Math.floor(Math.random()*signs.length)];

  return sign;
}
//console.log(computerPlay());


/* Result if the user wins or loses */
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === null || playerSelection === undefined) {
    return false;
  }else if (playerSelection == computerSelection) {
    return "Draw";
  } else if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}
const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerSelection));

/* Repetition of games */
function game() {
  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: ", ).toLowerCase();
    //playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
  }
  if (playerScore > computerScore) {
    console.log("WINNER");
  } else if (playerScore < computerScore) {
    console.log("LOSER")
  } else {
    console.log("DRAW");
  }
}

game();