const Pandus = require('../models/Pandus');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        const pandus = await  Pandus.find({ });
        res.status(200).json(pandus)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.getById = async function (req, res) {
    try {
        const pandu = await  Pandus.findById(req.params.id);
        res.status(200).json(pandu)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.remove = async function (req, res) {
    try {
        await Pandus.remove({_id: req.params.id});
        // await Position.remove({pandus: req.params.id});
        res.status(200).json({
            message: 'Опция удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.create = async function (req, res) {
    console.log(req.user);
    const pandu = new Pandus({
        name: req.body.name,
        nameRo: req.body.nameRo,
        nameEn: req.body.nameEn,
        content: req.body.content,
        contentRo: req.body.contentRo,
        contentEn: req.body.contentEn,
        price: req.body.price,
        user: req.user.id,
        img: req.file ? req.file.path: ''

    });
    try {
        await  pandu.save();
        res.status(201).json(pandu)
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
        const  pandu = await Pandus.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        );
        res.status(200).json(pandu)
    } catch (e) {
        errorHandler(res, e)
    }
};


