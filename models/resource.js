const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Resource', resourceSchema);