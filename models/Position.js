const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const positionSchema = new Schema({
        name: {
            type: String,
            unique: true,
            required: true
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

        spec: {
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


        casa: [
            {
                type: Schema.Types.ObjectId,
                ref: 'casas',

}
        ],

        pandus: [
            {
                type: Schema.Types.ObjectId,
                ref: 'pandus',

            }
        ],

        indicator: [
            {
                type: Schema.Types.ObjectId,
                ref: 'indicators',

            }
        ],

        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
        }
    })
;


module.exports = mongoose.model('positions', positionSchema);
