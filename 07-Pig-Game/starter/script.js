'use strict';

// Setup Game
// Grabbing by Class
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const players = document.querySelectorAll('.player');

// Grabbing by ID
const cur0El = document.querySelector('#current--0');
const cur1El = document.querySelector('#current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

// Global variables
let looseScore, playing;
const gameWinScore = 100;

// Starting conditions
diceEl.classList.add('hidden');
looseScore = 0;
playing = true;

function resetGame() {
  playing = true;
  diceEl.classList.add('hidden');
  resetCurrentScores();
  score0El.textContent = '0';
  score1El.textContent = '0';
  // reset the winning player
  for (let i = 0; i <= 1; i++) {
    if (players[i].classList.contains('player--winner')) {
      players[i].classList.remove('player--winner');
    }
  }
  // Set player 1 as default start
  if (getActivePlayer() != 0) toggleActivePlayer();
}

function resetCurrentScores() {
  cur0El.textContent = '0';
  cur1El.textContent = '0';
  looseScore = 0;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateNextRoll() {
  const next = getRandomInt(6) + 1; // don't want zero

  // update the dice png
  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  diceEl.src = `../dice-${next}.png`;
  return next;
}

function computeScore(roll) {
  if (roll !== 1) {
    looseScore += roll;
  } else {
    // lose current score
    toggleActivePlayer();
  }
  document.querySelector(`#current--${getActivePlayer()}`).textContent = `${looseScore}`;
}

function getActivePlayer() {
  for (let i = 0; i <= players.length; i++) {
    if (players[i].classList.contains('player--active')) return i;
  }
}

function toggleActivePlayer() {
  players[0].classList.toggle('player--active');
  players[1].classList.toggle('player--active');
  // Clear the current score counters
  resetCurrentScores();
}

function setActivePlayerScore() {
  const activeId = getActivePlayer();
  let currentScore = Number(document.querySelector(`#score--${activeId}`).textContent);
  currentScore += looseScore;
  document.querySelector(`#score--${activeId}`).textContent = `${currentScore}`;
  if (currentScore >= gameWinScore) {
    console.log(`Player ${activeId + 1} wins!`);
    diceEl.classList.add('hidden');
    players[activeId].classList.add('player--winner');
    playing = false;
  }
}

btnNewGame.addEventListener('click', () => {
  resetGame();
});

btnRollDice.addEventListener('click', () => {
  if (playing) {
    computeScore(generateNextRoll());
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    setActivePlayerScore();
    toggleActivePlayer();
  }
});
