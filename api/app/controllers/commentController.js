
const Comment = require('../models/comment');
const formidable = require ('formidable');
const fs = require('fs'); 
const path = require('path') 

const commentController = {
    getAll: async (req, res, next) => {
        try {

            //1. récupérer mes users
            const comments = await Comment.findAll({
                include: [{all: true, nested: true}]
            });

            //2. renvoyer le resultat
            res.send(comments);
            
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
            
        }
    },

    getOne: async (req, res, next) => {
        try {
            //1. récupérer le bon user
            const commentId = req.params.id;
            const Comment = await Comment.findByPk(commentId, {
                include: [{all: true, nested: true}]
            });

            //2. la renvoyer si elle existe
            if (comment) {
                return res.send(comment);
            }
            next();

            //2bis. sinon : 404 
    
            
            
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    create: async ( req, res, next) => {
        try {
      
            const form = new formidable.IncomingForm({multiples: true}); 
            await new Promise((resolve, reject) => {
                form.parse(req, async (err, fields, files) => { 
                    
                    const newComment = await Comment.create({
                    content: fields.content,
                    product_id: Number(fields.product_id),
                    app_user_id: Number(fields.app_user_id),
                    });
                    
                    return res.send(newComment)
                })
            })
        
        

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },


    update: async ( req, res, next) => {
        try {
            //1. trouver le bon user via son id

            const commentId = req.params.id;
            const targetUser = await Comment.findByPk(commentId);

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
            const commentId = req.params.id;
            const targetUser = await Comment.findByPk(commentId);

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

module.exports = commentController; 