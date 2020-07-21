const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');



module.exports.getAll = async function (req, res) {
    try {
        const positions = await  Position.find({ }); // user: req.user.id
        res.status(200).json(positions)

    } catch (e) {
        errorHandler(res, e)

    }
};


module.exports.getById = async function (req, res) {
    try {
        const category = await  Position.findById(req.params.id);
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
};


module.exports.getByCategoryId = async function (req, res) {
    try {
        const positions = await Position.find({
            subcategory: req.params.subcategoryId
        });
        res.status(200).json(positions)
    } catch (e) {
        errorHandler(res, e)

    }
};

module.exports.remove = async function (req, res) {
    try {
        await Position.remove({
            _id: req.params.id
        });
        res.status(200).json({
            message: 'Позиция была удалена.'
        })
    } catch (e) {
        errorHandler(res, e)

    }
};

module.exports.create = async function (req, res) {
    try {
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            oldCost: req.body.oldCost,
            content: req.body.content,
            spec: req.body.spec,
            option: req.body.option,
            subcategory: req.body.subcategory,
            casa: req.body.casa.split(','),
            pandus: req.body.pandus.split(','),
            indicator: req.body.indicator.split(','),
            user: req.user.id,
            img: req.files['image'],
            imgOne: req.files['imageOne'],
            imgTwo: req.files['imageTwo'],
            imgThree: req.files['imageThree'],
            imgFour: req.files['imageFour'],

        }).save();
        res.status(201).json(position)

    } catch (e) {
        errorHandler(res, e)

    }
};

module.exports.update = async function (req, res) {
    const updated = {
        name: req.body.name,
        cost: req.body.cost,
        oldCost: req.body.oldCost,
        content: req.body.content,
        spec: req.body.spec,
        option: req.body.option,
        subcategory: req.body.subcategory,
        casa: req.body.casa.split(','),
        pandus: req.body.pandus.split(','),
        indicator: req.body.indicator.split(','),
    };
    if (req.files['image']){
        updated.img = req.files['image'];
    }
    if (req.files['imageOne']){
        updated.imgOne = req.files['imageOne'];
    }
    if (req.files['imageTwo']){
        updated.imgTwo = req.files['imageTwo'];
    }
    if (req.files['imageThree']){
        updated.imgThree = req.files['imageThree'];
    }
    if (req.files['imageFour']){
        updated.imgFour = req.files['imageFour'];
    }
    try {
        const  product = await Position.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        );
        res.status(200).json(product)
    } catch (e) {
        errorHandler(res, e)
    }
};
