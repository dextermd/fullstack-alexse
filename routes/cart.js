const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart');



router.post('/:id', controller.fetchCart);
router.put('/add/:id', controller.addProductInCart);
router.put('/remove/:id', controller.removeProductFromCart);
// router.put('',cartCtrl.userProfile);
// router.post('',cartCtrl.register);


module.exports = router;
