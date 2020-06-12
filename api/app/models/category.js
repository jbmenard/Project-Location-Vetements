const Sequelize = require('sequelize');
const client = require('../database');

class Category extends Sequelize.Model {

};

Category.init({
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    Sequelize: client,
    tableName: "category",
    underscored: true
    
})