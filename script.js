function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1
    const computerChoice = 'Computer played: '

    if (randomNumber === 1) {
        return computerChoice + 'ROCK' 
    } else if (randomNumber === 2) {
        return computerChoice + 'PAPER'
    } else if (randomNumber === 3) {
        return computerChoice + 'SCISSOR'
    }
}

function getHumanChoice(){
    let humanChoice = prompt('What will you play?')
    const choice1 = 'rock'
    const choice2 = 'paper'
    const choice3 = 'scissor'

    if (humanChoice.toUpperCase() == choice1.toUpperCase()) {
        return 'Human played: ' + humanChoice.toUpperCase()
    } else if (humanChoice.toUpperCase() == choice2.toUpperCase()) {
        return 'Human played: ' + humanChoice.toUpperCase()
    } else if (humanChoice.toUpperCase() == choice3.toUpperCase()) {
        return 'Human played: ' + humanChoice.toUpperCase()
    } else {
        return 'Invalid choice! Please chooose between rock, paper or scissor.'
    }
}
console.log(getHumanChoice())
console.log(getComputerChoice())