let randomNumber = Math.floor(Math.random() * 3) + 1

function getComputerChoice(){
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

    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissor'){
        humanChoice = prompt('Only write rock, paper or scissor. Also, write in lower case only!')
    }

    return 'Human played: ' + humanChoice.toUpperCase()
}
console.log(getHumanChoice())
console.log(getComputerChoice())