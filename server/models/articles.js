const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: {
       type:String,
       require:true,
       trim: true
    },
    Username: {
       type:String,
       default:'guestUser'
    },
    review:{
        type:String,
        require: true,
        trim: true,
        Maxlength:500
    },
    rating:{
        type:Number,
        require: true,
        max: 12,
        min: 1
    }
},{timestamps:true});

const Article = mongoose.model('Article', articleSchema);

module.exports = {Article};