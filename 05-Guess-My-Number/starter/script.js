'use strict';

// Default values
const defaultScore = '20';
const defaultBackgroundColor = '#222';
const defaultNumberBoxWidth = '15rem';
let highScore = '0';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector('.score').textContent);

// console.log(`${secretNumber}`);

function setMessage(selector, message) {
  document.querySelector(`${selector}`).textContent = `${message}`;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Guess is of type ${typeof guess} and the value is ${guess}`);

  if (score >= 1) {
    if (!guess) {
      setMessage('.message', 'No Number!');
    } else if (guess !== secretNumber) {
      score--;
      setMessage('.score', `${score}`);
      setMessage('.message', guess > secretNumber ? 'To High!': 'To Low!');
    } else {
      // Change the background color using the DOM
      document.body.style.backgroundColor = '#60b347';
      //   document.querySelector('body').style.backgroundColor = '#60b347';

      // Change the width of the number field using the DOM
      document.querySelector('.number').style.width = '30rem';

      setMessage('.number', `${guess}`);
      setMessage('.message', `Correct Number!`);
      setMessage('.score', `${score}`);
      if (Number(highScore) == 0 || Number(highScore) < Number(score)) {
        setMessage('.highscore', `${score}`);
        highScore = `${score}`;
      }
    }
  } else {
    setMessage('.score', `${score}`);
    setMessage('.message', `You lost this round!`);
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
  setMessage('.number', `?`);
  setMessage('.message', `Start guessing...`);
  setMessage('.score', `${defaultScore}`);
  setMessage('.highscore', `${highScore}`);
  document.querySelector('.guess').value = '';
  // Treating score as an integer so we're setting it explictly
  score = Number(defaultScore);

  // Generate a new number
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
