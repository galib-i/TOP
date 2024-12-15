let humanChoice;
let wins = 0, losses = 0, draws = 0;

const rock = document.getElementById("player-rock");
const paper = document.getElementById("player-paper");
const scissors = document.getElementById("player-scissors");
const scoreboard = document.getElementById("scoreboard");
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");

rock.onclick = () => handleChoice("rock");
paper.onclick = () => handleChoice("paper");
scissors.onclick = () => handleChoice("scissors");

function handleChoice(choice) {
    humanChoice = choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}


function playRound(player, computer) {
    let result;

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        result = "win";
        updateUI(player, computer, "green", "red");
    } else if (player === computer) {
        result = "draw";
        updateUI(player, computer, "yellow", "yellow");
    } else {
        result = "lose";
        updateUI(player, computer, "red", "green");
    }

    updateScoreboard(result, player, computer);
}

function updateUI(player, computer, playerColor, computerColor) {
    document.getElementById(`player-${player}`).style.backgroundColor = playerColor;
    document.getElementById(`computer-${computer}`).style.backgroundColor = computerColor;
}

function updateScoreboard(result, player, computer) {
    if (result === "win") {
        wins++;
        showResultOverlay("You Won!");
    } else if (result === "lose") {
        losses++;
        showResultOverlay("You Lost!");
    } else {
        draws++;
        showResultOverlay("It's a Draw!");
    }

    scoreboard.textContent = `Wins: ${wins} | Losses: ${losses} | Draws: ${draws}`;

    setTimeout(() => updateUI(player, computer, "", ""), 2000);
}

function showResultOverlay(message) {
    const overlay = document.createElement("div");
    overlay.id = "result-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";
    overlay.style.color = "white";
    overlay.style.fontSize = "4rem";
    overlay.style.fontWeight = "bold";
    overlay.style.textAlign = "center";
    overlay.textContent = message;

    document.body.appendChild(overlay);

    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 2000);
}
