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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        humanScore += 1;
        computerScore += 1;
        return alert('No winner - No looser! Try again.')
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        return alert('You are winner!' + humanChoice.replace(/^./, humanChoice[0].toUpperCase()) + ' beats ' + computerChoice.replace(/^./, computerChoice[0].toUpperCase()) + '!'), humanScore
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        return alert('You are winner!' + humanChoice.replace(/^./, humanChoice[0].toUpperCase()) + ' beats ' + computerChoice.replace(/^./, computerChoice[0].toUpperCase()) + '!'), humanScore
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        return alert('You are winner!' + humanChoice.replace(/^./, humanChoice[0].toUpperCase()) + ' beats ' + computerChoice.replace(/^./, computerChoice[0].toUpperCase()) + '!'), humanScore
    }
    else {
        computerScore += 1;
        return alert('You loose! ' + computerChoice.replace(/^./, computerChoice[0].toUpperCase()) + ' beats ' + humanChoice.replace(/^./, humanChoice[0].toUpperCase()) + '!'), computerScore
    }
}


// console.log(humanScore)
// console.log(computerScore)


// playRound(humanSelection, computerSelection)
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice()
//         const computerSelection = getComputerChoice()
//         const currentRound = playRound(humanSelection, computerSelection)
//         console.log(currentRound)
//     }
// }
// playGame()


function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr)
}

const button = document.querySelector(".container-buttons")

function clickButton (event) {
    alert('rock')
    console.log(event.target.value)
}

button.addEventListener("click", getHumanChoice)
