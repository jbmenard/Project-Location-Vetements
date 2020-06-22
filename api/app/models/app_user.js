const Sequelize = require('sequelize');
const client = require('../database');

class AppUser extends Sequelize.Model {



};

AppUser.init({
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
    tableName: "app_user",
    underscored: true
});

module.exports = AppUser;




