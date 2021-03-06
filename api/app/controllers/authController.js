const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const AppUser = require('../models/app_user');

const authController = {
    
    signupAction: (req, res, next) => {
        // console.log(req.body);
        // 1. vérifier si les champs sont corrects !
        // (tous les champs doivent être non vides, l'email doit être un email, password doit être égal à passwordConfirm)
        let errors = []; // on se prépare un tableau pour stocker TOUTES les erreurs éventuelles (et donc, les afficher toutes en même temps)
      
        if (!req.body.password) {
          errors.push("Le mot de passe doit être renseigné");
        }
        if( !emailValidator.validate(req.body.email) ) {
          errors.push("L'email doit être valide");
        }
        if (req.body.password != req.body.passwordConfirm) {
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
            email: req.body.email
          }
        }).then( appUser => {
    
          if (appUser) {
            // si on a trouvé un utilisateur avec cet email
            // (return pour arrêter la fonction)
            errors.push('Un utilisateur existe déjà avec cet email');
            return res.send(errors);
            
          }
    
          // 3. si tout va bien, on enregistre le nouvel utilisateur en BDD (et on va hasher son mot de passe !)
          const hashedPassword = bcrypt.hashSync(req.body.password , 10);

          AppUser.create({
            email: req.body.email,
            password: hashedPassword
          }).then( appUser => {
            // console.log(user);
            // 4. soit on redirige vers /login
            res.redirect('/product');
    
            // 4alt. soit on log directement l'utilisateur et on redirige vers l'accueil
          });
    
        }).catch( err => {
          console.trace(err);
          res.status(500).send(err)
        });
        
      },
      
      // traiter le submit du formulaire de connexion
      loginAction: (req, res, next) => {
        // 1. tenter de récupérer un User via email 
        let errors = [];
        AppUser.findOne({
          where: {
            email: req.body.email
          }
        }).then( appUser => {
          //  - si il n'existe pas => erreur
          if (!appUser) {
            errors.push("Cet email n'existe pas");         
            return res.send(errors);
          }
    
          // 2. comparer le mot de passe fournie au Hash stocké dans la BDD
          const validPassword = bcrypt.compareSync(req.body.password, appUser.password);
          //  - si c'est pas bon => erreur
          if (!validPassword) {
            errors.push("Cet email ou le mot de passe n'existe pas");
            return res.send(errors);
          }
    
          // 3. si tout va bien (email et pwd correct) => on enregistre l'utilisateur dans la session
          req.session.appUser = appUser;
    
          // et pour finir, on redirige vers la page d'acceuil
          res.send(appUser)
    
        }).catch( err => {
          console.trace(err);
          res.status(500).send(err);
        });
    
      },
    
      logout: (req, res, next) => {
        delete req.session.appUser;
        res.send('Vous êtes déconnecté');
      }
    
};

module.exports = authController;