// IMPORT MODULES under test here:
import { getRandomThrow, checkResult } from '../rpsUtils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('Should return "win" if passed "paper" and "rock"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, 'win');
});

test('Should return "lose" if passed "paper" and "scissors" ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, 'lose');
});

test('Should return "draw" if passed "paper" and "paper" ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, 'draw');
});


