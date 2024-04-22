function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3)
    return choices[rand];
}
function playRound(playerChoice, computerChoice) {
        
        if (computerChoice === playerChoice) {
            winRoundDisplay.textContent = "Computer chose " + computerChoice + ", You Tied!"
        }
        switch(playerChoice) {
        case "rock": {
            if (computerChoice == "scissors") {
                playerScore++;
                winRoundDisplay.textContent = "Computer chose " + computerChoice + ", You Win this round!"
                break;
            }
            else {
                winRoundDisplay.textContent = "Computer chose " + computerChoice + ", You Lost this round!"
                computerScore++;
                break;
            }
        }
        case "paper": {
            if (computerChoice == "rock") {
                winRoundDisplay.textContent = "Computer chose " + computerChoice + ", You Win this round!"
                playerScore++;
                break;
                
            }
            else {
                winRoundDisplay.textContent = "Computer chose " + computerChoice + ", You Lost this round!"
                computerScore++;
                break;
                
            }
        }
        case "scissors": {
            if (computerChoice == "paper") {
                playerScore++;
                winRoundDisplay.textContent = "Computer chose " + computerChoice + ", You Win this round!"
                break;
            }
            else {
                computerScore++;
                winRoundDisplay.textContent = "Computer chose " + computerChoice + ", You Lost this round!"
                break;
            }
        }
    }
    console.log(playerChoice);
    console.log(computerChoice);
    playerScoreDisplay.textContent = "Player Score - " + playerScore;
    computerScoreDisplay.textContent = "Computer Score - " + computerScore;
    
}
    let playerScore = 0;
    let computerScore = 0;
const game_top = document.getElementById('game-top');
const game_bottom = document.getElementById('game-bottom');
const images = document.querySelectorAll('img');
const play_button = document.getElementById('play-button');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
rock.addEventListener('click' , function() {
    playRound("rock", getComputerChoice());
})
paper.addEventListener('click' , function() {
    playRound("paper", getComputerChoice());
})
scissors.addEventListener('click' , function() {
    playRound("scissors", getComputerChoice());
})
play_button.addEventListener('click', displayGame);

function displayGame() {
    play_button.remove();
    for(let i = 0; i < images.length; i++) {
        images[i].className = 'img';
    }
    let gameHeading = document.createElement('h2');
    gameHeading.textContent = "Your Choice";
    game_top.appendChild(gameHeading);
    playerScoreDisplay = document.createElement('h4');
    computerScoreDisplay = document.createElement('h4');
    winRoundDisplay = document.createElement('h3');
    playerScoreDisplay.textContent = "Player Score - " + playerScore;
    computerScoreDisplay.textContent = "Computer Score - " + computerScore;
    game_bottom.appendChild(winRoundDisplay);
    game_bottom.appendChild(playerScoreDisplay);
    game_bottom.appendChild(computerScoreDisplay);
}
