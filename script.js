let humanScore = 0
let computerScore = 0
let roundWinner = ''

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

function getHumanChoice(event) {
    let humanChoice = event.target.id

    if (humanChoice === 'paper') {
        return 'paper'
    }
    else if (humanChoice === 'rock') {
        return 'rock'
    }
    else if (humanChoice === 'scissors') {
        return 'scissors'
    }
}

function playRound(humanChoice) {
    const computerSelection = getComputerChoice()
    humanChoice = String(humanChoice.target.id)
    if (humanChoice === computerSelection) {
        return roundWinner = 'tie'
    }
    else if ((humanChoice === 'rock' && computerSelection === 'scissors') ||
            (humanChoice === 'paper' && computerSelection === 'rock') ||
            (humanChoice === 'scissors' && computerSelection === 'paper')) {
        humanScore ++;
    }
    else {
        computerScore ++;
    }
    updateScore(humanScore, computerScore)
}

// alert('You are winner! ' + capitalizeFirstLetter(humanChoice) + ' beats ' + capitalizeFirstLetter(computerSelection) + '!')
// alert('You loose! ' + capitalizeFirstLetter(computerSelection) + ' beats ' + capitalizeFirstLetter(humanChoice))

const button = document.querySelector(".container-buttons")
const playerScore = document.querySelector('.playerScore')
const computerSc = document.querySelector('.computerScore')
button.addEventListener("click", playRound)

function updateScore() {
    playerScore.textContent = `Player: ${humanScore}`
    computerSc.textContent = `Computer: ${computerScore}`
}

function capitalizeFirstLetter (String) {
    return String.replace(/^./, String[0].toUpperCase())
}
