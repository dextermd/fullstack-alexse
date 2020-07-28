const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indicatorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: '',

    },
    content: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('indicators', indicatorSchema);
