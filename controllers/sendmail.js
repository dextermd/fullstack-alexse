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
            from: '"Ваша покупка на AlexSE" <no-reply@alex-se.com>', // sender address
            to: order.body.c_email, // list of receivers
            subject: "Ваша покупка на AlexSE ✔", // Subject line
            template: 'index',
            context: {
                name: order.body.c_name,
                order: order.body.order,
                price: this.price,
                c_address_shipping: order.body.c_address_shipping,
                date: order.body.date,
                items: order.body.list,

            }, // send extra values to template
            text: "Hello world?", // plain text body
        };



        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return log(err);
            }
            return log('Email sent!!!');
        });


};


