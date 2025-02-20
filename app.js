const express = require('express');
const app = express();
const morgan = require('morgan');
const hackathonRouter = require('./Routes/hackathonRoute');
const registerEventRouter = require('./Routes/registerEventRoute');
const AppError = require('./utils/appError');
const globalerrorhandler = require('./Controllers/errorController');
const speakerRouter = require('./Routes/speakerRoute');
const cors = require('cors');
const connectDB = require('./config/db');

//This is for connecting to the database
connectDB();

// 1) Middlewares
console.log(process.env.NODE_ENV);

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Body parser, reading data from body into req.body.
app.use(express.json({ limit: '10kb' }));

//Serving static files.
app.use(express.static(`${__dirname}/public`));

//Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //console.log(req.headers);
  next();
});

// 2) Routes

app.use('/api/v1/register', registerEventRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalerrorhandler);

module.exports = app;
