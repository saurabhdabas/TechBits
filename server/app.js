const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const logger = require('morgan');

const connectDB = require('./configs/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


connectDB();

const app = express();


app.use(cookieSession({
  name:'session',
  keys:['techbits'],
  maxAge: 24 * 60 * 60 * 100
}))

// Initialize the passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin:"http://localhost:3000",
  methods:[GET, POST, PUT ,DELETE],
  credentials:true 
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
