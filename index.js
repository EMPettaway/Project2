const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport')
const logger = require('morgan');
const methodOverride = require('method-override');
const PORT = 3005

const companyRouter = require('./routes/company')
require('./db/connection')
require('dotenv').config()
// require('./passport');

const app = express()
// const indexRouter = require('./routes/index');
// const showsRouter = require('./routes/shows')
// const reviewsRouter = require('./routes/reviews')

// const path = require('path')
// const methodOverride = require('method-override')
// Data
// const feds = ['WWE', 'AEW', 'Impact Wrestling', 'NJPW']

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(cookieParser());
app.use(session({
    secret: 'HeyYo!',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'));

app.use('/', companyRouter);
app.get('/', function(req, res, next) {
    res.redirect('/companies');
});

// app.use('/companies', companyRouter);

// SET UP ROUTES TO ACCEPT FORMS/JSON


// app.use(function(req, res, next) {
//     next(createError(404));
// });

// app.use(function(err, req, res, next) {
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     res.status(err.status || 500);
//     res.render('error');
// });



app.listen(PORT, () => {
    console.log('Hey YO!', PORT)
})