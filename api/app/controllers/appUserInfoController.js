const AppUserInfos = require('../models/app_user_info');

const appUserInfoController = {

    getAll: async (req, res, next) => {
        try {
            const appUsersInfos = await AppUserInfos.findAll({
                include: [{all: true,  nested: true}]
            });

            res.send(appUsersInfos)
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            const { appUserInfosId } = req.params
            const appUserInfo = await AppUserInfos.findByPk(appUserInfosId, {
                include: [{all: true,  nested: true}]
            });

        if (appUserInfo) {
            return res.send(appUserInfo);
        }
        next();
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const newAppUserInfos = await AppUserInfos.create(req.body);
            res.send(newAppUserInfos);
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    update: async (req, res, next) => {
        try {
            const { appUserInfosId } = req.params;
            const appUserInfo = await AppUserInfos.findByPk( appUserInfosId );

            if(appUserInfo) {
                await appUserInfo.update(req.body);
                return res.send(appUserInfo)            
            }
            next()
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    delete: async (req, res, next) => {
        try {
            const { appUserInfosId } = req.params;
            const appUserInfo = await AppUserInfos.findByPk( AppUserInfosId );
            if(appUserInfo) {
                await appUserInfo.destroy();
                return res.send('Element supprimé')
            }
            next();
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    }

};

module.exports = appUserInfoController;