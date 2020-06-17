const Sequelize = require('sequelize');
const client = require('../database');

class UserInfo extends Sequelize.Model {


};

UserInfo.init({
    first_name : {
        type : Sequelize.TEXT,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    last_name : {
        type : Sequelize.TEXT,
        allowNull : true,
        validate : {
            notEmpty : false
        }
    },
    address : {
        type : Sequelize.TEXT,
        allowNull : true,
        validate : {
            notEmpty : false
        }
    },
    mobile : {
        type : Sequelize.TEXT,
        allowNull : true,
        validate : {
            notEmpty : false
        }
    },
    avatar : {
        type : Sequelize.TEXT,
        allowNull : true,
        validate : {
            notEmpty : false
        }
    },
    certified : {
        type : Sequelize.BOOLEAN,
        allowNull : false,  
        validate : {
            notEmpty : true  
        }
    },
    role : {
        type : Sequelize.TEXT,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    }
},{
    sequelize: client,
    tableName: "user_info",
    underscored : true,
});

module.exports = UserInfo;