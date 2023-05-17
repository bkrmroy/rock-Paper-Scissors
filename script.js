let choice = ["rock","paper","scissors"];
let result;

const buttonRock = document.querySelector('.rock');
buttonRock.addEventListener('click', playRound);

const buttonPaper = document.querySelector('.paper');
buttonPaper.addEventListener('click', playRound);

const buttonScissors = document.querySelector('.scissors');
buttonScissors.addEventListener('click', playRound)


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
        getFinalResult();
    }

//stores the final result

function getFinalResult(){
    if(playerWin == 5 ){
        console.log("You won the game");
        const result = document.querySelector(".result");
        result.textContent="You've won the game";
        result.setAttribute('style', 'color : green; font-size: 40px;');
        
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        
    }
    else if(computerWin == 5){
        const result = document.querySelector(".result");
        result.textContent="You've lost the game";
        result.setAttribute('style', 'color : red; font-size: 40px;');

        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        
    }
}
