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
        return 'lose';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win'; 
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose'; 
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win'; 
    }
}
