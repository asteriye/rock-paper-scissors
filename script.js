function getComputerChoice(){                           

    let computerChoice = Math.floor(Math.random() * 3)  //generates random number 0-2

    if(computerChoice === 0) {
        computerChoice = 'Rock';
    } else if(computerChoice === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

   // let firstLetter = playerSelection.charAt(0).toUpperCase()
   // let extracted = playerSelection.slice(1);
   
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); 

    //playerSelection = firstLetter + extracted

   

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `Draw! ${computerSelection} doesn't affect ${playerSelection}`;
    }
}

const playerSelection = "rOck";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));