const express = require('express');
const router = express.Router();
const serversController = require('../controllers/server.controller');

router
    .get('/', serversController.get)
    .get('/:id', serversController.getById)
    .post('/', serversController.create)
    .put('/:id', serversController.update)
    .delete('/:id', serversController._delete);

module.exports = router;
