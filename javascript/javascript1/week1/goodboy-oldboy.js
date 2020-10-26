let dogYearOfBirth=2017;
let dogYearFuture=2027;
let dogYear;
let shouldShowResultInDogYears=true;
if (shouldShowResultInDogYears){
    dogYear=(dogYearFuture-dogYearOfBirth)*7;
}
else {
    dogYear=(dogYearFuture-dogYearOfBirth);
}
console.log(dogYear);
console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture + ".");