function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
        console.log('start')
        if (delay > 0) {
            setTimeout(() => {
                console.log('After the timer');
                resolve();
            }, delay)
        } else {
            reject('Invalid value for delay');
        }
    })
}

setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    })

setTimeoutPromise(0)
    .then(() => {
        console.log('It will never be logged');
    })
    .catch(error => {
        console.log(error);
    })

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

getCurrentLocation()
    .then((position) => {
        console.log(position);
    })
    .catch((error) => {
        console.log(error);
    })