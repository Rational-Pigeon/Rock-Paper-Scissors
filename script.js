let roundsCount = 0;
let humanScore = 0;
let computerScore = 0;
const computerChoiceMessage = document.querySelector(".cmp-choice");
const roundMessage = document.querySelector(".round-result")
const buttons = document.querySelectorAll("button");
const rounds = document.querySelector(".rounds");
const humanScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

computerScoreDisplay.textContent = `Computer Score: ${computerScore};`
humanScoreDisplay.textContent = `Player Score: ${humanScore}`;

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase());
    })
})

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

    computerChoiceMessage.textContent = `Computer's choice is ${computerChoice}.`;
    return computerChoice;
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        roundMessage.textContent = "It's a tie!";
        return;
    }
    else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    roundMessage.textContent = "You Win! Rock beats scissors.";
                    humanScore++;
                    break;
                }
                else {
                    roundMessage.textContent = "You lose! Paper beats rock";
                    computerScore++;
                    break;
                }

            case "paper":
                if (computerChoice === "rock") {
                    roundMessage.textContent = "You win! Paper beats rock.";
                    humanScore++;
                    break;
                }
                else {
                    roundMessage.textContent = "You lose! Scissors beat paper";
                    computerScore++;
                    break;
                }

            case "scissors":
                if (computerChoice === "paper") {
                    roundMessage.textContent = "You win! Scissors beat paper.";
                    humanScore++;
                    break;
                }
                else {
                    roundMessage.textContent = "You lose! Rock beats scissors.";
                    computerScore++;
                    break;
                }
        }
    }
    computerScoreDisplay.textContent = `Computer Score: ${computerScore};`
    humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
    if (humanScore >= 5) { alert("Congratulations! You win! Refresh the page to play again") };
    if (computerScore >= 5) { alert("You lost. Better luck next time! Refresh the page to try again") };
}

// function playGame() {
//     humanScore = 0;
//     computerScore = 0;
//
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
//
//     console.log(`Player Score: ${humanScore}`);
//     console.log(`Computer Score: ${computerScore}`);
//
//     if (humanScore === computerScore) {
//         console.log("It's a draw!");
//     }
//     else if (computerScore > humanScore) {
//         console.log("You lost. Better luck next time!");
//     }
//     else {
//         console.log("Congratulations! you win!");
//     }
//
//     let playAgain = prompt("Do you want to play again? (y/n) ").toLowerCase();
//
//     if (playAgain === "y") {
//         playGame();
//     }
//     else { return; }
// }'

//playGame();
