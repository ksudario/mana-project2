const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    organization: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    practioner: [String],
    telehealth: { type: Boolean, default: false },
    googleId: String
    }, {
        timestamps: true

    });

module.exports = mongoose.model('Resource', resourceSchema);