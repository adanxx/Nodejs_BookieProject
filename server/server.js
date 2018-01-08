
/* Downloading the various npm-package to setup the application*/
const express = require("express");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const moment = require("moment");
const config = require("./config/config").get(process.env.NODE_ENV);

/* setting up express-server*/
const app = express();
/* The Port-setup for our application during the development-stage*/
const Port = process.env.Port || 3000;


/* Hbs-setup*/
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + './../views/layouts',
    partialsDir: __dirname + './../views/partials'
}));
app.set('view engine', 'hbs');


/* Setting-up the mongoose and database-connection*/
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

/* Setting-up the model-schema for database-table*/
const {Article} = require('./models/articles');
const {userReview} = require('./models/reviews');


/* Setting middelware for static-files*/
app.use('/css', express.static(__dirname + './../public/css'));
app.use('/js', express.static(__dirname + './../public/js'));
/*setting up the json-middelware*/
app.use(bodyParser.json());



/* GET: The application-route setup*/
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/galleri', (req, res) => {
    res.render('galleri');
});


app.get('/articles-view', (req, res) => {

    Article.find().sort({ _id: 'asc' }).limit(10).exec((err, doc) => {
        if (err) return res.status(400).send(err);

        res.status(200).render('articles', {
            articles: doc
        });
    });
});

app.get('/articles', (req, res) => {
    res.render('articles-form');
});

app.get('/article/:id', (req, res) => {
    Article.findById(req.params.id, (err, data) => {

        const id= req.params.id;
        if (err) return res.status(400).send(err);

        userReview.find({'postId':id}).limit(10).exec((err, reviews)=>{

            res.render('article-view', {
                date: moment(data.createdAt).format('MM/DD/YY'),
                data,
                reviews
            });
        });  
    });
});



/*POST-request from the articles/review-form*/
app.post('/api/Add_article', (req, res) => {

    const article = new Article({
        title: req.body.title,
        review: req.body.review,
        rating: req.body.rating
    });

    article.save((err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send('Data Saved!');
    });
});

app.post('/api/add_review', (req, res) => {

    const review = new userReview({
        postId: req.body.id,
        titleReview: req.body.title,
        review: req.body.review,
        rating: req.body.rating
    });

    review.save((err, doc)=>{
        if (err) return res.status(400).send(err);
        res.status(200).send();
    });
});














/* Setting-up server-port*/
app.listen(config.PORT, () => {
    console.log(`Application running at port ${config.PORT}`);
});

