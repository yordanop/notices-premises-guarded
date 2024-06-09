const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const app =  express();

const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));


// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
  );

// Wildcard
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
  );

  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );