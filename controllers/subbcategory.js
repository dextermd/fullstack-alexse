const SubCategory = require('../models/SubCategory');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        const categories = await  SubCategory.find({ }).sort({num: -1}); // user: req.user.id
        res.status(200).json(categories)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.getById = async function (req, res) {
    try {
        const category = await  SubCategory.findById(req.params.id);
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.remove = async function (req, res) {
    try {
        await SubCategory.remove({_id: req.params.id});
        await Position.remove({subcategory: req.params.id});
        res.status(200).json({
            message: 'Категория удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.create = async function (req, res) {
    console.log(req.user);
    const subcategory = new SubCategory({
        name: req.body.name,
        num: req.body.num,
        category: req.body.category,
        user: req.user.id,

    });
    try {
        await  subcategory.save();
        res.status(201).json(subcategory)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name,
        num: req.body.num,
        category: req.body.category,
    };

    try {
        const  subcategory = await SubCategory.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        );
        res.status(200).json(subcategory)
    } catch (e) {
        errorHandler(res, e)
    }
};


