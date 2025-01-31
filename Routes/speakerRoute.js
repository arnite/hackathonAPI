const express = require('express');
const speakerController = require('./../Controllers/speakerController');
const { checkApiKey } = require('./../Controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(checkApiKey, speakerController.getallSpeaker)
  .post(checkApiKey, speakerController.createSpeaker);

router
  .route('/:id')
  .get(checkApiKey, speakerController.getSpeaker)
  .patch(checkApiKey, speakerController.updateSpeaker)
  .delete(checkApiKey, speakerController.deleteSpeaker);

module.exports = router;
