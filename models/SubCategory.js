const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
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
    desc: {
        type: String,
        unique: true,
    },
    descRo: {
        type: String,
        unique: true,
    },
    descEn: {
        type: String,
        unique: true,
    },
    num: {
        type: Number,
        unique: true,
        required: true
    },
    category: {
        ref: 'categories',
        type: Schema.Types.ObjectId,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('subcategories', subcategorySchema);
