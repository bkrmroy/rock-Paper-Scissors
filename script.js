let choice = ["rock","paper","scissors"];
let result;

const btn = document.querySelector('.rock');
btn.addEventListener('click', playRound);

const btn2 = document.querySelector('.paper');
btn2.addEventListener('click', playRound);

const btn3 = document.querySelector('.scissors');
btn3.addEventListener('click', playRound)


//one round of the game
function playRound(_computerChoice, _playerChoice){
    _playerChoice = this.textContent.toLowerCase();

    function getComputerChoice(x){
        x = choice[(Math.floor(Math.random() * choice.length))];
        return x;
    }
    _computerChoice = getComputerChoice();

    if(_computerChoice === _playerChoice){
        result = "It's a tie";
    }
    else if(_computerChoice === "scissors" && _playerChoice === "rock"){
        result = "You win";
    }
    else if(_computerChoice === "paper" && _playerChoice === "scissors"){
        result = "You win";
    }
    else if(_computerChoice === "rock" && _playerChoice === "paper"){
        result = "You win";
    }
    else{
        result = "You lose, Computer wins";
    }
    const container = document.querySelector('#container');
    const message = document.createElement('div');
    message.textContent = `You chose ${_playerChoice} and computer chose ${_computerChoice}. ` + result
    container.appendChild(message);

    setTimeout(function() {
        container.removeChild(message);
      }, 3000); 
    countResult();
}


let computerWin=0;
let playerWin=0;

//win counter

function countResult(){
        if(result == "You win"){
            playerWin += 1;
        }
        else if(result == "You lose, Computer wins"){
            computerWin +=1;
        }
        else{
            playerWin = playerWin;
            computerWin = computerWin;
        } 
        const player = document.querySelector('.player');
        const computer = document.querySelector('.computer');
        player.textContent = player.textContent.substring(0, player.textContent.length - 1) + playerWin ;
        computer.textContent = computer.textContent.substring(0, computer.textContent.length -1) + computerWin;
    }
/*
//stores the final result
function getFinalResult(){
    playGame();
    console.log("Number of times you won = " + playerWin);
    console.log("Number of times computer won = " + computerWin);
    console.log("Number of ties = " + (5-(computerWin + playerWin)));

    let finalResult; //decides the final winner
    if(playerWin > computerWin){
        finalResult = "Congrats, You won the game";
    }
    else if(computerWin > playerWin){
        finalResult = "You lost the game, Computer won";
    }
    else finalResult = "Entire game is a tie";

    return finalResult;
}*/
