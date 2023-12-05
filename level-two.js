// DOTS: Level Two
let score = 0;
const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

// Function to handle the ball click event
function handleBallClick(ball) {
    score += 10;
    scoreDisplay.innerText = `${score}`;
    if (score === 100) {
        levelWinner.style.opacity = '1';
        levelWinner.style.pointerEvents = 'auto'; // Enable pointer events
    }
}

// Event listeners for each ball
balls.forEach((ball) => {
    ball.addEventListener('click', () => {
        handleBallClick(ball);
    });
});
