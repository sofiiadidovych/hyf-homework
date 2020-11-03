function getEventWeekday(days) {
    if (days < 0){
        alert('Days can not be negative! Be positive :)');
        return '';
    }
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date();
    let todayIndex = d.getDay();
    let futureDateIndex = (todayIndex + days) % weekDays.length;
    let dayX = weekDays[futureDateIndex];
    return dayX;
}
console.log(getEventWeekday(1));
console.log(getEventWeekday(-2));
console.log(getEventWeekday(17));
console.log(getEventWeekday(0));