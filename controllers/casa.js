const Casa = require('../models/Casa');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        const casas = await Casa.find({});
        res.status(200).json(casas)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.getById = async function (req, res) {
    try {
        const casa = await Casa.findById(req.params.id);
        res.status(200).json(casa)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.remove = async function (req, res) {
    try {
        await Casa.remove({_id: req.params.id});
        // await Position.remove({casa: req.params.id});
        res.status(200).json({
            message: 'Опция удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.create = async function (req, res) {
    console.log(req.user);
    const casa = new Casa({
        name: req.body.name,
        price: req.body.price,
        user: req.user.id,

    });
    try {
        await casa.save();
        res.status(201).json(casa)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name,
        price: req.body.price,
    };
    try {
        const casa = await Casa.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        );
        res.status(200).json(casa)
    } catch (e) {
        errorHandler(res, e)
    }
};


