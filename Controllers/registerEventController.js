const Register = require('./../Model/registerEventModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getAllRegistrations = catchAsync(async (req, res, next) => {
  const registers = await Register.find();

  //Send response
  res.status(200).json({
    status: 'success',
    results: registers.length,
    data: {
      registers,
    },
  });
});

exports.createRegistration = catchAsync(async (req, res, next) => {
  //To check existing registration
  const existRegister = await Register.findOne({ email: req.body.email });
  if (existRegister) {
    next(new AppError('Email already registered', 400));
  }

  //To create registration
  const register = await Register.create(req.body);

  //Send response
  res.status(201).json({
    status: 'success',
    message: 'Successfully registered for event.',
    data: {
      register,
    },
  });
});

