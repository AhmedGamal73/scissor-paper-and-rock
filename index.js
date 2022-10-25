function getComputerSelection () {
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return 'sessior'
    } else if (randomNum === 1) {
        return 'rock'
    } else {
        return 'papper'
    }
}

function getUserSelection () {
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return 'sessior'
    } else if (randomNum === 1) {
        return 'rock'
    } else {
        return 'papper'
    }
}

const computerSelection = getComputerSelection () 
const playerSelection = getUserSelection ()


// Make the game rules.
function playRound(user, computer) {
    let r = 'rock' , p = 'papper' , s = 'sessior';
    user = user.toLowerCase() , computer = computer.toLowerCase()
    if (user === r && computer === p ) {
        return `You Lose! paper beats rock`
    } else if (user === r && computer === s ) {
        return `You Win! rock beats sessior`
    } else if (user === r && computer === r ) {
        return `Draw!`
    } else if (user === p && computer === p ) {
        return `Draw!`
    } else if (user === p && computer === s ) {
        return `You Lose! sessior beats paper`
    } else if (user === p && computer === r ) {
        return `You Win! paper beats rock`
    } else if (user === s && computer === s ) {
        return `Draw!`
    }  else if (user === s && computer === p ) {
        return `You Win! sessoir beats paper`
    } else if (user === s && computer === r ) {
        return `You Lose! rock beats sessior`
    }
}

const round = playRound(playerSelection, computerSelection)

// Play a five round game 
function game () {
    
    let userScore = 0 , compScore = 0;
    for (let i = 0; i < 5; i++, round) {
        computerSelection
        playerSelection
        round
            if ( round.split(' ').indexOf('Win!') != -1 ) {
                 userScore +=1
            } else if ( round.split(' ').indexOf('Draw!') != -1 ) {
                 compScore = compScore, userScore = userScore
            } else {
                 compScore +=1
            }
        } 
    console.log(`user: ${userScore}, computer: ${compScore} `)

}

game()