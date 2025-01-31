const mongoose = require('mongoose');

const registerEventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must include a "name". '],
  },
  email: {
    type: String,
    required: [true, 'You must include an "email". '],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, 'You must include a "phoneNumber". '],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

registerEventSchema.index({ email: 1 }, { unique: true });

const Register = mongoose.model('Register', registerEventSchema);

module.exports = Register;
