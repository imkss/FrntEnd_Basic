'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const disMes = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    disMes('⚠ No number!');
  } else if (guess === secretNumber) {
    disMes('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#003B00';
    document.querySelector('.number').style.width = '30rem';

    /* I want to introduce a funtionality of showing the replay button ASA the game ended, it inherit all functionality of again class*/ 

    // document.querySelector('.check').textContent = '🔁 Replay'; 


    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      disMes('📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      disMes('💩 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      disMes('📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      disMes('💩 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  disMes('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#8d0101';
  document.querySelector('.number').style.width = '15rem';
});
