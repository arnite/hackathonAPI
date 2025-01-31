const Hackathon = require('./../Model/hackathonModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getallHackathon = catchAsync(async (req, res, next) => {
  const hackathons = await Hackathon.find();

  //Send response
  res.status(200).json({
    status: 'success',
    result: hackathons.length,
    data: {
      hackathons,
    },
  });
});

exports.createHackathon = catchAsync(async (req, res, next) => {
  const newHackathon = await Hackathon.create(req.body);

  //Send response
  res.status(201).json({
    status: 'success',
    data: {
      hackathon: newHackathon,
    },
  });
});

exports.getHackathon = catchAsync(async (req, res, next) => {
  const hackathon = await Hackathon.findById(req.params.id).populate(
    'registrations'
  );

  //Send response
  res.status(200).json({
    status: 'success',
    message: 'The data you extracted worked in the background.',
    data: {
      hackathon,
    },
  });
});

exports.updateHackathon = catchAsync(async (req, res, next) => {
  const hackathon = await Hackathon.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  //Send response
  res.status(200).json({
    status: 'success',
    message: 'The data was successfully updated.',
    data: {
      hackathon,
    },
  });
});

exports.deleteHackathon = catchAsync(async (req, res, next) => {
  const deletedHackathon = await Hackathon.findByIdAndDelete(req.params.id);

  //Send response
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
