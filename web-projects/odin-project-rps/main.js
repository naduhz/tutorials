function computerPlay() {
  const COMPUTEROPTIONS = ["Rock", "Paper", "Scissors"];
  return COMPUTEROPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

function playRound(playerSelection, computerSelection) {
  let result;

  switch (playerSelection.toLowerCase()) {
    case "rock":
      result =
        computerSelection.toLowerCase() === "paper"
          ? `You Lose! ${computerSelection} beats ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            }.`
          : computerSelection.toLowerCase() === "scissors"
          ? `You Win! ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            } beats ${computerSelection}.`
          : "It's a draw!";
      break;
    case "paper":
      result =
        computerSelection.toLowerCase() === "scissors"
          ? `You Lose! ${computerSelection} beats ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            }.`
          : computerSelection.toLowerCase() === "rock"
          ? `You Win! ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            } beats ${computerSelection}.`
          : "It's a draw!";
      break;
    case "scissors":
      result =
        computerSelection.toLowerCase() === "rock"
          ? `You Lose! ${computerSelection} beats ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            }.`
          : computerSelection.toLowerCase() === "paper"
          ? `You Win! ${
              playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
            } beats ${computerSelection}.`
          : "It's a draw!";
      break;
  }
  console.log(playerSelection, computerSelection, result);
  return result;
}

function game() {
  let winner = 0;

  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Enter Rock, Paper or Scissors!");
    const PLAYEROPTIONS = ["rock", "paper", "scissors"];

    while (!PLAYEROPTIONS.includes(playerSelection.toLowerCase())) {
      alert("Please enter a valid option!");
      playerSelection = prompt("Enter Rock, Paper or Scissors!");
    }

    let roundOutcome = playRound(playerSelection, computerPlay());
    roundOutcome.startsWith("You Win!")
      ? (winner += 1)
      : roundOutcome.startsWith("You Lose!")
      ? (winner -= 1)
      : (winner = winner);
  }

  return winner > 0
    ? console.log(winner, "Player wins!")
    : winner < 0
    ? console.log(winner, "Computer wins!")
    : console.log(winner, "It's a draw!");
}

game();
