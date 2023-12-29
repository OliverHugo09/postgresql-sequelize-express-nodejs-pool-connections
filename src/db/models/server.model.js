const { Model, DataTypes, Sequelize } = require('sequelize');

const SERVER_TABLE = 'servers';

class Server extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SERVER_TABLE,
            modelName: 'Server',
            timestamps: true
        }
    }
    static associate(models) {
        Server.belongsTo(models.Url, { foreignKey: 'urlId' }); // Asumiendo que 'urlId' es la clave foránea en Server que hace referencia a Url
    }
}

const ServerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    server_name: {
        allowNull: false,
        type: DataTypes.STRING,
    }
}

module.exports = { Server, ServerSchema };