const { Model, DataTypes, Sequelize } = require('sequelize');

const URL_TABLE = 'urls';

class Url extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: URL_TABLE,
            modelName: 'Url',
            timestamps: true
        }
    }
    static associate(models) {
        Url.hasOne(models.Server, { foreignKey: 'urlId' }); // Asumiendo que 'urlId' es la clave foránea en Server que hace referencia a Url
    }
}

const UrlSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    download_url: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'download_url'
    },
    serverId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'servers',
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },

}

module.exports = { Url, UrlSchema };