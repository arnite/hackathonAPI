const express = require('express');
const registerEventController = require('./../Controllers/registerEventController');
const router = express.Router();

router
  .route('/')
  .get(registerEventController.getAllRegistrations)
  .post(registerEventController.createRegistration);

module.exports = router;
