const defineAssociations = (models) => {
    const { User, Package, Url, Server } = models;

    // Uno a uno, 1 a 1
    // Url tiene un solo server
    Server.hasOne(Url, { foreignKey: "serverId" });

    // Uno a muchos, 1 a N
    // Package va a tener muchas urls
    Package.hasMany(Url, { foreignKey: "packageId" });

    // // Se añade una clave packageId a la tabla url
    Url.belongsTo(Package, { as: "packageData", foreignKey: "packageId" });

};

module.exports = defineAssociations;