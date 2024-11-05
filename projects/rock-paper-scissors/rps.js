function getComputerChoice() {
    let randomNumber = Math.random().toFixed(1);

    if (randomNumber >= 0.6) {
        choice = "Rock";
    } else if (randomNumber >= 0.3) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors? ");

    return choice
}

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        return ""
    }

    humanChoice = humanChoice.toLowerCase();
    win = true;

    if (
        (humanChoice == "rock" && computerChoice == "Scissors")
        || (humanChoice == "paper" && computerChoice == "Rock")
        || (humanChoice == "scissors" && computerChoice == "Paper")
    ) {
    } else if (humanChoice == computerChoice.toLowerCase()) {
        console.log("Draw!");
        win = "draw";
    } else {
        win = false;
    }

    if (win == true) {
        humanScore += 1;
        return `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } else if (win == false) {
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`;
    } else {
        return "Draw!"
    }
}

function playGame() {
    let rounds = 5;

    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`ROUND ${i + 1}: ${playRound(humanSelection, computerSelection)}`)
        console.log(`YOU: ${humanScore}; COMPUTER: ${computerScore}`);
    }
}
 
let humanScore = 0, computerScore = 0;
playGame()
