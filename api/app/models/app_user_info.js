const Sequelize = require('sequelize');
const client = require('../database');

class AppUserInfo extends Sequelize.Model {


};

AppUserInfo.init({
    first_name : {
        type : Sequelize.TEXT,
    },
    last_name : {
        type : Sequelize.TEXT,
    },
    address : {
        type : Sequelize.TEXT,
    },
    mobile : {
        type : Sequelize.TEXT,
    },
    avatar : {
        type : Sequelize.TEXT,
    },
    certified : {
        type : Sequelize.BOOLEAN,
    },
    role : {
        type : Sequelize.TEXT,
    },
    app_user_id: {
        type : Sequelize.INTEGER,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
},{
    sequelize: client,
    tableName: "app_user_info",
    underscored : true,
});

module.exports = AppUserInfo;