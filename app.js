// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './rpsUtils.js';


const button = document.querySelector('#button');
console.log('Button', button);
const winLossDisplay = document.querySelector('#display-result');
console.log('win display', winLossDisplay);
const statsDisplay = document.querySelector('#display-stats');
console.log('stat display', statsDisplay);

// initialize state

let wins = 0;
let draws = 0;
let guesses = 0;

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    guesses++;
    const computer = getRandomThrow();
    const compareGuesses = checkResult(player, computer);
    const checkedRadio = document.querySelector('#input-checked');
    


});




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
