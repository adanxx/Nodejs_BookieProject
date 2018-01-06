
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


app.listen(Port,()=>{
console.log(`Application running at port ${Port}`);
});

