const mongoose = require('mongoose');

const codeSchema = mongoose.Schema({

    language: {
        type: String,
        required: true,
        enum: ['cpp']
    },
    filePath: {
        type: String,
        requied: true
    },
    inputFilePath: {
        type: String,
        required: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    startedAt: {
        type: Date,
    },
    completedAt: {
        type: Date,
    },
    output: {
        type: String,
    },
    status: {
        type: String,
        default: "Running",
        enum: ["Running", "Success", "Error"],
    }
});

const Code = new mongoose.model("code", codeSchema);
module.exports = Code;