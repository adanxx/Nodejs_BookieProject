
/* Downloading the various npm-package to setup the application*/
const express = require("express");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const moment = require("moment");
const config =  require("./config/config").get(process.env.NODE_ENV);

/* setting up express-server*/
const app = express();
/* The Port-setup for our application during the development-stage*/
const Port = process.env.Port || 3000;


/* Hbs-setup*/
app.engine('hbs', hbs({
    extname:'hbs',
    defaultLayout:'main',
    layoutsDir:__dirname +'./../views/layouts',
    partialsDir:__dirname +'./../views/partials'
}));
app.set('view engine', 'hbs');

/* Setting middelware for static-files*/
app.use('/css', express.static(__dirname + './../public/css'));
app.use('/js', express.static(__dirname + './../public/js'));





/* The application-route setup*/
app.get('/', (req, res)=>{
    res.render('Home');
});















/* Setting-up server-port*/
app.listen(Port,()=>{
console.log(`Application running at port ${Port}`);
});

