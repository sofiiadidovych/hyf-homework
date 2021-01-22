// 1.Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
window.addEventListener('load', () => {
    setTimeout(() => {
        console.log('Called after 2.5 seconds');
    }, 2500);
});

// 2.Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.
function logOutString(delay, stringTolog) {
    setTimeout(() => {
        console.log(stringTolog);
    }, delay * 1000);
}
logOutString(3, "This string loaded after 3 seconds");
logOutString(5, "This string loaded after 5 seconds");

// 3.Create a button in html. When clicking this button, use the function you created in the
// previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const delayButton = document.querySelector('#delay_button');

delayButton.addEventListener('click', () => {
    logOutString(5, 'Called after 5 seconds')
});

// 4.Create two functions and assign them to two different variables.
// One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction.
// The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.

const earthLogger = function () {
    console.log('Earth');
};
const saturnLogger = function () {
    console.log('Saturn');
};

const planetLogFunction = function (planetLogger) {
    planetLogger();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5.Create a button with the text called "Log location".
// When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
let map;
const locationElement = document.querySelector('#location');
function success(pos) {
    const crd = pos.coords;
    const center = {
        lat: crd.latitude,
        lng: crd.longitude
    };
    map.setCenter(center);
    locationElement.innerHTML = `<p>This is the latitude ${crd.latitude}</p>`;
    locationElement.innerHTML += `<p>This is the longitude ${crd.longitude}</p>`;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    locationElement.innerHTML = `ERROR(${err.code}): ${err.message}`;
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const logLocationButton = document.querySelector('#log_button');
logLocationButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, error);
});

// 6.Optional Now show that location on a map using fx the Google maps api
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 20,
    });
}
// 7.Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.
// Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}
const logOut = function () {
    console.log('Hi, I am here');
}
const countToTen = function () {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
const soundYoda = function (str) {
    const reversed = str.split(' ').reverse();
    const yoda = reversed.join(' ');
    console.log(yoda);
}
runAfterDelay(6, logOut);
runAfterDelay(7, countToTen);
runAfterDelay(8, () => soundYoda('I am your father'));

// 8.Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
// If a double click has been detected, log out the text: "double click!"

let previousClick = 0;

window.addEventListener('click', () => {
   const click = Date.now();
   if (click - previousClick < 500) {
       console.log('double click detected!');
       return;
   }
   previousClick = click;
})

// 9.Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
// logFunnyJoke - function and logBadJoke - function.
// If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke.
// And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}
function logFunnyJoke() {
    const funnyJokes = [
        "Why do JavaScripters wear glasses? Because they don't C#",
        "Don't trust javascript programmers: All they do is promises but they never callback.",
        "Why do Javascript developers prefer dark mode? Because light attracts bugs!"
    ]
    console.log(funnyJokes[Math.floor(Math.random() * funnyJokes.length)]);
}
function logBadJoke() {
    const badJokes = [
        "One question on Reddit: Redditors that speak multiple languages, what languages do you speakin your dreams? A: JavaScript Comment: He said dreams, not nightmares",
        "Want to hear a JavaScript joke? I'll callback later.",
        "Why do programmers always mix up Halloween and Christmas? A.Because Oct 31 equals Dec 25."
    ]
    console.log(badJokes[Math.floor(Math.random() * badJokes.length)])
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);