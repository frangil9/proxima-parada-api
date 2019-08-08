const multer = require('multer');
const uuid = require('uuid/v4');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 
const upload = multer({storage}).single('file');

module.exports = upload;