let playerScore = 0;
let computerScore = 0;

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

function getPlayerSelection() {
    let playerSelection = prompt('Please pick: Rock, Paper or Scissors');
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();   //converts to Sentence case

    return playerSelection;

}

function playRound(playerSelection, computerSelection) {


    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`; 
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === computerSelection){
        return `Draw! ${computerSelection} doesn't affect ${playerSelection}`;
    } else{
        return `Erorr, Please pick: Rock, Paper or Scissors`
    }

}

function game() {

    do {
        console.log(playRound(getPlayerSelection(), getComputerChoice()));

        console.log(`Current score: 
        You: ${playerScore}
        Computer: ${computerScore}`);
    } while (playerScore < 5 && computerScore < 5);

    if (computerScore === 5) {
        console.log(`You lose the game!`)
    } else if(playerScore === 5) {
        console.log(`You win the game!`)
    }
}

game();