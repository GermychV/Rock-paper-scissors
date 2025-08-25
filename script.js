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
        return alert('No winner - No looser! Try again.')
    }
    else if ((humanChoice === 'rock' && computerSelection === 'scissors') ||
            (humanChoice === 'paper' && computerSelection === 'rock') ||
            (humanChoice === 'scissors' && computerSelection === 'paper')) {
        humanScore ++;
        return alert('You are winner! ' + capitalizeFirstLetter(humanChoice) + ' beats ' + capitalizeFirstLetter(computerSelection) + '!'), humanScore
    }
    else {
        computerScore ++;
        return alert('You loose! ' + capitalizeFirstLetter(computerSelection) + ' beats ' + capitalizeFirstLetter(humanChoice)), computerScore
    }
}

const button = document.querySelector(".container-buttons")
button.addEventListener("click", playRound)

function capitalizeFirstLetter (String) {
    return String.replace(/^./, String[0].toUpperCase())
}
