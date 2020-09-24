const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
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

        code: {
            type: String,
            unique: true,
        },

        img: {
            type: Array,
            default: '',
            required: true

        },
        imgOne: {
            type: Array,
            default: '',
            required: true
        },
        imgTwo: {
            type: Array,
            default: ''
        },
        imgThree: {
            type: Array,
            default: ''
        },
        imgFour: {
            type: Array,
            default: ''
        },
        subcategory: {
            ref: 'subcategories',
            type: Schema.Types.ObjectId,
            required: true
        },
        cost: {
            type: Number,
            required: true

        },

        oldCost: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        contentRo: {
            type: String,
            default: ''
        },
        contentEn: {
            type: String,
            default: ''
        },

        spec: {
            type: String,
            default: ''
        },
        specRo: {
            type: String,
            default: ''
        },
        specEn: {
            type: String,
            default: ''
        },
        date: {
            type: Date,
            default: Date.now
        },

        option: {
            type: Boolean,
            default: false
        },

        sale: {
            type: Boolean,
            default: false
        },

        certificate: {
            type: String,
            default: ''
        },
        functions: {
            type: String,
            default: ''
        },
        functionsRo: {
            type: String,
            default: ''
        },
        functionsEn: {
            type: String,
            default: ''
        },

        casa: [
            {
                type: Schema.Types.ObjectId,
                ref: 'casas',
                default: []
            }
        ],

        pandus: [
            {
                type: Schema.Types.ObjectId,
                ref: 'pandus',
                default: []
            }
        ],

        indicator: [
            {
                type: Schema.Types.ObjectId,
                ref: 'indicators',
                default: []
            }
        ],

        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        }
    })
;


module.exports = mongoose.model('positions', positionSchema);
