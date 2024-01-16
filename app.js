const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');

let playerOneScore = 0;
let playerTwoScore = 0;

let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        playerOneScore++;
        if (playerOneScore === winningScore) {
            isGameOver = true;
        }
        p1Score.textContent = playerOneScore;
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        playerTwoScore++;
        if (playerTwoScore === winningScore) {
            isGameOver = true;
        }
        p2Score.textContent = playerTwoScore;
    }
});

reset.addEventListener('click', resetGame);

function resetGame() {
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
}