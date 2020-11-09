function getEventWeekday(days) {
    if (days < 0){
        alert('Days can not be negative! Be positive :)');
        return '';
    }
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const d = new Date();
    const todayIndex = d.getDay();
    const futureDateIndex = (todayIndex + days) % weekDays.length;
    const dayX = weekDays[futureDateIndex];
    return dayX;
}
console.log(getEventWeekday(1));
console.log(getEventWeekday(-2));
console.log(getEventWeekday(17));
console.log(getEventWeekday(0));