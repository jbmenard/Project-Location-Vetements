
const subCategory = require('../models/sub_category');

const subCategoryController = {
    getAll: async (req, res, next) => {
        try {

            //1. récupérer mes users
            const subcategories = await subCategory.findAll({
                include: [{all: true, nested: true}]
            });

            //2. renvoyer le resultat
            res.send(subcategories);
            
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
            
        }
    },

    getOne: async (req, res, next) => {
        try {
            //1. récupérer le bon user
            const subCategoryId = req.params.id;
            const subCategory = await subCategory.findByPk(subCategoryId, {
                include: [{all: true, nested: true}]
            });

            //2. la renvoyer si elle existe
            if (subCategory) {
                return res.send(subCategory);
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
      //1. on récupère les infos du body
      // const title = req.body.title;
      // const position = req.body.position;
      // const color = req.body.color;

      // 1bis : plutôt que d'écrire 3 lignes, on peut déconstruire l'objet
      //const { title, position, color } = req.body;  

      //2. on crée une liste (+save)
      // const newList = await List.create({title, position, color});

      // 2bis. si on déconstruit req.body pour le reconstruire tel quel juste après, autant passer directement req.body lui meme !!
      // à ce moment là, c'est Sequelize (et la BDD) qui vont faire les vérif (en fait, grace au NOT NULL, on récupèrera une erreur !)
         
      const newSubCategory = await subCategory.create(req.body);

      //3. on envoie la nouvelle liste

      res.send(newSubCategory)
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    update: async ( req, res, next) => {
        try {
            //1. trouver le bon user via son id

            const subCategoryId = req.params.id;
            const targetUser = await subCategory.findByPk(subCategoryId);

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
            const subCategoryId = req.params.id;
            const targetSubCategory = await subCategory.findByPk(subCategoryId);

            // 2. si elle existe on supprime, sinon 404
            if (targetSubCategory) {
                await targetSubCategory.destroy();
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

module.exports = subCategoryController; 