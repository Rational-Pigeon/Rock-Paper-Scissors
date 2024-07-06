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

    console.log(`Computer's choice is ${computerChoice}.`)
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
    console.log(`Your choice is ${humanChoice}.`)
    return humanChoice;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return;
    }
    else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    console.log("You Win! Rock beats scissors.")
                    humanScore++;
                    return;
                }
                else {
                    console.log("You lose! Paper beats rock")
                    computerScore++;
                    return;
                }

            case "paper":
                if (computerChoice === "rock") {
                    console.log("You win! Paper beats rock.")
                    humanScore++;
                    return;
                }
                else {
                    console.log("You lose! Scissors beat paper")
                    computerScore++;
                    return;
                }

            case "scissors":
                if (computerChoice === "paper") {
                    console.log("You win! Scissors beat paper.")
                    humanScore++;
                    return;
                }
                else {
                    console.log("You lose! Rock beats scissors.")
                    computerScore++;
                    return;
                }
        }
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (humanScore === computerScore) {
        console.log("It's a draw!");
    }
    else if (computerScore > humanScore) {
        console.log("You lost. Better luck next time!");
    }
    else {
        console.log("Congratulations! you win!");
    }

    let playAgain = prompt("Do you want to play again? (y/n) ").toLowerCase();

    if (playAgain === "y") {
        playGame();
    }
    else { return; }
}

playGame();
