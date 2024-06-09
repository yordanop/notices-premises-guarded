const express = require('express');
const path = require('path');

const app =  express();

const PORT = 3001;

// Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));


// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
  );

// Wildcard
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/404.html'))
  );

  app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );