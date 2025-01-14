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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection,computerSelection) {

        if (humanSelection === computerSelection) {
            return console.log(`Tie! ${humanSelection} cannot beat ${computerSelection}`);
        } else if (humanSelection === "Rock") {
            if (computerSelection === "Paper") {
                console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
                return ++computerScore;
            } else {
                console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
                return ++humanScore;
            }
        } else if (humanSelection === "Paper") {
            if (computerSelection === "Scissors") {
                console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
                return ++computerScore;
            } else {
                console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
                return ++humanScore;
            }
        } else if (humanSelection === "Scissors") {
            if (computerSelection === "Rock") {
                console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
                return ++computerScore;
            } else {
                console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
                return ++humanScore;
            }
        }
    }

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);
}

playGame();
