"use strict"

// Save a note
const notes = [];

function saveNote(content, id) {
    const note = { content: content, id: id }
    notes.push(note);
}
saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
saveNote('Cook something for dinner', 3);
saveNote('Complete HYF homework', 5);
console.log(notes);

// Get a note
function getNote(id) {
    if (id === NaN || id === null) {
        console.log('error');
        return;
    }
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
}
const firstNote = getNote(1);
console.log(firstNote);

// Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        const content = notes[i].content;
        const id = notes[i].id;
        console.log(`The note with ${id}, has the following note text: "${content}".`);
    }
}
logOutNotesFormatted();

// Unique feature
function deleteNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (id === notes[i].id) {
            notes.splice(i,1);
        }
    }
}
deleteNote(1);
deleteNote(2);
console.log(notes);