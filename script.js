let choice = ["rock","paper","scissors"];
let result;
//one round of the game
function playRound(_computerChoice, _playerChoice){
    _playerChoice = prompt("Enter your choice","").toLowerCase();
    console.log(`Player Choice = ${_playerChoice}`);

    function getComputerChoice(x){
        x = choice[(Math.floor(Math.random() * choice.length))];
        return x;
    }

    _computerChoice = getComputerChoice();
    console.log(`Computer Choice = ${_computerChoice}`);

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
    return result;
}


let computerWin=0;
let playerWin=0;

//need this function to play one round five times
function playGame(){
    for(i=0 ; i<5 ; i++){
        console.log(playRound());
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
    }
}
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
}

console.log("Result : " + getFinalResult());