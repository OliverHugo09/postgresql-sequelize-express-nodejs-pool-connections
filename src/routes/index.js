const express = require('express');

const usersRouter = require('./user.router');
const packagesRouter = require('./package.router');
const urlsRouter = require('./url.router');
const serversRouter = require('./server.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
    router.use('/packages', packagesRouter);
    router.use('/urls', urlsRouter);
    router.use('/servers', serversRouter);
}

module.exports = routerApi;
