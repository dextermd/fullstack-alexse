const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');
const log = console.log;


module.exports.sendMail = async function (order, callback) {

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'alexsetestone@gmail.com', // generated ethereal user
                pass: 'zulimp33', // generated ethereal password
            },
        });

    const handlebarOptions = {
        viewEngine: {
            extName: '.hbs',
            partialsDir: 'some/path',
            layoutsDir: './views/',
            defaultLayout: 'index.hbs',
        },
        viewPath: './views/',
        extName: '.hbs',
    };

    transporter.use('compile', hbs(handlebarOptions));
        let mailOptions = {
            from: '"Ваша покупка на Alex S&E SRL" <no-reply@alex-se.com>', // sender address
            to: `${order.body.c_email} , reception@alex-se.com , liudik_alex@mail.ru`,
            subject: "Ваша покупка на AlexSE ✔", // Subject line
            template: 'index',
            context: {
                name: order.body.c_name,
                order: order.body.order,
                total_cost: order.body.total_cost,
                c_address_shipping: order.body.c_address_shipping,
                date: order.body.date,
                items: order.body.list,

            }, // send extra values to template
        };



        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return log(err);
            }
            return log('Email sent!!!');
        });


};




module.exports.sendQuestion = async function (question, callback) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'alexsetestone@gmail.com', // generated ethereal user
            pass: 'zulimp33', // generated ethereal password
        },
    });

    const handlebarOptions = {
        viewEngine: {
            extName: '.hbs',
            partialsDir: 'some/path',
            layoutsDir: './views/',
            defaultLayout: 'question.hbs',
        },
        viewPath: './views/',
        extName: '.hbs',
    };

    transporter.use('compile', hbs(handlebarOptions));
    let mailOptions = {
        from: '"[HELP] У Клиента"' + question.body.name +'"есть вопрос!!!"<no-reply@alex-se.com>', // sender address
        to: 'reception@alex-se.com , liudik_alex@mail.ru', // list of receivers
        subject: question.body.subject, // Subject line
        template: 'question',
        context: {
            name: question.body.name,
            email: question.body.email,
            subject: question.body.subject,
            message: question.body.message,

        }, // send extra values to template
    };



    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return log(err);
        }
        return log('Email sent!!!');
    });


};





module.exports.sendCallBack = async function (call, callback) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'alexsetestone@gmail.com', // generated ethereal user
            pass: 'zulimp33', // generated ethereal password
        },
    });

    const handlebarOptions = {
        viewEngine: {
            extName: '.hbs',
            partialsDir: 'some/path',
            layoutsDir: './views/',
            defaultLayout: 'callback.hbs',
        },
        viewPath: './views/',
        extName: '.hbs',
    };

    transporter.use('compile', hbs(handlebarOptions));
    let mailOptions = {
        from: '"[CALLBACK] ОБРАТНЫЙ ЗВОНОК" "на номер"'  + " " + call.body.phone, // sender address
        to: 'reception@alex-se.com , liudik_alex@mail.ru', // list of receivers
        subject: '[CALLBACK] ОБРАТНЫЙ ЗВОНОК' + call.body.phone, // Subject line
        template: 'callback',
        context: {
            name: call.body.name,
            email: call.body.email,
            phone: call.body.phone,

        }, // send extra values to template
    };



    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return log(err);
        }
        return log('Email sent!!!');
    });


};
