const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const controller = require('../controllers/post');
const router = express.Router();
const multer = require('multer')
const multiPartDataParser = multer({ limits: { fieldSize: 100 * 1024 * 1024 } })

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/category/:categoryId', controller.getByCategoryId);
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), multiPartDataParser.none(),  controller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), multiPartDataParser.none(), controller.update);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);


module.exports = router;
