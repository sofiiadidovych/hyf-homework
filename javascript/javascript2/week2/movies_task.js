'use strict'
console.log(movies.length);

// 1.Create an array of movies containing the movies with a short title (you define what short means)
const shortTitleLength = 5;
const shortMovieTitles = movies.filter(movie => movie.title.length <= shortTitleLength);
console.log(shortMovieTitles);

// 2.Create an array of movie titles with long movie titles
const longTitleLength = 30;
const longMovieTitles = movies.filter(movie => movie.title.length >= longTitleLength)
console.log(longMovieTitles);

// 3.Count the number of movies made between 1980-1989 (including both the years)
const eightiesMovies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
console.log(eightiesMovies);

// 4.Create a new array that has an extra key called tag.
// The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const movieRatings = movies.map(movie => {
    if (movie.rating >= 7) {
        movie.tag = 'Good';
    } else if (movie.rating >= 4 && movie.rating < 7) {
        movie.tag = 'Average';
    } else {
        movie.tag = 'Bad';
    }
    return movie;
})
console.log(movieRatings);

// 5. Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.

const highRatedMovies = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie.rating);
console.log(highRatedMovies);

// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
// So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
// Can you make sure the search is case insensitive?

const keyWord1 = 'Surfer'.toLowerCase();
const keyWord2 = 'Alien'.toLowerCase();
const keyWord3 = 'Benjamin'.toLowerCase();

const sumMoviesWithKeyWords = movies.filter(movie => {
    const titleWords = movie.title.toLowerCase().split(' ');
    return (titleWords.includes(keyWord1) || titleWords.includes(keyWord2) || titleWords.includes(keyWord3))
}) ;
console.log(sumMoviesWithKeyWords);

// 7.Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
// Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

// const duplicatedWords = movies.filter(movie => {
//     const titleWords = movie.title.toLowerCase().split(' ');
//     console.log(titleWords);
//     if (titleWords.icludes()) {
//         return duplicatedTitleWords;
//     }
// })
// console.log(duplicatedWords)

// 8.Calculate the average rating of all the movies using reduce.

function sumRating(previousValue, el) {
    return previousValue + el.rating;
}

const rating = movies.reduce(sumRating, 0);
const averageRating = rating / movies.length;

console.log(averageRating);

// 9.Count the total number of Good, Average and Bad movies using reduce.
// A return could fx be {goodMovies: 33, averageMovies: 45, badMovies: 123}

const goodMoviesCount = movieRatings.reduce((previousValue, el) => {
    if (el.tag === 'Good') {
        return previousValue + 1;
    } else {
        return previousValue;
    }
}, 0);

console.log(goodMoviesCount);

const averageMoviesCount = movieRatings.reduce((previousValue, el) => {
    if (el.tag === 'Average') {
        return previousValue + 1;
    } else {
        return previousValue;
    }
}, 0);

console.log(averageMoviesCount);

const badMoviesCount = movieRatings.reduce((previousValue, el) => {
    if (el.tag === 'Bad') {
        return previousValue + 1;
    } else {
        return previousValue;
    }
}, 0)

console.log(badMoviesCount);

const moviesCount = movieRatings.reduce(
    (previousValue, el) => {
        if (el.tag === 'Good') {
            previousValue.goodMoviesCount++;
        } else if (el.tag === 'Average') {
            previousValue.avarageMoviesCount++;
        } else {
            previousValue.badMoviesCount++;
        }
        return previousValue;
    },
    {
        goodMoviesCount : 0,
        avarageMoviesCount : 0,
        badMoviesCount : 0
    }
);
console.log(moviesCount);