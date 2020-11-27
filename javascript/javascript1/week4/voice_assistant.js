'use strict'
let name = '';
let todoList = [];
let map = [
    { country: 'Denmark', capital: 'Copenhagen' },
    { country: 'Ukraine', capital: 'Kyiv' },
    { country: 'Italy', capital: 'Rome' },
    { country: 'Poland', capital: 'Warsaw' },
    { country: 'Belarus', capital: 'Minsk' },
    { country: 'Turkey', capital: 'Istambul' },
]

function getReply(command) {
    if (command.startsWith('Hello my name is')) {
        const startIndex = command.lastIndexOf(' ');
        const newName = command.slice(startIndex + 1, command.length);
        if (name === newName) {
            return 'We are already friends, ' + name;
        } else {
            name = newName;
            return 'Nice to meet you ' + name;
        }
    } else if (command === 'What is my name') {
        if (name === '') {
            return "I don't know, we haven't met yet";
        } else {
            return `Your name is: ${name}`;
        }
    } else if (command.startsWith('Add') && command.endsWith('to my todo')) {
        const todoStartIndex = command.indexOf(' ');
        const todoEndIndex = command.indexOf('to my todo');
        const action = command.slice(todoStartIndex, todoEndIndex).trim();
        todoList.push(action);
        return `${action} added to your todo`;
    } else if (command.startsWith('Remove') && command.endsWith('from my todo')) {
        const todoStartIndex = command.indexOf(' ');
        const todoEndIndex = command.indexOf('from my todo');
        const action = command.slice(todoStartIndex, todoEndIndex).trim();
        for (let i = 0; i < todoList.length; i++) {
            if (action === todoList[i]) {
                todoList.splice(i, 1);
                return `Removed ${action} from your todo`;
            }
        }
        return `${action} you want to remove is not on your list`;
    } else if (command === 'What is on my todo?') {
        const list = todoList.join(', ');
        return `You have ${todoList.length} todos - ${list}`;
    } else if (command === 'What day is it today?') {
        const date = new Date();
        const p = date.toDateString();
        return `Today is ${p}`;
        // Extra command: countries and their capitals
    } else if (command.startsWith('What is the capital of ')) {
        const startIndex = 'What is the capital of '.length;
        const endIndex = command.indexOf('?');
        const country = command.slice(startIndex, endIndex);
        for (let i = 0; i < map.length; i++) {
            if (map[i].country === country) {
               return `The capital of ${map[i].country} is ${map[i].capital}`;
            }
        }
        return `I don't know what is the capital of ${country}`;
    } else if (command.startsWith('what is')) {
        const commandWords = command.split(' ');
        const number1 = parseInt(commandWords[2]);
        const number2 = parseInt(commandWords[4]);
        const operation = commandWords[3];
            if (number1 && number2) {
                switch (operation) {
                    case "+":
                        return number1 + number2;
                    case "-":
                        return number1 - number2;
                    case "*":
                        return number1 * number2;
                    case "/":
                        return number1 / number2;
                }
            } else {
                return "It`s not a number. Tell me a number"
            }
    } else if (command.startsWith('Set a timer for')) {
        const startIndex = 'Set a timer for'.length;
        const lastIndex = command.indexOf('minutes');
        const time = command.slice(startIndex, lastIndex).trim();
        const timeInMs = time * 60 *1000;
        setTimeout(timerIsUp, timeInMs);
        return `Timer is set for ${time} minutes`;
        // Extra command: flip the coin
    } else if (command === 'Flip the coin') {
        const rand = Math.random();
        if (rand >= 0.5) {
            return 'Heads';
        } else {
            return 'Tails';
        }
    } else {
        return 'Are you sure you asked me something?'
    }
}

function timerIsUp() {
    console.log('Timer done');
}
// Test 'What is my name' command
console.log(getReply("What is my name"));
console.log(getReply("Hello my name is Lola"));
console.log(getReply("What is my name"));
console.log(getReply("Hello my name is Lola"));
// Try to change the name
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
// Add todos to the list
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
// Try to remove the todo which is not on the list
console.log(getReply("Remove cooking from my todo"));
// Remove todo from the list
console.log(getReply("Remove singing in the shower from my todo"));
// Check what is on my list
console.log(getReply("What is on my todo?"));
// Test date command
console.log(getReply("What day is it today?"));
// Test simple math command
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 3 - 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("what is 8 / 4"));
// Set a timer in minutes
console.log(getReply("Set a timer for 1 minutes"));
// Extra command: search for capital in the array
console.log(getReply("What is the capital of Ukraine?"));
// Search for capital which is not in the array
console.log(getReply("What is the capital of Sweden?"));
// Extra command: flip the coin
console.log(getReply('Flip the coin'));