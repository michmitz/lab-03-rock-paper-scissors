// IMPORT MODULES under test here:
import { getRandomThrow, checkResult } from '../rpsUtils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('Should return "win" if passed 1 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 1;
    const computer = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, 'win');
});

test('Should return "lose" if passed 1 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 1;
    const computer = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, 'lose');
});