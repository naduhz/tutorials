function computerPlay() {
  const COMPUTEROPTIONS = ["Rock", "Paper", "Scissors"];
  return COMPUTEROPTIONS[Math.floor(Math.random() * COMPUTEROPTIONS.length)];
}

function playRound(playerSelection, computerSelection) {
  let result;

  switch (playerSelection.toLowerCase()) {
    case "rock":
      result =
        computerSelection === "Paper"
          ? `You Lose! ${computerSelection} beats ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            }.`
          : computerSelection === "Scissors"
          ? `You Win! ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            } beats ${computerSelection}.`
          : "It's a draw!";
      break;
    case "paper":
      result =
        computerSelection === "Scissors"
          ? `You Lose! ${computerSelection} beats ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            }.`
          : computerSelection === "Rock"
          ? `You Win! ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            } beats ${computerSelection}.`
          : "It's a draw!";
      break;
    case "scissors":
      result =
        computerSelection === "Rock"
          ? `You Lose! ${computerSelection} beats ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            }.`
          : computerSelection === "Paper"
          ? `You Win! ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            } beats ${computerSelection}.`
          : "It's a draw!";
      break;
  }
  return result;
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const roundOutcome = playRound(event.target.textContent, computerPlay());
    if (roundOutcome.startsWith("You Win!")) {
      playerScore += 1;
    } else if (roundOutcome.startsWith("You Lose!")) {
      computerScore += 1;
    }

    const roundOutcomeParagraph = document.querySelector("#roundOutcome");
    roundOutcomeParagraph.textContent = roundOutcome;

    console.log(playerScore, computerScore);
  });
});

if (playerScore === 5) {
  const resultsDiv = document.querySelector("#results");
  const gameOutcomeParagraph = document.createElement("p");
  gameOutcomeParagraph.textContent = "Player wins!";
  resultsDiv.appendChild(gameOutcomeParagraph);
} else if (computerScore === 5) {
  const resultsDiv = document.querySelector("#results");
  const gameOutcomeParagraph = document.createElement("p");
  gameOutcomeParagraph.textContent = "Computer wins!";
  resultsDiv.appendChild(gameOutcomeParagraph);
}
