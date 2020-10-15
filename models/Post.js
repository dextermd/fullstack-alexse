const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    titleRo: {
        type: String,
        required: true
    },
    titleEn: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: '',
        required: true

    },
    category: {
        ref: 'postcategories',
        type: Schema.Types.ObjectId.name,
        required: true
    },
    preview: {
        type: String,
        required: true

    },
    previewRo: {
        type: String,
        required: true

    },
    previewEn: {
        type: String,
        required: true

    },
    content: {
        type: String,
        required: true
    },
    contentRo: {
        type: String,
        required: true
    },
    contentEn: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }

});




module.exports = mongoose.model('posts', postSchema);
