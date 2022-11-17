'use strict';
// Selecting elements
const ply0El = document.querySelector('.player--0');
const ply1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const cur0El = document.getElementById('current--0');
const cur1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
let curSco, actPly, playing, scores;
const init = function () {
  scores = [0, 0];
  curSco = 0;
  actPly = 0;
  playing = true;

  cur0El.textContent = 0;
  cur1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  ply0El.classList.remove('player--winner');
  ply1El.classList.remove('player--winner');
  ply0El.classList.add('player--active');
  ply1El.classList.remove('player--active');
};

init();

const switchPly = function () {
  document.getElementById(`current--${actPly}`).textContent = 0;

  // if it's 1 the switch player
  actPly = actPly === 0 ? 1 : 0;
  curSco = 0;
  ply0El.classList.toggle('player--active');
  ply1El.classList.toggle('player--active');
};

// Rolling Dice Funtionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check the dice
    if (dice !== 1) {
      // Add dice to the current score
      curSco += dice;
      document.getElementById(`current--${actPly}`).textContent = curSco;
    } else {
      switchPly();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player score
    scores[actPly] += curSco;
    document.getElementById(`score--${actPly}`).textContent = scores[actPly];
    // 2. check if scores >= 100 if yes win the curPly
    // else switch the player
    if (scores[actPly] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${actPly}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${actPly}`)
        .classList.remove('player--active');
    } else switchPly();
  }
});

btnNew.addEventListener('click', init);
