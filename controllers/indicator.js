const Inducator = require('../models/Indicator');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        const indicators = await  Inducator.find({ });
        res.status(200).json(indicators)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.getById = async function (req, res) {
    try {
        const indicator = await  Inducator.findById(req.params.id);
        res.status(200).json(indicator)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.remove = async function (req, res) {
    try {
        await Inducator.remove({_id: req.params.id});
        // await Position.remove({indicator: req.params.id});
        res.status(200).json({
            message: 'Опция удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.create = async function (req, res) {
    console.log(req.user);
    const indicator = new Inducator({
        name: req.body.name,
        content: req.body.content,
        price: req.body.price,
        user: req.user.id,
        img: req.file ? req.file.path: ''


    });
    try {
        await  indicator.save();
        res.status(201).json(indicator)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name,
        content: req.body.content,
        price: req.body.price,
    };
    if (req.file){
        updated.img = req.file.path
    }
    try {
        const  indicator = await Inducator.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        );
        res.status(200).json(indicator)
    } catch (e) {
        errorHandler(res, e)
    }
};


