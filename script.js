// Returns a random choice between "rock", "paper", and "scissors"
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (random) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors"
            break;
    }

    return computerChoice;
}

// Gets and returns player choice. Reprompts the user if input was invalid.
function getHumanChoice() {
    let input = prompt("Make a choice! [R]ock, [P]aper, [S]cissors: ");
    let humanChoice;
    switch (input) {
        case "r":
        case "R":
            humanChoice = "rock";
            break;
        case "p":
        case "P":
            humanChoice = "paper";
            break;
        case "s":
        case "S":
            humanChoice = "scissors";
            break
        default:
            console.log("Invalid input. Type r for rock, p for paper and s for scissors.")
            humanChoice = getHumanChoice();
    }
    return humanChoice;
}
