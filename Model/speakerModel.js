const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must include a name.'],
  },
  occupation: {
    type: String,
    required: [true, 'Speaker must have an Occupation.'],
  },
  phoneNumber: {
    type: Number,
    required: [true, 'Speaker must have a phone number.'],
  },
  email: {
    type: String,
    required: [true, 'You must include an "email". '],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Speaker = mongoose.model('Speaker', speakerSchema);

module.exports = Speaker;
