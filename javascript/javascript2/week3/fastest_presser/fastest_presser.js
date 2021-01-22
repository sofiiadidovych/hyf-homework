const startGameButton = document.querySelector('#start_game_button');
const amountOfTime = document.querySelector('#amount_of_time_input');
const setTimer = document.querySelector('#set_timer');
let gameIsActive = false;

let confetti_l;
let confetti_s;

// Add eventlistener to start the game
startGameButton.addEventListener('click', () => {
    // If the game is already started ignore the click
    if (!gameIsActive) {
        const seconds = parseInt(amountOfTime.value);
        if (seconds > 0) {
            startGame();
            // Start the countdown
            intervalId = countdown(seconds);
            setTimeout( () => {
                // Stop the countdown when the game is ended
                clearInterval(intervalId);
                endGame();
            }, seconds * 1000);
        } else {
            setTimer.innerText = 'set your timer to start the game'
            console.log('set your timer');
        }
    }
});

// Number of clicks for each player
let countS = 0;
let countL = 0;

const resultL = document.querySelector('#result_l');
const resultS = document.querySelector('#result_s');
const winner = document.querySelector('#winner');

// Add function to count keypresses (s and l)
function countKeypresses(e) {
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

// Function to start the game and remove all the previous results
function startGame() {
    amountOfTime.setAttribute('readonly', true);
    countS = 0;
    countL = 0;
    resultS.innerText = ' ';
    resultL.innerText = ' ';
    setTimer.innerText = ' ';
    winner.innerText = ' ';
    // Clear confetti if they were created
    if (confetti_l != undefined) confetti_l.clear();
    if (confetti_s != undefined) confetti_s.clear();
    gameIsActive = true;
    window.addEventListener('keypress', countKeypresses);
}

// Function to end the game and let players know who is the winner
function endGame() {
    gameIsActive = false;
    amountOfTime.removeAttribute('readonly');
    window.removeEventListener('keypress', countKeypresses);

    if (countL > countS) {
        winner.innerText = 'winner is L player';
        console.log('winner is count l player');
        confetti_l = new ConfettiGenerator({ target: 'confetti_l', width: 400, height: 100 });
        confetti_l.render();
    } else if (countL < countS) {
        winner.innerText = 'winner is S player';
        console.log('winner is count s player');
        confetti_s = new ConfettiGenerator({ target: 'confetti_s', width: 400, height: 100 });
        confetti_s.render();
    } else {
        winner.innerText = 'It is a tie';
        console.log('It is a tie')
    }
    console.log('end');
}

// Countdown function to let know user how much time is left
function countdown(seconds) {
    // To start countdown imidiately without delay
    setTimer.innerText = seconds;
    seconds--;

    const intervalId = setInterval( () => {
        setTimer.innerText = seconds === 0 ? 'game over' : seconds;
        seconds--;
    }, 1000);
    return intervalId;
}