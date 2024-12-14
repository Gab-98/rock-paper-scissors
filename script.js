function playGame () {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        const choices = ["rock", "paper", "scissors"]
        const randIndex = Math.floor(Math.random() * choices.length)
        const computerChoice = choices[randIndex].toLowerCase()
        const humanChoice = prompt("Type rock, paper or scissors").toLowerCase()

        console.log(`Human played: ${humanChoice}`) 
        console.log(`Computer played: ${computerChoice}`)

        if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {                       
            humanScore++
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {            
            computerScore++
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {            
            humanScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++
        } else {
            prompt(`Invalid input! Refresh the page!!`)
        }
        console.log(`Human: ${humanScore} Computer: ${computerScore}`)

        if (humanScore === 3 || computerScore === 3) {
            break
        }
    }
    let gameResult = `Final Result: `
    if (humanScore > computerScore ) {
        gameResult += 'Human Wins!'
    } else if (computerScore > humanScore ) {
        gameResult += 'Computer Wins!'
    } else {
        gameResult += `It's a tie!`
    }
    console.log(gameResult)
}
playGame()