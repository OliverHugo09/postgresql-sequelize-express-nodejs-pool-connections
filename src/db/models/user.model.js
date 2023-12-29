const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

class User extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true
        }
    }
}

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    user_name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'user_name'
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'password'
    }
}

module.exports = { User, UserSchema };