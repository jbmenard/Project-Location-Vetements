const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const formidable = require ('formidable');


const AppUser = require('../models/app_user');
const AppUserInfo = require('../models/app_user_info')

const authController = {
    
    signupAction: async (req, res, next) => {
        // 1. vérifier si les champs sont corrects !
        // (tous les champs doivent être non vides, l'email doit être un email, password doit être égal à passwordConfirm)
        let errors = []; // on se prépare un tableau pour stocker TOUTES les erreurs éventuelles (et donc, les afficher toutes en même temps)
        const form = new formidable.IncomingForm({multiples: true});
        await new Promise((resolve, reject) => {
          form.parse(req, (err, fields, files) => { 

            if (!fields.password) {
              errors.push("Le mot de passe doit être renseigné");
            }
            if( !emailValidator.validate(fields.email) ) {
              errors.push("L'email doit être valide");
            }
            if (fields.password != fields.passwordConfirm) {
              errors.push("Le mot de passe doit être égal à la confirmation");
            }
        
            // On vérifie le nombre d'erreus !
            if (errors.length) {
              // et le petit "return" pour arrêter la fonction
              return res.send(errors)
            }

            // 2. Vérifier si un utilisateur similaire (via son email) existe déjà en bdd (si oui, on redirige avec une erreur)
            AppUser.findOne({
              where: {
                email: fields.email
              }
            }).then( appUser => {
        
              if (appUser) {
                // si on a trouvé un utilisateur avec cet email
                // (return pour arrêter la fonction)
                errors.push('Un utilisateur existe déjà avec cet email');
                return res.send(errors);
                
              }
            
              const hashedPassword = bcrypt.hashSync(fields.password , 10);
        
              AppUser.create({
                email: fields.email,
                password: hashedPassword
              }).then( appUser => {
                // console.log(user);
                // 4. soit on redirige vers /login
                AppUserInfo.create({
                  app_user_id: appUser.id
                })


                res.send(appUser);
        
                // 4alt. soit on log directement l'utilisateur et on redirige vers l'accueil
              });
          })
          // console.log(req);
          
      })
        }).catch( err => {
          console.trace(err);
          res.status(500).send(err)
        });
        
      },
      
      // traiter le submit du formulaire de connexion
      loginAction: (req, res, next) => {
        // 1. tenter de récupérer un User via email 
        let errors = [];
        const form = new formidable.IncomingForm({multiples: true});
        form.parse(req, (err, fields, files) => {
          AppUser.findOne({
            where: {
              email: fields.email
            },
            include: [{
             all: true,
             nested: true,
            }]
          }).then( appUser => {
            //  - si il n'existe pas => erreur
            if (!appUser) {
              errors.push("Cet email n'existe pas");         
              return res.status(404).send({
                notFound: "Cet email ou ce mot de passe n'existe pas"
              });
            }
            // 2. comparer le mot de passe fournie au Hash stocké dans la BDD
            const validPassword = bcrypt.compareSync(fields.password, appUser.password);
            //  - si c'est pas bon => erreur
            if (!validPassword) {
              errors.push("Cet email ou le mot de passe n'existe pas");
              return res.status(404).send({
                notFound: "Email ou mot de passe inconnu"
              });
            }
            // 3. si tout va bien (email et pwd correct) => on enregistre l'utilisateur dans la session
            req.session.user = appUser;
            
            
            // et pour finir, on redirige vers la page d'acceuil
            res.status(200).send({
              user: req.session.user,
            })

          }).catch( err => {
            console.trace(err);
            res.status(500).send(err);
          });
    
        });
      },
    
      logout: (req, res, next) => {
        delete req.session.user;
        res.send('Vous êtes déconnecté');
      },

      isLogged: async (req, res, next) => {
        if (req.session.user) {
          console.log('ca marche');
          const user = await AppUser.findByPk(req.session.user.id, {include: [{all: true, nested: true}]})
            
          req.session.user = user;
          return res.status(200).send({
            user: req.session.user,
          })
        }
        res.status(404).send({
          notFound: "Vous n'êtes pas connecté"
        })
    
      }
    
};

module.exports = authController;