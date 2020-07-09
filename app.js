// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './rpsUtils.js';


const button = document.querySelector('#button');
console.log('Button', button);
const winLossDisplay = document.querySelector('#display-result');
console.log('result display', winLossDisplay);
const guessesDisplay = document.querySelector('#guesses-display');
console.log('guesses display', guessesDisplay);
const winsDisplay = document.querySelector('#wins-display');
console.log('wins display', winsDisplay);
const lossesDisplay = document.querySelector('#losses-display');
console.log('losses display', lossesDisplay);
const drawsDisplay = document.querySelector('#draws-display');
console.log('draws display', drawsDisplay);
// initialize state

let wins = 0;
let draws = 0;
let guesses = 0;

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    guesses++;
    const computer = getRandomThrow();
    const checkedRadio = document.querySelector('input:checked');
    console.log('checkedRadio', checkedRadio);
    const playerGuess = checkedRadio.value;
    console.log('playerGuess', playerGuess);

    const winsAndDrawsData = wins + draws;
    const lossData = guesses - winsAndDrawsData;
    

    const result = checkResult(playerGuess, computer);

    if (result === 'draw') {
        draws++;
        console.log('draw');
        winLossDisplay.textContent = 'Draw! Try again';
    }
    
    if (result === 'win') {
        wins++;
        console.log('win');
        winLossDisplay.textContent = 'You won!';
    }

    if (result === 'lose') {
        console.log('lose');
        winLossDisplay.textContent = 'You lost! Try again.';
    }

    guessesDisplay.textContent = `Guesses: ${guesses}`;
    winsDisplay.textContent = `Wins: ${wins}`;
    lossesDisplay.textContent = `Losses: ${lossData}`;
    drawsDisplay.textContent = `Draws: ${draws}`;
    
});

/* wins.textContent = `Wins: ${winData}`;
    losses.textContent = `Losses: ${lossData}`;
    draws.textContent = `Draws: ${drawData}` */




/*export function getRandomThrow() {
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

}*/