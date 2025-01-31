const Speaker = require('./../Model/speakerModel');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.getallSpeaker = catchAsync(async (req, res, next)=> {
    const speakers = await Speaker.find()

    //Send response
    res.status(200).json({
        status: 'success',
        results: speaker.length,
        data: {
            speakers,
        },
    });
});

exports.createSpeaker = catchAsync(async (req, res, next)=> {
    const newSpeaker = await Speaker.create(req.body)

    //Send response
    res.status(201).json({
        status: 'success',
        data: {
            speaker: newSpeaker,
        },
    });
});

exports.getSpeaker = catchAsync(async (req, res, next)=> {
    const speaker = await Speaker.findById(req.params.id)

    //Send response
    res.status(200).json({
        status: 'success', 
        data: {
            speaker,
        },
    });
});


exports.updateSpeaker = catchAsync(async (req, res, next)=> {
    const updatedSpeaker = await Speaker.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    //Send response
    res.status(200).json({
        status: 'success',
        data: {
            speaker: updatedSpeaker
        },
    });
});

exports.deleteSpeaker = catchAsync(async (req, res, next)=> {
    const deletedSpeaker = await Speaker.findByIdAndDelete(req.params.id)

    //Send response
    res.status(204).json({
        status: 'success',
        data: null,
    })
})

