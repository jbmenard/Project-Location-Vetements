
const User = require('../models/user');

const userController = {
    getAll: async (req, res, next) => {
        try {

            //1. récupérer mes users
            const users = await User.findAll({
                include: [{all: true, nested: true}]
            });

            //2. renvoyer le resultat
            console.log(req.session)
            res.send(users);
            
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
            
        }
    },

    getOne: async (req, res, next) => {
        try {
            //1. récupérer le bon user
            const userId = req.params.id;
            const user = await User.findByPk(userId, {
                include: [{all: true, nested: true}]
            });

            //2. la renvoyer si elle existe
            if (user) {
                return res.send(user);
            }
            next();

            //2bis. sinon : 404 
    
            
            
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    update: async ( req, res, next) => {
        try {
            //1. trouver le bon user via son id

            const userId = req.params.id;
            const targetUser = await User.findByPk(userId);

            //2. si il existe => mise à jour

            if (targetUser) {
                await targetUser.update(req.body);
            /* Versions alternatives */
            // ALT1 : utiliser .set() PUIS .save()
            // targetList.set(req.body);
            // await targetList.save();

            // ALT2 : utiliser chaque propriété de body PUIS .save()
            // DEPRECIE PAR SEQUELIZE => A EVITER
            // targetList.title = req.body.title;
            // targetList.position = req.body.position;
            // await targetList.save();

            
            // 3. renvoyer la liste mise à jour
            res.send(targetUser);
            }
            //2bis. sinon => 404
            else {
                next();
            }
            
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            //1. trouver le bon user via son ID
            const userId = req.params.id;
            const targetUser = await User.findByPk(userId);

            // 2. si elle existe on supprime, sinon 404
            if (targetUser) {
                await targetUser.destroy();
                //3. renvoyer un message simple pour dire que l'opération a reussi
                res.send("ok");
            }else {
                next();

            }
        } catch (error) {
             console.trace(error);
             res.status(500).send(error);
        }
    }
};

module.exports = userController; 

