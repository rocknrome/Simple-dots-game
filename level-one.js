/*
 * DOTS: Level One
 *
 */
//Global variables setup
let score = 0;
const ball = document.querySelector('.js-ball');
let scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

    //console.log(score, ball, scoreDisplay, levelWinner); //checkpoint
    //console.log(typeof score, typeof ball, typeof scoreDisplay, typeof levelWinner); //checkpoint
//Functionality





//Event listeners
ball.addEventListener('click', () => {
    score = score + 10;
    scoreDisplay.innerText = `${score}`;
    if (score === 100) {
        levelWinner.style.opacity = '1';
    }
    //console.log('Ball clicked'); //checkpoint
  });