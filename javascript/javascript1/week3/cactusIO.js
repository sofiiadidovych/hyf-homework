"use strict"
// Adding an activity
const activities = [];

function addActivity(activity, duration) {
    const act = { date: new Date(), activity: activity, duration: duration };
    activities.push(act);
}
showStatus();
addActivity('Youtube', 24);
addActivity('Homework', 30);
console.log(activities);

// Show my status

function showStatus() {
    let timeSpent = 0;
    const limitOfUsage = 60;
    for (let i = 0; i < activities.length; i++) {
        timeSpent += activities[i].duration;
    }
    if (activities.length === 0) {
        console.log('Add some activities before calling showStatus');
        return;
    }
    if (timeSpent >= limitOfUsage) {
        console.log('You have reached your limit, no more smartphoning for you!');
        return;
    }
    const numberOfActivities = activities.length;
    console.log(`You have added ${numberOfActivities} activities. They amount to ${timeSpent} min. of usage.`);
}

// Usage limit
showStatus();
addActivity('Netflix', 13);
console.log(activities);
showStatus();

// Extra feature
function getTheMostConsumingAct() {
    let maxDuration = 0;
    let act;
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].duration > maxDuration) {
            maxDuration = activities[i].duration;
            act = activities[i].activity;
        }
    }
    return act;
}

let maxDur = getTheMostConsumingAct();
console.log(maxDur);