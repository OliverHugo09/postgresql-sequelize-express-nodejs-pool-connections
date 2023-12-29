const { User, UserSchema } = require('./user.model');
const { Package, PackageSchema } = require('./package.model');
const { Url, UrlSchema } = require('./url.model');
const { Server, ServerSchema } = require('./server.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Package.init(PackageSchema, Package.config(sequelize));
    Url.init(UrlSchema, Url.config(sequelize));
    Server.init(ServerSchema, Server.config(sequelize));
}

module.exports = setupModels;