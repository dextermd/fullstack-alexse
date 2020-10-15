const PostCategory = require('../models/PostCategory');
const Post = require('../models/Post');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        const categories = await  PostCategory.find({ });
        res.status(200).json(categories)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.getById = async function (req, res) {
    try {
        const category = await  PostCategory.findById(req.params.id);
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.remove = async function (req, res) {
    try {
        await PostCategory.remove({_id: req.params.id});
        // await Post.remove({category: req.params.id});
        res.status(200).json({
            message: 'Категория удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.create = async function (req, res) {
    console.log(req.user);
    const category = new PostCategory({
        name: req.body.name,
        nameRo: req.body.nameRo,
        nameEn: req.body.nameEn,

    });
    try {
        await  category.save();
        res.status(201).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
};

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name,
        nameRo: req.body.nameRo,
        nameEn: req.body.nameEn,
    };
    try {
        const  category = await PostCategory.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        );
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
};


