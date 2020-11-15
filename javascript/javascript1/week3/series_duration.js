"use strict"
const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: 'Modern Family',
      days: 4,
      hours: 8,
      minutes: 10,
    },
    {
      title: 'House MD',
      days: 5,
      hours: 9,
      minutes: 48,
    },
  ];

function logOutSeriesText() {
    const averageLifespan = 80 * 24 * 60 * 365;
    let total = 0;
    for (let i = 0; i < seriesDurations.length; i++){
        const seriesLifespanPercentage = ((wastedTimeToMin(seriesDurations[i]) * 100) / averageLifespan);
        console.log(`${seriesDurations[i].title} took ${seriesLifespanPercentage.toFixed(3)}% of my life`);
        total += seriesLifespanPercentage;
    }
    console.log(`In total that is ${total.toFixed(3)}% of my life`);
}

function wastedTimeToMin (series) {
    const wastedDays = series.days * 24 * 60;
    const wastedHours = series.hours * 60;
    const total = wastedDays + wastedHours + series.minutes;
    return total;
}

console.log(wastedTimeToMin(seriesDurations[0]));
console.log(wastedTimeToMin(seriesDurations[1]));
console.log(wastedTimeToMin(seriesDurations[2]));

logOutSeriesText();