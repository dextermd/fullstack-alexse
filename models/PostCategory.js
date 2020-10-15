const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postcategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nameRo: {
        type: String,
        required: true,
        unique: true,
    },
    nameEn: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model('postcategories', postcategorySchema);
