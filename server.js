const express = require('express')
const mysql = require('mysql2')
const fs = require('fs')

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

const db = mysql.connect(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'db'
    },
    console.log('connected to database folder')
);

app.listen(PORT, () =>{
    console.log("listening")
});
