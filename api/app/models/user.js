const Sequelize = require('sequelize');
const client = require('../database');

class User extends Sequelize.Model {



};

User.init({
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    sequelize: client,
    tableName: "user",
    underscored: true
});

module.exports = User;




