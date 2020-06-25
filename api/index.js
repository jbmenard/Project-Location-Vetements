require('dotenv').config();

const express = require('express');
const expressSession = require('express-session');
const morgan = require('morgan');
const cors = require('cors');

/*
npm install bcrypt express sequelize dotenv morgan router express-session email-validator pg express-fileupload momentjs browserify watchify multer cors 
*/

const app = express();

app.use(morgan('dev'));


app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST','PATCH','DELETE'],
    credentials: true // enable set cookie
}));

app.use(expressSession({
    resave: false,
    secret: "projetapotheoseoloc",
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (1000 * 60 * 60),
        httpOnly: true
    }
}))


// Traduite les données récupérer dans le body en multipart

// const bodyparser = multer();

// Récuperer les données pour les méthodes post et patch dans le body (req.body.)
app.use( express.urlencoded({extended: true}) );

// Informe multer de ne prendre que les données dans les input texte
// app.use(bodyparser.none());

app.use(express.static('public'));



const router = require('./app/router');
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`On t\'écoute sur le port ${PORT}`);
});