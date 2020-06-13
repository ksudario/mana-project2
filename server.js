// Require modules
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = 3000; 

require('dotenv').config()
require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const resourcesRouter = require('./routes/resources');


// Set up express app
const app = express();

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mount routes with app.use()
app.use(session({
    secret: 'MANA',
    resave: false,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/resources', resourcesRouter);


// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});