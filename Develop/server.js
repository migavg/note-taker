const express = require("express");
const path = require('path');
const api = require("./public/assets/js/index");
const PORT = process.env.PORT || 3001;
const { clog } = require('./middleware/clog');
const app = express();



app.use(clog);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", api);

app.use(express.static("public"));


app.get('/', (req,res) => 
res.sendFile(path.join(__dirname, "./public/index.html"))
);

app.get('/notes', (req, res) => 
 res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req,res) => 
    res.sendFile(path.join(__dirname, 'public/index.html'))
);


app.listen(PORT, () =>
console.llog(`App listening at http://localhost:${PORT}`)
);