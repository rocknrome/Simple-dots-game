// DOTS: Level One
let score = 0;
const ball = document.querySelector('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

// Event listener for ball clicks
ball.addEventListener('click', () => {
    score += 10;
    scoreDisplay.innerText = `${score}`;
    if (score === 100) {
        levelWinner.style.opacity = '1';
        levelWinner.style.pointerEvents = 'auto'; // Enable pointer events
    }
});
