function resolveWithDelay(resolveAfter) {
    return new Promise(resolve => {
        console.log('start')
        setTimeout(() => {
            console.log('After the timer');
            resolve();
        }, resolveAfter * 1000)
    })
}

resolveWithDelay(2)
    .then(() => {
        console.log('I am called asynchronously with then');
    })

async function getThePromise(resolveAfter) {
    await resolveWithDelay(resolveAfter);
    console.log('I am called asynchronously with async/await');
}

getThePromise(4);

// Fetching and waiting
// 3 steps with .then
resolveWithDelay(3)
    .then(() => {
        fetch('https://yesno.wtf/api')
            .then(response => response.json())
            .then(data => {
                console.log(data.answer);
            })
    })

// 3 steps with async/await
async function makeThreeSteps() {
    await resolveWithDelay(5);
    const response = await fetch('https://yesno.wtf/api');
    const data = await response.json();
    console.log(data.answer);
}
makeThreeSteps();