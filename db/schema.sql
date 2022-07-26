DROP IF DATABASE EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    reviews TEXT,
    FOREIGN KEY (movie_id)
    REFERENCE movies(id)
    ON DELETE SET NULL
)