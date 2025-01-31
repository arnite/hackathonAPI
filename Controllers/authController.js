const AppError = require('./../utils/appError');

exports.checkApiKey = async (req, res, next) => {
  const apiKey = req.header('apiKey');

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return next(new AppError('Forbidden: Invalid API key.', 403));
  }

  next();
};
