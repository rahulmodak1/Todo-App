const mongoose = require('mongoose');
const schema = mongoose.Schema({
    item: {
        required: true,
        type: String
    }



})
module.exports = mongoose.model('list', schema)