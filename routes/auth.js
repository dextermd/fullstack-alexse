const express = require('express');
const passport = require('passport');
const controller = require('../controllers/auth');
const router = express.Router();

//localhost:3000/api/auth/login
router.post('/login', controller.login);

//localhost:3000/api/auth/register
router.post('/register', passport.authenticate('jwt', {session: false}), controller.register);


module.exports = router;
