let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.random()

    if (computerChoice <= 0.3) {
        return computerChoice
    }
    else if (computerChoice > 0.3 && computerChoice < 0.6) {
        return computerChoice
    }
    else {
        return computerChoice
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, paper or scissors?')

    if (humanChoice.toLowerCase() === 'paper') {
        return 0
    }
    else if (humanChoice.toLowerCase() === 'rock') {
        return 0.3
    }
    else if (humanChoice.toLowerCase() === 'scissors') {
        return 'scissors'
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return alert('No winner - No looser! Try again')
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)