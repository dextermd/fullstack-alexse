const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    order: {
        type: Number,
        required: true

    },
    order_number: {
        type: String,
        required: true

    },

    c_name: {
        type: String,

    },

    c_email: {
        type: String,

    },
    c_phone: {
        type: String,

    },
    c_type_shipping: {
        type: String,

    },
    c_address_shipping: {
        type: String,

    },
    c_company_name: {
        type: String,

    },
    c_comment: {
        type: String,

    },

    total_cost: {
        type: Number
    },

    list: [
        {
            name: {
                type: String,
            },
            img: {
                type: String,
            },
            quantity: {
                type: Number
            },
            cost: {
                type: Number
            },

            casa: [
                {
                    name: {
                        type: String,
                    },
                    price: {
                        type: String,
                    }
                }
            ],
            indicator: [
                {
                    name: {
                        type: String,
                    },
                    price: {
                        type: String,
                    }
                }
            ],
            pandus: [
                {
                    name: {
                        type: String,
                    },
                    price: {
                        type: String,
                    }
                }
            ]
        }
    ],


});




module.exports = mongoose.model('orders', orderSchema);
