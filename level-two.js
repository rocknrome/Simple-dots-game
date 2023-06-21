/*
 * DOTS: Level Two
 *
 */
//Global variables setup
let score = 0;
const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

//console.log(score, balls, scoreDisplay, levelWinner); // Checkpoint
//console.log(typeof score, typeof balls, typeof scoreDisplay, typeof levelWinner); // Checkpoint

// Functionality
function handleBallClick(ball) { // Function to handle the ball click event
    
    //console.log('Ball clicked:', ball); //checkpoint
}

// Event listeners
balls.forEach((ball) => {
  ball.addEventListener('click', () => {
    handleBallClick(ball);
    score += 10;
    scoreDisplay.innerText = `${score}`;

    if (score === 100) {
      levelWinner.style.opacity = '1';
    }
    //console.log('Ball clicked'); // Checkpoint
  });
});