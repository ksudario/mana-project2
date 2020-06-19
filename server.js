// Require modules
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = 3000; 
const methodOverride = require('method-override');

require('dotenv').config();

// create the Express app
const app = express();

require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const resourcesRouter = require('./routes/resources');
const commentsRouter = require('./routes/comments');
const clientsRouter = require('./routes/clients');
const infosRouter = require('./routes/infos');


// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

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
app.use('/', commentsRouter);
app.use('/', clientsRouter);
app.use('/info', infosRouter);



// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});