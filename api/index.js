require('dotenv/types').config();

/*
npm install bcrypt express sequelize dotenv morgan router express-session email-validator pg express-fileupload momentjs browserify watchify multer cors 
*/

const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use('cors');

// Traduite les données récupérer dans le body en multipart
const multer = require('multer');
const bodyparser = multer();

// Récuperer les données pour les méthodes post et patch dans le body (req.body.)
app.use( express.urlencoded({extended: true}) );

// Informe multer de ne prendre que les données dans les input texte
app.use(bodyparser.none());

app.use(express.static('public'));

const router = require('./app/router');
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`On t\'écoute sur le port ${PORT}`);
});