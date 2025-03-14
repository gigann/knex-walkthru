const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Hello World! App up and running.');
});

app.listen(port, () => {
    console.log(`Knex and Express app listening at http://localhost:${port}`);
});