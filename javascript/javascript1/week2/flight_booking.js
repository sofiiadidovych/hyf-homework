// Function with tree parameters (if useFormalName is missing then it is false by default)
function getFullName(firstname, surname, useFormalName = false) {
    if (firstname === "" || surname === "") {
        alert('Please enter your first name and surname');
        return "";
    }
    if (useFormalName) {
        return 'Lord ' + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}
let fullname1 = getFullName('Sofiia', 'Didovych');
let fullname2 = getFullName('Maksym', 'Didovych');
console.log(fullname1);
console.log(fullname2);
// Test useFormalName
console.log(getFullName("Benjamin", "Hughes", true));
console.log(getFullName("Benjamin", "Hughes", false));
// Test empty surname
console.log(getFullName('Sofiia', ''));
