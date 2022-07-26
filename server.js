const express = require('express')
const mysql = require('mysql2')
const fs = require('fs')
const movies = require('./db/movies.json')
const reviews = require('./db/reviews.json')

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movie_db'
    },
    console.log('connected to database folder')
);

app.get('/api/movies', (req, res) => {
    res.json(movies)
    console.log('in the get route')
});

app.post('/api/add-movie', (req, res) => {
    const { id, movie_name } = req.body;
    fs.readFile('./db/movies.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }   else {
            const movieInfo = {
                id: id,
                movie_name: movie_name,
            }

            const parsedMovie = JSON.parse(data);

            parsedMovie.push(movieInfo)
            movies = parsedMovie;

            fs.writeFile(
                './db/movies.json',
                JSON.stringify(parsedMovie, null, 4),
                (writeErr) =>
                    writeErr
                    ? console.error(writeErr)
                    : console.info('successfully updated movie')
            )
        }
    })
})

app.post('api/update-review')

app.delete('/api/movie/:id')

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });


// db.query('SELECT * FROM movies', function(err, results){
//     // console.table(results);
//     // console.log(results);
//     fs.writeFile('./db/movies.json', JSON.stringify(results, null, "\t"), (err) =>{
//         err ? console.log(err) : console.log("success!")}
//     )
// })

// db.query('SELECT reviews.id, movies.movie_name, reviews.review AS review From reviews Join movies on reviews.movie_id = movies.id', function(err, results){
//     // console.table(results)
//     // console.log(results)
//     fs.writeFile('./db/reviews.json', JSON.stringify(results, null, "\t"), (err) =>{
//     err ? console.log(err , 'review error') : console.log("success!")}
//     )
// })
