function game() {

  const options = ["rock", "paper", "scissors"];

  while (true) {
    let playerChoice = prompt("Choose rock, paper, or scissors!");
    if (!options.includes(playerChoice.toLowerCase())) {
      alert("Invalid choice.  Try again!");
      continue;
    }

    let computerChoice = options[Math.floor(Math.random() * options.length)];
    alert("Computer chose " + computerChoice + ".");

    if (playerChoice.toLowerCase() === computerChoice) {
      alert("It's a tie!");
    } else if (
      (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
      (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
      (playerChoice.toLowerCase() === "paper" && computerChoice === "rock")
    ) {
      alert("You have won! Congratulations!");
    } else {
      alert("You have lost.");
    }

    if (!confirm("Would you like to play again?")) {
      break;
    }
  }
}

game(); 