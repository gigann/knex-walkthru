const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')['development']);

app.get('/', (req, res) => {
    res.send('Hello World! App up and running.');
});

app.listen(port, () => {
    console.log(`Knex and Express app listening at http://localhost:${port}`);
});

// create endpoint
app.get('/pets', (req, res) => {
    knex('pet')
        .select('*')
        .then(pets => {
            let petNames = pets.map(pet => pet.name);
            res.json(petNames);
        })
});