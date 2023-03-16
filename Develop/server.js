const express = require("express");
const path = require('path');
const api = require("./public/assets/js/index");
const PORT = 3001;
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);