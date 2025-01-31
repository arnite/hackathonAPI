const express = require('express');
const hackathonController = require('./../Controllers/hackathonController');
const { checkApiKey } = require('./../Controllers/authController');
const router = express.Router();
const registerEventRouter = require('./registerEventRoute');

router.use('/:hackId/register', registerEventRouter);

router
  .route('/')
  .get(hackathonController.getallHackathon)
  .post(checkApiKey, hackathonController.createHackathon);

router
  .route('/:id')
  .get(hackathonController.getHackathon)
  .patch(checkApiKey, hackathonController.updateHackathon)
  .delete(checkApiKey, hackathonController.deleteHackathon);

module.exports = router;
