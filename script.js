let humanScore = 0;
let computerScore = 0;

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
    input = input.toLowerCase();

    let humanChoice;
    switch (input) {
        case "rock":
        case "r":
            humanChoice = "rock";
            break;
        case "paper":
        case "p":
            humanChoice = "paper";
            break;
        case "scissors":
        case "s":
            humanChoice = "scissors";
            break
        default:
            console.log("Invalid input. Try again!")
            humanChoice = getHumanChoice();
    }
    return humanChoice;
}
