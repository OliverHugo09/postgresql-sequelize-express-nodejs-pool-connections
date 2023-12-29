const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('./../db/models');

const sequelize = new Sequelize(
    config.dbName, // name database
    config.dbUser, // user database
    config.dbPassword, // password database
    {
        host: config.dbHost,
        dialect: 'postgres',
        pool: {
            max: 5, // Límite máximo de conexiones
            min: 1, // Número mínimo de conexiones
            acquire: 30000, // Tiempo máximo de espera en milisegundos
            idle: 10000 // Tiempo máximo en milisegundos que una conexión puede estar inactiva
        }
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida correctamente');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

// Esto eliminará y recreará las tablas en cada reinicio
// Force true: DROP TABLES
sequelize.sync({ force: true });

setupModels(sequelize);

module.exports = sequelize;