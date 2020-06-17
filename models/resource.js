const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
}, {
    timestamps: true
});

const infoSchema = new Schema({
    content: String,
}, {
    timestamps: true
});

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
    comments: [commentSchema]
    }, {
        timestamps: true

    });

module.exports = mongoose.model('Resource', resourceSchema);