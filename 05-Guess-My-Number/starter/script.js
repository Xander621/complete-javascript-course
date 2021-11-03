'use strict';

// Default values
const defaultScore = '20';
const defaultBackgroundColor = '#222';
const defaultNumberBoxWidth = '15rem';
let highScore = '0';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector('.score').textContent);

// console.log(`${secretNumber}`);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Guess is of type ${typeof guess} and the value is ${guess}`);

  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!';
    } else if (guess < secretNumber) {
      score--;
      document.querySelector('.score').textContent = `${score}`;
      document.querySelector('.message').textContent = 'To Low!';
    } else if (guess > secretNumber) {
      score--;
      document.querySelector('.score').textContent = `${score}`;
      document.querySelector('.message').textContent = 'To High!';
    } else {
      // Change the background color using the DOM
      document.body.style.backgroundColor = '#60b347';
      //   document.querySelector('body').style.backgroundColor = '#60b347';

      // Change the width of the number field using the DOM
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = `${guess}`;

      document.querySelector('.message').textContent = `Correct Number!`;
      document.querySelector('.score').textContent = `${score}`;
      document.querySelector('.highscore').textContent = `${score}`;
      //   console.log(`Score is ${score}`);
      if (Number(highScore) == 0 || Number(highScore) < Number(score)) {
        highScore = `${score}`;
      }
    }
  } else {
    score--;
    document.querySelector('.score').textContent = `${score}`;
    document.querySelector('.message').textContent = `You lost this round!`;
  }
});

/**
 * Coding Challenge #1
 *
 * Implement a game reset functionality, so that the player can make a new guess.
 * Here is how:
 * 1. Select the element with the 'again' class and attach a click event
 *    handler.
 * 2. in the handler function, restore the inital values of the score and
 *    number variables
 * 3. Restore the initial conditions of the message, number and number variables
 * 4. Also restore the original background color (#222) and number width (15rem)
 */
document.querySelector('.again').addEventListener('click', () => {
  // Reset initial game values
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = `${defaultNumberBoxWidth}`;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = `${defaultScore}`;
  document.querySelector('.highscore').textContent = `${highScore}`;
  // Treating score as an integer so we're setting it explictly
  score = Number(defaultScore);

  // Generate a new number
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
