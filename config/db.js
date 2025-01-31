const mongoose = require('mongoose');
const catchAsync = require('./../utils/catchAsync');

//Start the database
const db = process.env.DATABASE;

const connectDB = catchAsync(async () => {
  await mongoose.connect(db);
  console.log('DATABASE integration successful');
});

module.exports = connectDB;
