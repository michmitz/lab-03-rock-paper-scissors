// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './rpsUtils.js';


const button = document.querySelector('#button');
const winLossDisplay = document.querySelector('#display-result');
const guessesDisplay = document.querySelector('#guesses-display');
const winsDisplay = document.querySelector('#wins-display');
const lossesDisplay = document.querySelector('#losses-display');
const drawsDisplay = document.querySelector('#draws-display');

let wins = 0;
let draws = 0;
let guesses = 0;

button.addEventListener('click', () => {
    guesses++;
    const computer = getRandomThrow();
    const checkedRadio = document.querySelector('input:checked');
    const playerGuess = checkedRadio.value;

    const winsAndDrawsData = wins + draws;
    const lossData = guesses - winsAndDrawsData;

    const result = checkResult(playerGuess, computer);

    if (result === 'draw') {
        draws++;
        winLossDisplay.textContent = 'Draw! Try again';
    } else if (result === 'win') {
        wins++;
        winLossDisplay.textContent = 'You won!';
    } else if (result === 'lose') {
        winLossDisplay.textContent = 'You lost! Try again.';
    }

    guessesDisplay.textContent = `Guesses: ${guesses}`;
    winsDisplay.textContent = `Wins: ${wins}`;
    lossesDisplay.textContent = `Losses: ${lossData}`;
    drawsDisplay.textContent = `Draws: ${draws}`;

});