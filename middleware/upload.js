const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'uploads/')

    },
    filename(req,  file, cb ) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS')
        cb(null, `${date}-${file.originalname}`);

    }
});

// const fileFilter = (req, file, cb ) => {
//     if (file.mimetype === 'upload/png' || file.mimetype === 'upload/jpeg') {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
//
// };

const upload = multer({ storage: storage }).single('file');




const limits = {
    fileSize: 1024 * 1024 * 25
};
module.exports = multer({storage: storage,  limits,});
