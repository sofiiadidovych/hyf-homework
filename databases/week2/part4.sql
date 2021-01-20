-- Part 4: Creating a database

CREATE TABLE genres (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name ENUM('comedy', 'sci-fi', 'horror', 'romance', 'action', 'thriller', 'drama', 'mystery', 'crime',
    'animation', 'fantasy', 'superhero'),
    mpaa_rating ENUM('G - General Audiences', 'PG - Parental Guidance Suggested', 'PG-13 – Parents Strongly Cautioned',
    'R – Restricted', 'NC-17 – Adults Only')
);
CREATE TABLE movies (
	id INT PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(100), 
    release_date DATE, 
    director VARCHAR(40), 
    genres_id INT,
    FOREIGN KEY (genres_id) REFERENCES genres(id)
);
CREATE TABLE countries (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);
CREATE TABLE actors (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    date_of_birth DATE,
    awards VARCHAR(100),
    origin_country_id INT,
    FOREIGN KEY (origin_country_id) REFERENCES countries(id)
);
CREATE TABLE movies_countries (
	movies_id INT,
    countries_id INT,
    PRIMARY KEY (movies_id, countries_id),
    FOREIGN KEY (movies_id) REFERENCES movies(id),
    FOREIGN KEY (countries_id) REFERENCES countries(id)
);
CREATE TABLE movies_actors (
	movies_id INT,
    actors_id INT,
    PRIMARY KEY (movies_id, actors_id),
    FOREIGN KEY (movies_id) REFERENCES movies(id),
    FOREIGN KEY (actors_id) REFERENCES actors(id)
);
