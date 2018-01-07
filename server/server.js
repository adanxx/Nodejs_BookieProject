
/* Downloading the various npm-package to setup the application*/
const express = require("express");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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


/* Setting-up the mongoose and database-connection*/
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

/* Setting-up the model-schema for database-table*/
const {Article} = require('./models/articles');


/* Setting middelware for static-files*/
app.use('/css', express.static(__dirname + './../public/css'));
app.use('/js', express.static(__dirname + './../public/js'));
/*setting up the json-middelware*/
app.use(bodyParser.json());



/* GET: The application-route setup*/
app.get('/', (req, res)=>{
    res.render('Home');
});

app.get('/articles',(req, res)=>{
  res.render('articles-page');
});

/*POST-request from the articles-form*/
app.post('/api/Add_article',(req, res)=>{
   
    const article = new Article({
         title:req.body.title,
         review:req.body.review,
         rating:req.body.rating
    });

    article.save((err, data)=>{
        if(err) res.status(400).send(err);
        res.status(200).send('Data Saved!');
    })

})















/* Setting-up server-port*/
app.listen(config.PORT,()=>{
console.log(`Application running at port ${config.PORT}`);
});

