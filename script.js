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

    return computerChoice
}

