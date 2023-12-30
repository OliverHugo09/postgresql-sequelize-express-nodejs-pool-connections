const { Model, DataTypes, Sequelize } = require('sequelize');
const defineAssociations = require('../associations');

const PACKAGE_TABLE = 'packages';

class Package extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PACKAGE_TABLE,
            modelName: 'Package',
            timestamps: true
        }
    }
    static defineAssociations(models) {
        defineAssociations(models);
    }
}

const PackageSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    package_name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'package_name'
    },
    thumbnails_url: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'thumbnails_url'
    },

}

module.exports = { Package, PackageSchema };