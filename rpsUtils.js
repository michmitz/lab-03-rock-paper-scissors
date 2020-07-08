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
        return 0;
    } else if (player === 1 && computer === 2) {
        return 2; //'Rock beats paper, player loses.'
    } else if (player === 1 && computer === 3) {
        return 1; //'Rock beats scissors, player wins.'
    } else if (player === 2 && computer === 1) {
        return 1; //'Paper beats rock, player wins.'
    } else if (player === 2 && computer === 3) {
        return 2; //'Scissors beats rock, player loses.'
    } else if (player === 3 && computer === 1) {
        return 2; //'Rock beats scissors, player loses.'
    } else if (player === 3 && computer === 2) {
        return 1; //'Scissors beats rock, player wins.'
    }
}
