const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
});  



const limits = {
    fileSize: 200 * 1024 * 1024
};




module.exports = multer({storage: storage,  limits,});