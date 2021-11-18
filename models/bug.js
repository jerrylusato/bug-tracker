const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    stack: { 
        type: String, 
        required: true
    },
    dateOccured: { 
        type: Number,
        default: Number(Date.now)
    }
}, { modelName: 'bugs'});

const Bug = mongoose.model('Bug', bugSchema);

module.exports  = Bug;
