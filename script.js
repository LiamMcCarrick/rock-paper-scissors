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

function playRound(humanSelection,computerSelection) {

    if (humanSelection === computerSelection) {
        resultDiv.textContent = `Tie! ${humanSelection} cannot beat ${computerSelection}`;
    } else if ((humanSelection === "Scissors" && computerSelection === "Paper") ||
            (humanSelection === "Paper" && computerSelection === "Rock") ||
            (humanSelection === "Rock" && computerSelection === "Scissors")) {

        resultDiv.textContent = `You Win! ${humanSelection} beats ${computerSelection}`;
        ++humanScore;
        hScoreSpan.textContent = humanScore;
    } else {
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${humanSelection}`;
        ++computerScore;
        cScoreSpan.textContent = computerScore;
    }
}

let humanScore = 0;
let computerScore = 0;

const hScoreSpan = document.createElement("span");
const cScoreSpan = document.createElement("span");

const hScoreDiv = document.querySelector(".human-score");
const cScoreDiv = document.querySelector(".computer-score");
const resultDiv = document.querySelector(".result");

hScoreDiv.appendChild(hScoreSpan);
cScoreDiv.appendChild(cScoreSpan);

const buttons = document.querySelectorAll("button");
let roundNumber = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let humanSelection = button.textContent;
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        ++roundNumber;
        if (roundNumber === 5) {
            resultDiv.textContent = `Game Over! The final score is You: ${humanScore} and Computer: ${computerScore}`;
        }
    })
})

