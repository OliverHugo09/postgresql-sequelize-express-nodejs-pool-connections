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
    static defineAssociations(models) {
        defineAssociations(models);
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