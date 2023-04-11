let choice = ['rock','paper','scissors'];

//generate a computer choice
function getComputerChoice(computerSelection){
    computerSelection = choice[(Math.floor(Math.random() * choice.length))];
    return computerSelection;
}
console.log(getComputerChoice());