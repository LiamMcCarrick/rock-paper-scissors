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