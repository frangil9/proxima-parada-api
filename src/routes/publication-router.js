const express = require('express');
const router = express.Router();
const PublicationCtrl = require('../controllers/publication-controller');

router.post('/', PublicationCtrl.createPublication);
router.get('/', PublicationCtrl.findAllPublications);
router.get('/:id', PublicationCtrl.findPublicationById);
router.put('/:id', PublicationCtrl.updatePublication);
router.delete('/:id', PublicationCtrl.deletePublication);

module.exports = router;