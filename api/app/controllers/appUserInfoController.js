const AppUserInfos = require('../models/app_user_info');
const formidable = require ('formidable');
const fs = require('fs'); 
const path = require('path')

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
            
            const { id } = req.params
            const appUserInfo = await AppUserInfos.findByPk(id, {
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
            // const appUserInfos = AppUserInfos.findOne({
            //     where: {
            //         app_user_id: recup id dans session
            //     }
            // })

            // if(appUserInfo){
            //     executer la création
            // }
            const form = new formidable.IncomingForm({multiples: true}); 
            await new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => { 
                    if(files.avatar){

                        const oldPath = files.avatar.path; 
                        const newPath = '/var/www/html/Project-Location-Vetements/front/public' 
                        + '/'+files.avatar.name 
                        const rawData = fs.readFileSync(oldPath) 
                        fs.writeFile(newPath, rawData, (err) => { 
                            if(err) console.log(err) 
                        }) 
                    }
                    

                    const newAppUserInfos = AppUserInfos.create({
                        first_name: fields.first_name,
                        last_name: fields.last_name,
                        address: fields.address,
                        mobile: fields.mobile,
                        if(files){
                            avatar: `/${files.image.name}`
                        },
                        app_user_id: Number(fields.app_user_id),
                    });
                    res.status(200).send({
                        info: newAppUserInfos,
                    })

                })
                // console.log(req);
                
            })
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    update: async (req, res, next) => {
        try {
            const { appUserInfosId } = req.params;
            const appUserInfo = await AppUserInfos.findByPk( appUserInfosId );
             // const appUserInfos = AppUserInfos.findOne({
            //     where: {
            //         app_user_id: recup id dans session
            //     }
            // })

            if(appUserInfo) {
                await new Promise((resolve, reject) => {
                    form.parse(req, (err, fields, files) => { 
                        if(files.avatar){
    
                            const oldPath = files.avatar.path; 
                            const newPath = '/var/www/html/Project-Location-Vetements/front/public' 
                            + '/'+files.avatar.name 
                            const rawData = fs.readFileSync(oldPath) 
                            fs.writeFile(newPath, rawData, (err) => { 
                                if(err) console.log(err) 
                            }) 
                        }
                        
    
                        const newAppUserInfos = AppUserInfos.update({
                            id: Number(fields.id),
                            first_name: fields.name,
                            last_name: fields.last_name,
                            address: Number(fields.address),
                            if(files){
                                avatar: `/${files.image.name}`
                            },
                            mobile: fields.size,
                            app_user_id: Number(fields.app_user_id),
                        });

                        res.status(200).send({
                            info: newAppUserInfos
                          })
                    })
                    // console.log(req);
                    
                })          
            }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    delete: async (req, res, next) => {
        try {
            const { id } = req.params;
            const appUserInfo = await AppUserInfos.findByPk( id );
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