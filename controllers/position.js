const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');


module.exports.getAll = async function (req, res) {
    try {
        const positions = await  Position.find({ }).sort({date: -1}); // user: req.user.id
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
            code: req.body.code,
            cost: req.body.cost,
            oldCost: req.body.oldCost,
            content: req.body.content,
            spec: req.body.spec,
            certificate: req.body.certificate,
            functions: req.body.functions,
            option: req.body.option,
            sale: req.body.sale,
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
        code: req.body.code,
        cost: req.body.cost,
        oldCost: req.body.oldCost,
        content: req.body.content,
        spec: req.body.spec,
        certificate: req.body.certificate,
        functions: req.body.functions,
        option: req.body.option,
        sale: req.body.sale,
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
    } else if (req.files['imageOne'] === null) {
        updated.imgOne = '';
    }


    if (req.files['imageTwo']){
        updated.imgTwo = req.files['imageTwo'];
    } else if (req.files['imageTwo'] === null) {
        updated.imgTwo = '';
    }

    if (req.files['imageThree']){
        updated.imgThree = req.files['imageThree'];
    } else if (req.files['imageThree'] === null) {
        updated.imgThree = '';
    }

    if (req.files['imageFour']){
        updated.imgFour = req.files['imageFour'];
    } else if (req.files['imageFour'] === null) {
        updated.imgFour = '';
    }

    if (req.files['imageOne']){
        updated.imgOne = req.files['imageOne'];
    } else if (req.files['imageOne'] === null) {
        updated.imgOne = '';
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






module.exports.updateImage = async function (req, res) {
    const updated = {};
    if (req.files['image']){
        updated.img = '';
    } else{
        updated.img = '';
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




module.exports.updateImageOne = async function (req, res) {
    const updated = {};
    if (req.files['imageOne']){
        updated.imgOne = '';
    } else{
        updated.imgOne = '';
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




module.exports.updateImageTwo = async function (req, res) {
    const updated = {};
    if (req.files['imageTwo']){
        updated.imgTwo = '';
    } else{
        updated.imgTwo = '';
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



module.exports.updateImageThree = async function (req, res) {
    const updated = {};
    if (req.files['imageThree']){
        updated.imgThree = '';
    } else{
        updated.imgThree = '';
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



module.exports.updateImageFour = async function (req, res) {
    const updated = {};
    if (req.files['imageFour']){
        updated.imgFour = '';
    } else{
        updated.imgFour = '';
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
