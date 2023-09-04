'use strict';
let secretnumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (guess === 0) {
    const result = (document.querySelector('.message').textContent =
      'No Number!');
    console.log(result);
  } else if (guess === secretnumber) {
    const result = (document.querySelector('.message').textContent =
      '🍑 Congratulations');
    document.querySelector('.number').textContent = secretnumber;
    console.log(result);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (secretnumber > guess) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Number too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❤️‍🔥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Number too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❤️‍🔥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
