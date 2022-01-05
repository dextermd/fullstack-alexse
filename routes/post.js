const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const controller = require('../controllers/post');
const { any } = require('../middleware/upload');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/category/:categoryId', controller.getByCategoryId);
router.post('/', passport.authenticate('jwt', {session: false}), upload, controller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload, controller.update);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);


module.exports = router;
