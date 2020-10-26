let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
let yearsTypeStr = "human";
if (shouldShowResultInDogYears) {
    dogYear *= 7;
    yearsTypeStr = "dog";
}
console.log(dogYear);
console.log("Your dog will be " + dogYear + " " + yearsTypeStr + " years old in " + dogYearFuture + ".");