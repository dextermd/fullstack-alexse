const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const controller = require('../controllers/position');
const router = express.Router();

var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/subcategory/:subcategoryId', controller.getByCategoryId);
router.post('/', passport.authenticate('jwt', {session: false}),
    upload.fields([
        {name: 'image', maxCount: 1},
        {name: 'imageOne', maxCount: 1},
        {name: 'imageTwo', maxCount: 1},
        {name: 'imageThree', maxCount: 1},
        {name: 'imageFour', maxCount: 1},
    ])
    , controller.create);
router.patch('/:id',  jsonParser, passport.authenticate('jwt', {session: false}),
    upload.fields([
            {name: 'image', maxCount: 1},
            {name: 'imageOne', maxCount: 1},
            {name: 'imageTwo', maxCount: 1},
            {name: 'imageThree', maxCount: 1},
            {name: 'imageFour', maxCount: 1},
    ])
    , controller.update);
router.delete('/:id', jsonParser,  passport.authenticate('jwt', {session: false}), controller.remove);


module.exports = router;
