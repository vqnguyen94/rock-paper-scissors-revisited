function computerPlay(){
    
    let randomNum = Math.round(Math.random() * 2);
    
    switch(randomNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function playRound (playerSelection, computerSelection){
 

    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "You lose! Paper beats Rock!";
        }
        else if(computerSelection == "scissors"){
            return "You win! Rock beats Scissors!";
        }
        else{
            return "It's a tie!";
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You win! Paper beats Rock!";
        }
        else if(computerSelection == "scissors"){
            return "You lose! Scissors beats Paper!";
        }
        else{
            return "It's a tie!";
        }        
    }
    else{ //scissors
        if(computerSelection == "paper"){
            return "You win! Scissors beats Paper!";
        }
        else if(computerSelection == "rock"){
            return "You lose! Rock beats Scissors!";
        }
        else{
            return "It's a tie!";
        }        
    }
}


function playGame(){
    let playerSelection, computerSelection, results;

    playerSelection = this.getAttribute('id');
    computerSelection = computerPlay();
    changePlayerIcon(playerSelection);
    changeCpuIcon(computerSelection);
    results = playRound(playerSelection, computerSelection);
    resultDisplay.textContent = results;
    if(results.includes("win")){
        playerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        playerScoreDisplay.textContent = playerScore;
    }
    else if(results.includes("lose")){
        computerScore++;
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        computerScoreDisplay.textContent = computerScore;
    }
    else{
        console.log("Player: " + playerScore + " Computer: " + computerScore);
    }

    if(computerScore == 5 || playerScore == 5){
        if(computerScore == 5){
            resultDisplay.textContent = "Oh no! Computer is the final winner!";
        }
        else{
            resultDisplay.textContent = "Congrats! You are the final winner!";
        }

        selections.forEach(item => item.remove());
        let reset = document.createElement('button');
        reset.addEventListener('click', resetGame);
        reset.textContent = 'Play again';
        icons.appendChild(reset); 
    }

}

function changeCpuIcon(selection){
    if(selection == "rock"){
        cpuIcon.src = "rockFlip.png";
    }
    else if(selection == "paper"){
        cpuIcon.src = "paperFlip.png";
    }
    else {
        cpuIcon.src = "scissorsFlip.png";
    }
    cpuIcon.classList.toggle('spin'); 
}

function changePlayerIcon(selection){
    if(selection == "rock"){
        playerIcon.src = "rock.png";
    }
    else if(selection == "paper"){
        playerIcon.src = "paper.png";
    }
    else {
        playerIcon.src = "scissors.png";
    }

    playerIcon.classList.toggle('spin'); 
}

function resetGame(){

    const rock = document.createElement('img');
    const paper = document.createElement('img');
    const scissors = document.createElement('img');
    rock.src = "rock.png";
    paper.src = "paper.png";
    scissors.src = "scissors.png";
    rock.setAttribute('id', 'rock'); 
    rock.setAttribute('class', 'selection');
    paper.setAttribute('id', 'paper');  
    paper.setAttribute('class', 'selection'); 
    scissors.setAttribute('id', 'scissors'); 
    scissors.setAttribute('class', 'selection'); 

    icons.appendChild(rock);
    icons.appendChild(paper);
    icons.appendChild(scissors);

    selections = document.querySelectorAll('.selection');
    selections.forEach(item => item.addEventListener('click', playGame))

    document.querySelector('button').remove();


    cpuIcon.src = "question.png";
    playerIcon.src = "question.png";

    resultDisplay.textContent = "Make a selection below to start";

    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

}

let playerScore, computerScore;
playerScore = 0;
computerScore = 0;


const playerScoreDisplay = document.querySelector('#player');
const computerScoreDisplay = document.querySelector('#computer');
const resultDisplay = document.querySelector('#results');

let selections = document.querySelectorAll('.selection');
const icons = document.getElementById("icons");

let cpuIcon = document.querySelector('#cpuIcon');
let playerIcon = document.querySelector('#playerIcon')


selections.forEach(item => item.addEventListener('click', playGame))








