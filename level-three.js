// DOTS: Level Three
let score = 0;
const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

// Function to handle the ball click event
function handleBallClick(increment) {
    score += increment;
    scoreDisplay.innerText = `${score}`;
    if (score >= 100) {
        levelWinner.style.opacity = '1';
    } else {
        levelWinner.style.opacity = '0';
    }
}

// Event listeners for each ball
balls.forEach((ball) => {
    const increment = parseInt(ball.dataset.increment, 10);
    ball.addEventListener('click', () => {
        handleBallClick(increment);
    });
});
