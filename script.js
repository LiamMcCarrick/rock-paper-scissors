function getComputerChoice() {
    const compChoice = +Math.random().toFixed(3);
    if (compChoice < .333) {
        return "Rock";
    } else if (compChoice >= .333 && compChoice < .667) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("What's your choice?");
    if (choice.toLowerCase() === "rock") {
        return "Rock";
    } else if (choice.toLowerCase() === "paper") {
        return "Paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "Scissors";
    }
}

function playRound(humanSelection,computerSelection) {

    if (humanSelection === computerSelection) {
        console.log(`Tie! ${humanSelection} cannot beat ${computerSelection}`)
    } else if ((humanSelection === "Scissors" && computerSelection === "Paper") ||
            (humanSelection === "Paper" && computerSelection === "Rock") ||
            (humanSelection === "Rock" && computerSelection === "Scissors")) {

        console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
        return ++humanScore;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
        return ++computerScore;
    }
}

let humanScore = 0;
let computerScore = 0;

const hScoreSpan = document.createElement("span");
const cScoreSpan = document.createElement("span");
hScoreSpan.textContent = humanScore;
cScoreSpan.textContent = computerScore;

const hScoreDiv = document.querySelector(".human-score");
const cScoreDiv = document.querySelector(".computer-score");

hScoreDiv.appendChild(hScoreSpan);
cScoreDiv.appendChild(cScoreSpan);

for (i = 0; i < 5; i++) {
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection,computerSelection);

}

