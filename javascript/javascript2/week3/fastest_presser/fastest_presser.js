const startGameButton = document.querySelector('#start_game_button');
const amountOfTime = document.querySelector('#amount_of_time_input');
const setTimer = document.querySelector('#set_timer');
let gameIsActive = false;

let confetti_l;
let confetti_s;

startGameButton.addEventListener('click', () => {
    if (!gameIsActive) {
        const seconds = parseInt(amountOfTime.value);
        if (seconds > 0) {
            startGame();
            intervalId = countdown(seconds);
            setTimeout( () => {
                clearInterval(intervalId);
                endGame();
            }, seconds * 1000);
        } else {
            setTimer.innerText = 'set your timer to start the game'
            console.log('set your timer');
        }
    }
});

let countS = 0;
let countL = 0;

let resultL = document.querySelector('#result_l');
let resultS = document.querySelector('#result_s');

function countKeypresses(e) {
    console.log(e.key)
    if (e.key === 's') {
        countS++;
        resultS.innerText = countS;
        console.log(countS);
    } else if (e.key === 'l') {
        countL++;
        resultL.innerText = countL;
        console.log(countL);
    }
}

function startGame() {
    countS = 0;
    countL = 0;
    resultS.innerText = ' ';
    resultL.innerText = ' ';
    setTimer.innerText = ' ';
    winner.innerText = ' ';
    if (confetti_l != undefined) confetti_l.clear();
    if (confetti_s != undefined) confetti_s.clear();
    gameIsActive = true;
    window.addEventListener('keypress', countKeypresses);
}

function endGame() {
    gameIsActive = false;
    let winner = document.querySelector('#winner');
    window.removeEventListener('keypress', countKeypresses);
    if (countL > countS) {
        winner.innerText = 'winner is L player';
        console.log('winner is count l player');
        confetti_l = new ConfettiGenerator({ target: 'confetti_l', width: 600, height: 100 });
        confetti_l.render();
    } else if (countL < countS) {
        winner.innerText = 'winner is S player';
        console.log('winner is count s player');
        confetti_s = new ConfettiGenerator({ target: 'confetti_s', width: 600, height: 100 });
        confetti_s.render();
    } else {
        winner.innerText = 'It is a tie';
        console.log('It is a tie')
    }
    console.log('end');
}

function countdown(seconds) {
    setTimer.innerText = seconds;
    seconds--;

    const intervalId = setInterval( () => {
        setTimer.innerText = seconds === 0 ? 'game over': seconds;
        seconds--;
    }, 1000);
    return intervalId;
}
