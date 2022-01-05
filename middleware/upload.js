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

const upload = multer({ storage: storage }).single('file');




const limit = {
    fileSize: 200 * 1024 * 1024
};
module.exports = multer({storage: storage,  limits: {
    fileSize: 1024 * 1024 * 200
}});
