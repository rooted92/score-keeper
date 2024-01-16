const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score');
}

const reset = document.querySelector('#reset');
const levels = document.querySelector('#levels');
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.disabled = true;
            opponent.disabled = true;
        }
        player.display.textContent = player.score;
    }
};

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

levels.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
});

reset.addEventListener('click', resetGame);

function resetGame() {
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}