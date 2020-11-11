const class07Students = [];
const queenName = 'Margrethe II';
function addStudentToClass(studentName) {
  if (studentName === '') {
    console.log('Please enter a name of a student');
  } else if (class07Students.includes(studentName)) {
    console.log('Student ' + studentName + ' is already in the class');
  } else if (class07Students.length <= 5 || studentName === queenName) {
    class07Students.push(studentName);
  } else {
    console.log('Cannot add more students to class 07');
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}
// Add some students
addStudentToClass('Max');
console.log(class07Students);
addStudentToClass('Sofiia')
console.log(class07Students);
// Add a student that is already in the class
addStudentToClass('Sofiia');
console.log(class07Students);
addStudentToClass('Katya');
console.log(class07Students);
addStudentToClass('Katya2');
console.log(class07Students);
addStudentToClass('Katya3');
console.log(class07Students);
addStudentToClass('Katya4');
console.log(class07Students);
// Add more students than there is space for
addStudentToClass('Katya5');
console.log(class07Students);
// Add Queen to the full class
addStudentToClass(queenName);
console.log(class07Students);
// Call the function to get the number of students in the class
console.log(getNumberOfStudents());