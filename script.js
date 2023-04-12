let choice = ["rock","paper","scissors"];

//generate a computer choice
function getComputerChoice(computerSelection){
    computerSelection = choice[(Math.floor(Math.random() * choice.length))];
    return computerSelection;
}
//declare both choices
const computerChoice = getComputerChoice();
const playerChoice = "scissors"; //temporary, will add user prompt later

console.log(`Computer Choice = ${computerChoice}`);
console.log(`Player Choice = ${playerChoice}`);

//create the main function that will help to play the game
function playRound(_computerChoice = computerChoice, _playerChoice = playerChoice){
    let result;
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

console.log(playRound());