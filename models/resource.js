const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String
}, {

});

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
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },

    service:[String],
    practioner: [String],
    telehealth: { type: Boolean, default: false },
    comments: [commentSchema]
    }, {
        timestamps: true

    });

module.exports = mongoose.model('Resource', resourceSchema);