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

// function game() {
//   let score = 0;

//   for (let i = 1; i <= 5; i++) {
//     let playerSelection = prompt("Enter Rock, Paper or Scissors!");
//     const PLAYEROPTIONS = ["rock", "paper", "scissors"];

//     while (!PLAYEROPTIONS.includes(playerSelection.toLowerCase())) {
//       alert("Please enter a valid option!");
//       playerSelection = prompt("Enter Rock, Paper or Scissors!");
//     }

//     let roundOutcome = playRound(playerSelection, computerPlay());
//     roundOutcome.startsWith("You Win!")
//       ? (score += 1)
//       : roundOutcome.startsWith("You Lose!")
//       ? (score -= 1)
//       : (score = score);
//   }

//   return score > 0
//     ? console.log(score, "Player wins!")
//     : score < 0
//     ? console.log(score, "Computer wins!")
//     : console.log(score, "It's a draw!");
// }

const buttons = document.querySelectorAll(".button");
const resultsDiv = document.querySelector("#results");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = playRound(event.target.textContent, computerPlay());
    resultsDiv.appendChild(paragraph);
  });
});

// game();
