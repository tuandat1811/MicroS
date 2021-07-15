const mongoose = require('mongoose')
const shortID = require('shortid')
const shortURLSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortID.generate()
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
}) 

module.exports = mongoose.model('ShortURL', shortURLSchema)