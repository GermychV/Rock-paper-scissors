let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.random()

    if (computerChoice <= 0.3) {
        return 'paper'
    }
    else if (computerChoice > 0.3 && computerChoice < 0.6) {
        return 'rock'
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, paper or scissors?')

    if (humanChoice.toLowerCase() === 'paper') {
        return 'paper'
    }
    else if (humanChoice.toLowerCase() === 'rock') {
        return 'rock'
    }
    else if (humanChoice.toLowerCase() === 'scissors') {
        return 'scissors'
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)

    if (humanChoice === computerChoice) {
        return alert('No winner - No looser! Try again.')
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return alert('Congratulation! You are winner!')
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return alert('Congratulation! You are winner!')
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        return alert('Congratulation! You are winner!')
    }
    else {
        return alert('You loose! ' + computerChoice.replace(/^./, computerChoice[0].toUpperCase()) + ' beats ' + humanChoice.replace(/^./, humanChoice[0].toUpperCase()) + '!')
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)