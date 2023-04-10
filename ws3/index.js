const mongoose = require('mongoose');
const express = require('express');
const author = require('./handlers/author');
const db = require('./pkg/db');

db.init();

const app = express();

app.use(express.json());



app.get('Authors/:id', author.getOne);
app.get('Authors/:id', author.getAll);



app.listen(8080, err => {
    if(err) return console.log(err);
    console.log('Server successfully started')
})

// da se doraboti