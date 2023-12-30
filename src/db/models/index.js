const { User, UserSchema } = require('./user.model');
const { Package, PackageSchema } = require('./package.model');
const { Url, UrlSchema } = require('./url.model');
const { Server, ServerSchema } = require('./server.model');

const defineAssociations = require('../associations');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Package.init(PackageSchema, Package.config(sequelize));
    Url.init(UrlSchema, Url.config(sequelize));
    Server.init(ServerSchema, Server.config(sequelize));
    // Obtiene los modelos para pasarlos a las asociaciones
    const models = {
        User,
        Package,
        Url,
        Server,
        // Otros modelos si es necesario
    };

    // Define las asociaciones
    defineAssociations(models);
}

module.exports = setupModels;