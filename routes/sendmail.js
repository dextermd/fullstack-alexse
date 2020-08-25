const express = require('express');
const passport = require('passport');
const controller = require('../controllers/sendmail');

const router = express.Router();



router.post('/', controller.sendMail);
router.post('/question', controller.sendQuestion);
router.post('/callback', controller.sendCallBack);



module.exports = router;
