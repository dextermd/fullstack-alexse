const Order = require('../models/Order');
const nodemailer = require("nodemailer");


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



        let mailOptions = {
            from: '"Fred Foo 👻" <alexsetestone@gmail.com>', // sender address
            to: order.body.c_email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html:  " <!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "\n" +
                "<head>\n" +
                "  <meta charset=\"UTF-8\">\n" +
                "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
                "  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n" +
                "  <title>Request</title>\n" +
                "</head>\n" +
                "\n" +
                "<body>\n" +
                "  <script>\n" +
                "    ${savedRequest.requestItems}.forEach(myFunction);\n" +
                "\n" +
                "function myFunction(item, index) {\n" +
                "  document.getElementById(\"requestContainer\").innerHTML += index + \":\" + item + \"<br>\";\n" +
                "}\n" +
                "  </script>\n" +
                "  <div class=\"containergo>\n" +
                "    <div class=\"row\">\n" +
                "      <div class=\"col-sm\">\n" +
                "        <div class=\"card\">\n" +
                "          <div class=\"card-header bg-light text-dark\">\n" +
                "            <h3><strong>Project: </strong>${project.projectTitle}</h3>\n" +
                "            <h4><strong>From: </strong>${savedRequest.userName}</h4>\n" +
                "          </div>\n" +
                "          <div class=\"card-body border border-light\">\n" +
                "            <div class=\"row\">\n" +
                "              <div class=\"col-sm\">\n" +
                "                <table class=\"table\">\n" +
                "                  <thead>\n" +
                "                    <th>Department</th>\n" +
                "                    <th>Job Type</th>\n" +
                "                    <th>Episode</th>\n" +
                "                  </thead>\n" +
                "                  <tbody>\n" +
                "                    <tr>\n" +
                "                      <td>${savedRequest.department}</td>\n" +
                "                      <td>${savedRequest.jobType}</td>\n" +
                "                      <td>${savedRequest.episode}</td>\n" +
                "                    </tr>\n" +
                "                  </tbody>\n" +
                "                </table>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "            <div class=\"row\">\n" +
                "              <div class=\"col-sm\">\n" +
                "                <h5>Request Items</h5>\n" +
                "                <div id=\"requestContainer\"></div>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "    </div>\n" +
                "  </div>\n" +
                "</body>\n" +
                "\n" +
                "</html>",
        };



        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);

        callback(info);




};

