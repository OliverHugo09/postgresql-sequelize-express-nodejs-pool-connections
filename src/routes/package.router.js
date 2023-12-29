const express = require('express');
const router = express.Router();
const packagesController = require('../controllers/package.controller');

router
    .get('/', packagesController.get)
    .get('/:id', packagesController.getById)
    .post('/', packagesController.create)
    .put('/:id', packagesController.update)
    .delete('/:id', packagesController._delete);

module.exports = router;
