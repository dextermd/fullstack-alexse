const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postcategorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('postcategories', postcategorySchema);
