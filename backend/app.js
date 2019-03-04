const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./auth/local')

const users = require('./routes/users.js')
const notebooks = require('./routes/notebooks.js');
const notes = require('./routes/notes.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use(
  session({
    secret: 'never gonna give u up',
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

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
