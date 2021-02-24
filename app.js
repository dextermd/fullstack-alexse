var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var sendmailRouter = require('./routes/sendmail');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var categoryRouter = require('./routes/category');
var cartRoutes = require('./routes/cart');
var subbCategoryRouter = require('./routes/subbcategory');
var orderRouter = require('./routes/order');
var positionRouter = require('./routes/position');
var analyticsRouter = require('./routes/analytics');
var postcategoryRouter = require('./routes/postcategory');
var postRouter = require('./routes/post');
var casaRouter = require('./routes/casa');
var pandusRouter = require('./routes/pandus');
var indicatorRouter = require('./routes/indicator');

const keys = require('./config/keys');
var app = express();

mongoose.connect(keys.mongoURI)
    .then( () => console.log('MongoDB connected.'))
    .catch(error => console.log(error));


app.use(express.static('client/dist/alexse/browser'));


app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/api/sendmail', sendmailRouter);
app.use('/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/category', categoryRouter);
app.use('/api/subcategory', subbCategoryRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/order', orderRouter);
app.use('/api/position', positionRouter);
app.use('/api/cart', cartRoutes);
app.use('/api/postcategory', postcategoryRouter);
app.use('/api/post', postRouter);
app.use('/api/casa', casaRouter);
app.use('/api/pandus', pandusRouter);
app.use('/api/indicator', indicatorRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/alexse/browser'));

  app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(
            __dirname, 'client', 'dist', 'alexse', 'browser', 'index.html'
        )
    )
  })


}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


module.exports = app;
