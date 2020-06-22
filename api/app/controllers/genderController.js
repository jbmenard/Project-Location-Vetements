const Gender = require('../models/gender');

const genderController = {
    getAll : async (req, res, next) => {
        try {
            const genders = await Gender.findAll({
                include : [{all: true, nested: true}]
            });

            res.send(genders)
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    getOne : async (req, res, next) => {
        try {
            const genderId = req.params.id;
            const gender = await Gender.findByPk(genderId,{
                inclue : [{all:true , nested:true}]
            });

            if(gender){
                return res.send(gender)
            }
            next();
        } catch (error){
            console.log(error);
            res.status(500).send(error)
        }
    },

    create : async (req, res, next) => {
        try {
            const newGender = await Gender.create(req.body);
            res.send(newGender);
        }catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    update : async (req, res, next) => {
        try{
            const genderId = req.params.id;
            const targetGender = await Gender.findByPk(genderId);

            if(targetGender) {
                await targetGender.update(req.body);
                res.send(targetGender);
            }
            else{
                next();
            }
        } catch(error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    delete : async (req, res, next) => {
        try{
            const genderId = req.params.id;
            const targetGender = await Gender.findByPk(genderId);
            if(targetGender){
                await targetGender.destroy();
                res.send("ok")
            }else{
                next();
            }
        }catch(error) {
            console.trace(error);
            res.status(500).send(error)
        }
    }
};

module.exports = genderController;