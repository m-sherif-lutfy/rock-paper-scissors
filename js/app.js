let getComputerChoice = () => {
    
    const choices = ["rock", "paper", "scissors"];

    let exp = Math.floor(Math.random() * choices.length);

    return choices[exp];
}

let getHumanChoice = () => {

    const choices = ["rock", "paper", "scissors"];    

    let x = prompt("Choose rock or paper or scissors");

    if (choices.includes(x.toLowerCase())) {
        return x;
    } else {
        console.log("Invalid choice.");
        return getHumanChoice();
    }
}

let playRound = (c, h) => {

    if (c === h) {
        return "It's a tie";
    } else if (c === "rock") {
        if (h === "paper") {
            humanScore++;
            return "Human wins: Paper beats rock.";
        } else {
            computerScore++;
            return "Computer wins: Rock beats scissors.";
        }
    } else if (c === "paper") {
        if (h === "scissors") {
            humanScore++;
            return "Human wins: Scissors beats paper.";
        } else {
            computerScore++;
            return "Computer wins: Paper beats rock.";
        }
    } else if (c === "scissors") {
        if (h === "rock") {
            humanScore++;
            return "Human wins: Rock beats scissors.";
        } else {
            computerScore++;
            return "Computer wins: Scissors beats paper.";
        }
    }
}

let playGame = () => {

    for (let i = 0; i < 5; i++) {

    let computer = getComputerChoice();
    let human = getHumanChoice();

    console.log(playRound(computer, human));
    console.log(`Computer score: ${computerScore} - Human score: ${humanScore}`);
    }

    let result = computerScore === humanScore? "It's a tie! No-one wins!" : computerScore > humanScore? "Computer wins the game!" : "Human wins the game!";

    console.log(result);
}

let computerScore = 0;
let humanScore = 0;

playGame();