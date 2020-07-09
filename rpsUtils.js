export function getRandomThrow() {
    const computerResult = Math.ceil(Math.random() * 3);
    
    if (computerResult === 1) {
        return 'rock';
    } else if (computerResult === 2) {
        return 'paper';
    } else if (computerResult === 3) {
        return 'scissors';
    }

}

export function checkResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose'; //'Paper beats rock, player loses.'
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win'; //'Rock beats scissors, player wins.'
    } else if (player === 'paper' && computer === 'rock') {
        return 'win'; //'Paper beats rock, player wins.'
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose'; //'Scissors beats rock, player loses.'
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose'; //'Rock beats scissors, player loses.'
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win'; //'Scissors beats rock, player wins.'
    }
}



/*export function checkResult(player, computer) {
    if (player === computer) {
        return 'draw'
    } else if (player === 1 && computer === 2) {
        return 'lose' //'Rock beats paper, player loses.'
    } else if (player === 1 && computer === 3) {
        return 'win' //'Rock beats scissors, player wins.'
    } else if (player === 2 && computer === 1) {
        return 'win' //'Paper beats rock, player wins.'
    } else if (player === 2 && computer === 3) {
        return 'lose' //'Scissors beats rock, player loses.'
    } else if (player === 3 && computer === 1) {
        return 'lose' //'Rock beats scissors, player loses.'
    } else if (player === 3 && computer === 2) {
        return 'win' //'Scissors beats rock, player wins.'
    }
}*/