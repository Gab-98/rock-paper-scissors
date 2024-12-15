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
        return "Human wins!";
    }
    return "Computer wins!";    
}
//Play a round
function playRound(){
    const humanChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    if (!["rock", "paper", "scissors"].includes(humanChoice)){
        alert("Invalid choie. Please choose rock, paper or scissors.");
        return;
    }

    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    const result = determineWinner(humanChoice, computerChoice);
    alert(result);
}
//Start game
function startGame(){
    let playAgain = true;
    while (playAgain){
        playRound();
        playAgain = confirm("Want to play again?");
    }
    alert("Thank you for playing!");
}
//Start the loop
startGame();