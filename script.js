function getComputerChoice() {
    let compChoice = +Math.random().toFixed(3);
    if (compChoice < .333) {
        return "Rock";
    } else if (compChoice >= .333 && compChoice < .667) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What's your choice?");
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
        return console.log("Tie!");
    } else if (humanSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore += 1;
            return console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
        } else {
            humanScore += 1;
            return console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
        }
    } else if (humanSelection === "Paper") {
        if (computerSelection === "Scissors") {
            computerScore += 1;
            return console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
        } else {
            humanScore += 1;
            return console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
        }
    } else if (humanSelection === "Scissors") {
        if (computerSelection === "Rock") {
            computerScore += 1;
            return console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
        } else {
            humanScore += 1;
            return console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
        }
    }
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);