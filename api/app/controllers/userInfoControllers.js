const UserInfo = require('../models/user_info');

const userInfoController = {

    getAll: async (req, res, next) => {
        try {
            const usersInfos = await UserInfos.findAll({
                include: [{all: true,  nested: true}]
            });

            res.send(userInfos)
        } catch (error) {
            race(error);
            res.status(500).send(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const { userInfosId } = req.params
            const userInfo = await UserInfos.findByPk(userInfosId, {
                include: [{all: true,  nested: true}]
            });

        if (userInfo) {
            return res.send(userInfo);
        }
        next();
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const newUserInfos = await UserInfo.create(req.body);
            res.send(newUserInfos);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    update: async (req, res, next) => {
        try {
            const { userInfosId } = req.params;
            const userInfo = await UserInfos.findByPk( userInfosId );

            if(userInfo) {
                await userInfo.update(req.body);
                return res.send(userInfo)            
            }
            next()
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    delete: async (req, res, next) => {
        try {
            const { userInfosId } = req.params;
            const userInfo = await UserInfos.findByPk( userInfosId );
            if(userInfo) {
                await userInfo.destroy();
                return res.send('Element supprimé')
            }
            next();
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }



};

module.exports = userInfoController;