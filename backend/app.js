const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')

const users = require('./routes/users.js')
const notebooks = require('./routes/notebooks.js');
const notes = require('./routes/notes.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use('/users', users);
app.use('/notebooks', notebooks);
app.use('/notes', notes);


app.get('/', (req, res) => {
  res.send('This is the homepage!')
});

app.get('*', (req, res) => {
  res.send("There's an ERROR! Try again!")
})

app.listen(2019, () => {
  console.log("Listening to port 2019");
});
