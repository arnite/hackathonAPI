const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Must have name.'],
    },
    description: {
      type: String,
      required: [true, 'Must have description.'],
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    location: {
      type: String,
      required: [true, 'must have a location'],
    },
    speakers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Speaker',
      },
    ],
    slot: {
      type: Number,
      default: 20,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//Virtual populate registrations
hackathonSchema.virtual('registrations', {
  ref: 'Register',
  foreignField: 'hackathon',
  localField: '_id',
});

//Populate speakers
hackathonSchema.pre(/^find/, function (next) {
  this.populate('speakers');

  next();
});

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

module.exports = Hackathon;
