const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const casaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }

});

module.exports = mongoose.model('casas', casaSchema);
