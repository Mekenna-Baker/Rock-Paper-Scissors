function game() {

const options = ["rock", "paper", "scissors"];

while (true) {
    let playerchoice = prompt("Choose rock, paper, or scissors!");
    if (!options.includes(playerchoice.toLowerCase())) {
        alert("Invalid choice.  Try again!");
        continue;
    }

    let computerChoice = options[Math.floor(Math.random() * options.length)];
    alert("Computer chose " + computerChoice + ".");
}

}

game();