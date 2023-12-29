const defineAssociations = (models) => {
    const { User, Package, Url, Server } = models;

    // Define tus asociaciones aquí
    Package.belongsToMany(Url, { through: 'packages_list', foreignKey: 'packageId', as: 'urls' });
    Url.belongsToMany(Package, { through: 'packages_list', foreignKey: 'urlId', as: 'packages' });
    Url.hasOne(Server, { as: "server", foreignKey: "serverId" });
    Server.belongsTo(Url, { as: "url", foreignKey: "serverId" });
};

module.exports = defineAssociations;