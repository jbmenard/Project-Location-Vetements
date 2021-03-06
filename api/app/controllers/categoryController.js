const Category = require ('../models/category');

const categoryController = {
    getAll: async (req, res, next) => {
        try {
            const category = await Category.findAll({
                include: [{all: true, nested: true}]
            });
            res.send(category);

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
            
        }
    },

    getOne: async (req, res, next) => {
        try {
            const categoryId = req.params.id;
            const category = await Category.findByPk(categoryId, {
                include: [{all: true, nested: true}]
            });

            if (category) {
                res.send(category);
            }else {
                next();
            }

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const newCategory = await Category.create(req.body);

            res.send(newCategory);

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const categoryId = req.params.id;
            const targetCategory = await Category.findByPk(categoryId);

            if (targetCategory) {
                await targetCategory.update(req.body);
                res.send(targetCategory);
           
            }else {
                next();
            }

        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const categoryId = req.params.id;
            const targetCategory = await Category.findByPk(categoryId);

            if (targetCategory) {
                await targetCategory.destroy();
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

module.exports = categoryController;