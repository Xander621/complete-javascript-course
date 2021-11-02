'use strict';

// // This is a read from the HTML document message class
// console.log(document.querySelector('.message').textContent);

// // Here we are manipulating the DOM node for message by setting a new string
// document.querySelector('.message').textContent = 'Correct Number!';

// // If we log from again we'll see the new string
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// When we click on the 'Check' button element grab the value
// from guess and log it.
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(`Value is ${document.querySelector('.guess').value}`);
// });

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let count = Number(document.querySelector('.score').textContent);

console.log(`${secretNumber}`);
console.log(`Score: ${count}`);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Guess is of type ${typeof guess} and the value is ${guess}`);

  if (count > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number!';
    } else if (guess < secretNumber) {
      count--;
      document.querySelector('.score').textContent = `${count}`;
      document.querySelector('.message').textContent = 'Guess to Low!';
    } else if (guess > secretNumber) {
      count--;
      document.querySelector('.score').textContent = `${count}`;
      document.querySelector('.message').textContent = 'Guess to High!';
    } else {
      document.querySelector('.message').textContent = `Guess correct!`;
      document.querySelector('.score').textContent = `${count}`;
      document.querySelector('.highscore').textContent = `${count}`;
      console.log(`Score is ${count}`);
    }
  } else {
    document.querySelector('.message').textContent = `You Lose.`;
  }
});
