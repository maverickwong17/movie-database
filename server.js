const express = require('express')
const mysql = require('mysql2')
const fs = require('fs')
// const movies = require('./db/movies.json')
// const reviews = require('./db/reviews.json')

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
