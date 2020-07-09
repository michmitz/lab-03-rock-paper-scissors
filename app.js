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