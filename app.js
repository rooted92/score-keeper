const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }


});

p2Button.addEventListener('click', function () {
    if(!isGameOver){
        p2Score++;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
});

winningScoreSelect.addEventListener('change', function(){
    // this is referring to the value of winningScoreSelect
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);


// this logic use to be inside of the resetButton addEventListener but we made it it's own function now resetButton passes this in as reference and also now when we want to change the play to top score this function is also called to reset the game.
function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}
