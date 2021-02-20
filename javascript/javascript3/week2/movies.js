const badMoviesList = document.querySelector('#bad_movies');

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movies => {
        const badMoviesSince2000 = movies.filter(movie => movie.rating <= 3 && movie.year >= 2000);

        badMoviesSince2000.forEach(movie => {
            const badMovie = document.createElement('li');
            badMovie.innerText = `${movie.title} (${movie.year})`;
            badMoviesList.appendChild(badMovie);
        })
    })