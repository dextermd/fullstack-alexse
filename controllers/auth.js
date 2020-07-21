const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const keys= require('../config/keys');
const errorHandler = require('../utils/errorHandler');
const User = require('../models/User');

module.exports.login = async function (req, res) {
    const candidate = await User.findOne({email: req.body.email});

    if (candidate) {
        // Проверка пароля, пользователь существует
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // Генирация токена, пароли совпали
            const token = jsonwebtoken.sign({
               email: candidate.email,
               userId: candidate._id
            }, keys.jsonwebtoken, {expiresIn: 60 * 60});

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else{
            // Пароли не совпали
            res.status(401).json({
                message: 'Пароль не совпадает. Попробуйте снова.'
            })
        }
    } else {
        // Пользователя нет, ошибка
        res.status(404).json({
            message: 'Пользователь с таким email не найден.'
        })
    }

};

module.exports.register = async function (req, res) {
    //email password
    const candidate = await User.findOne({email: req.body.email});

    if (candidate) {
        // Пользователь существует, нужно отдать ошибку
        res.status(409).json({
            message: 'Такой email уже занят.'
        }) //409 Статус Конфликт
    } else {
        // Нужно создать пользователья
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        });

        try {
            await user.save();
            res.status(201).json(user)
        } catch (e) {
            // Обработать ошибку
            errorHandler(res, e)
        }

    }
};
