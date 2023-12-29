const express = require('express');
const router = express.Router();
const urlsController = require('../controllers/url.controller');

router
    .get('/', urlsController.get)
    .get('/:id', urlsController.getById)
    .post('/', urlsController.create)
    .put('/:id', urlsController.update)
    .delete('/:id', urlsController._delete);

module.exports = router;
