//Game scores
let humanScore = 0;
let computerScore = 0;
//Get computer's choice
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];
}
//Determine the winner
function determineWinner(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie!";
    } 
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        return "Human wins this round!";
    }
    computerScore++;
    return "Computer wins this round!";    
}
//Play a round
function playRound(humanChoice){
    if (humanScore === 5 || computerScore === 5) return;

    const computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);

    document.getElementById('results').innerHTML = `
        <p>You chose: ${humanChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <p>${result}</p>
        <p>Human score: ${humanScore} | Computer score: ${computerScore}</p>
    `;

    if (humanScore === 5){
        document.getElementById('winner').innerText = "Congratulations! You are the winner!";
        document.getElementById('play-again').style.display = "block";
    } else if (computerScore === 5){
        document.getElementById('winner').innerText = "Game over! The computer wins!";
        document.getElementById('play-again').style.display = "block";
    }
}
//Play again after a game ends
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('results').innerHTML = "";
    document.getElementById('winner').innerHTML = "";
    document.getElementById('play-again').style.display = "none";
}