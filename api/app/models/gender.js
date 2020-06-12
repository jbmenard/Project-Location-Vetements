const Sequelize = require('sequelize');
const client = require('../database');

class Gender extends Sequelize.Model {

};

Gender.init( {
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
    tableName: "gender",
    underscored: true

});

module.exports = Gender;