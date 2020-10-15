const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indicatorSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    nameRo: {
        type: String,
        unique: true,
        required: true
    },
    nameEn: {
        type: String,
        unique: true,
        required: true
    },
    img: {
        type: String,
        default: '',

    },
    content: {
        type: String,
    },
    contentRo: {
        type: String,
    },
    contentEn: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('indicators', indicatorSchema);
