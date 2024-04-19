function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3)
    return choices[rand];
}
function playRound(playerChoice, computerChoice) {

        if (computerChoice === playerChoice) {
            return "Tied";
        }
        switch(playerChoice) {
        case "rock": {
            if (computerChoice == "scissors") {
                playerScore++;
                return "You Win";
            }
            else {
                computerScore++;
                return "You Lose";
            }
        }
        case "paper": {
            if (computerChoice == "rock") {
                playerScore++;
                return "You Win";
            }
            else {
                computerScore++;
                return "You Lose";
            }
        }
        case "scissors": {
            if (computerChoice == "paper") {
                playerScore++;
                return "You Win";
            }
            else {
                computerScore++;
                return "You Lose";
            }
        }
    }
}
    let playerScore = 0;
    let computerScore = 0;
function playGame() {
    
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Papers, Scissors");
        playerChoice = playerChoice.toLowerCase();
        console.log(playRound(playerChoice, getComputerChoice()));  
    }
    console.log('Player Score: ' + playerScore + " ,Computer Score: " + computerScore);
    if (computerScore == playerScore) {
        console.log("Tied")
    }
    else if (computerScore > playerScore) {
        console.log("You Lose")
    }
    else {
        console.log("Winner")
    }
}
playGame();