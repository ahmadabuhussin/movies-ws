// app.js
const express = require('express');
const bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors')
// initialize our express app
const app = express();
const movie = require('./movie.route.js');

let port = 1234;

// Set up mongoose connection
const mongoose = require('mongoose');
//let mongoDB = 'mongodb://localhost:27017/movies';
let mongoDB = 'mongodb+srv://admin:ahmd2949!@cluster0-kraoh.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', () => {
    console.log('DB Connection established successfully');
});

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/movies', movie);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err.message);
    // render the error page
    res.status(err.status || 500);
    res.sendStatus(500);
});

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
