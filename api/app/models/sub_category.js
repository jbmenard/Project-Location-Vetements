const Sequelize = require('sequelize');
const client = require('../database');

class SubCategory extends Sequelize.Model {

};

SubCategory.init( {
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
},
{
    sequelize: client,
    tableName: "sub_category",
    underscored: true

});

module.exports = SubCategory;