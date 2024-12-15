let humanChoice;
let wins = 0, losses = 0, draws = 0;
let win;

const rock = document.getElementById("player-rock");
const paper = document.getElementById("player-paper");
const scissors = document.getElementById("player-scissors");
const scoreboard = document.getElementById("scoreboard");

rock.onclick = () => {
    humanChoice = "rock";
    rock.style.backgroundColor = "#04AA6D"
    play(humanChoice, getComputerChoice());
};

paper.onclick = () => {
    humanChoice = "paper";
    play(humanChoice, getComputerChoice());
};

scissors.onclick = () => {
    humanChoice = "scissors";
    play(humanChoice, getComputerChoice());
};

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let choice;

    if (randomNumber === 0) {
        choice = "rock";
    } else if (randomNumber === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function play(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = "";

    if (
        (humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
    } else if (humanChoice === computerChoice) {
        result = "draw";
    } else {
        result = "lose";
    }

    updateScoreboard(result, humanChoice, computerChoice);
}

function updateScoreboard(result, humanChoice, computerChoice) {
    if (result === "win") {
        wins += 1;
        console.log(`You win! Your ${humanChoice} beats ${computerChoice}.`);
    } else if (result === "lose") {
        losses += 1;
        console.log(`You lose! ${computerChoice} beats your ${humanChoice}.`);
    } else {
        draws += 1;
        console.log("Draw!");
    }

    scoreboard.textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;
}
