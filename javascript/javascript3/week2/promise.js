function resolveWithDelay(resolveAfter) {
    return new Promise(resolve => {
        console.log('start')
        setTimeout(() => {
            console.log('After the timer');
            resolve();
        }, resolveAfter * 1000)
    })
}

resolveWithDelay(3).then(() => {
    console.log('I am called asynchronously with then');
})

async function getThePromise(resolveAfter) {
    await resolveWithDelay(resolveAfter);
    console.log('I am called asynchronously with async/await');
}

getThePromise(4);
