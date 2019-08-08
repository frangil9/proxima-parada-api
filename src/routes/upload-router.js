const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const UploadCtrl = require('../controllers/upload-controller');

router.post('/', upload, UploadCtrl);


module.exports = router;