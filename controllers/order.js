const Order = require('../models/Order');
const errorHandler = require('../utils/errorHandler');

// (get) localhost:3000/api/order/?offset=2&limit=5
module.exports.getAll = async function (req, res) {
    const query = {

    };
    // Дата старта
    if (req.query.start) {
        query.date = {
            // Больше или равно
            $gte: req.query.start
        }
    }
    if (req.query.end) {
        if (!query.date){
            query.date = {}
        }
        query.date['$lte'] = req.query.end
    }

    if (req.query.order) {
        query.order = +req.query.order
    }
    try {
        const orders = await Order
            .find(query)
            .sort({date: -1})
            .skip(+req.query.offset)
            .limit(+req.query.limit);
        res.status(200).json(orders)
    } catch (e) {
        errorHandler(res, e)
    }
};



module.exports.create = async function (req, res) {
    try {
        const lastOrder = await Order
            .findOne({order_number: req.body.order_number})
            .sort({date: -1});

        console.log(lastOrder);

        const maxOrder = lastOrder ? lastOrder.order : 0;

        const order = await new Order({
            list: req.body.list,
            c_name: req.body.c_name,
            c_phone: req.body.c_phone,
            c_email: req.body.c_email,
            c_type_shipping: req.body.c_type_shipping,
            c_address_shipping: req.body.c_address_shipping,
            c_company_name: req.body.c_company_name,
            c_comment: req.body.c_comment,
            order_number: req.body.order_number,
            order: maxOrder + 1
        }).save();
        res.status(201).json(order)
    } catch (e) {
        errorHandler(res, e)
    }
};

