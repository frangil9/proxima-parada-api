const express = require('express');
const router = express.Router();
const PublicationCtrl = require('../controllers/publication-controller');

router.post('/', PublicationCtrl.createPublication);
router.get('/', PublicationCtrl.findAllPublications);
router.get('/:id', PublicationCtrl.findPublicationById);

module.exports = router;