const Post = require('../models/Post');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function (req, res) {
    try {
        const positions = await  Post.find({ }).sort({date: -1});
        res.status(200).json(positions)

    } catch (e) {
        errorHandler(res, e)

    }
};



module.exports.getById = async function (req, res) {
    try {
        const category = await  Post.findById(req.params.id);
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
};


module.exports.getByCategoryId = async function (req, res) {
    try {
        const positions = await Post.find({
            category: req.params.categoryId
        });
        res.status(200).json(positions)
    } catch (e) {
        errorHandler(res, e)

    }
};

module.exports.remove = async function (req, res) {
    try {
        await Post.remove({
            _id: req.params.id
        });
        res.status(200).json({
            message: 'Пост был удален.'
        })
    } catch (e) {
        errorHandler(res, e)

    }
};

module.exports.create = async function (req, res) {
    try {
        const position = await new Post({
            title: req.body.title,
            titleRo: req.body.titleRo,
            titleEn: req.body.titleEn,
            content: req.body.content,
            contentRo: req.body.contentRo,
            contentEn: req.body.contentEn,
            preview: req.body.preview,
            previewRo: req.body.previewRo,
            previewEn: req.body.previewEn,
            category: req.body.category,
            user: req.user.id,
            img: req.file ? req.file.path: ''

        }).save();
        res.status(201).json(position)

    } catch (e) {
        errorHandler(res, e)

    }
};

module.exports.update = async function (req, res) {
    const updated = {
        title: req.body.title,
        titleRo: req.body.titleRo,
        titleEn: req.body.titleEn,
        content: req.body.content,
        contentRo: req.body.contentRo,
        contentEn: req.body.contentEn,
        preview: req.body.preview,
        previewRo: req.body.previewRo,
        previewEn: req.body.previewEn,
    };
    if (req.file){
        updated.img = req.file.path
    }
    try {
        const  product = await Post.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        );
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
};
