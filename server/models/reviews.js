const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    postId: {
       type:String,
       require:true,
    },
    Username: {
       type:String,
       default:'userReview'
    },
    titleReview: {
        type:String,
        require:true,
        trim: true
     },
    review:{
        type:String,
        require: true,
        trim: true,
        Maxlength:200
    },
    rating:{
        type:Number,
        require: true,
        max: 12,
        min: 1
    }
},{timestamps:true});

const userReview = mongoose.model('Review', reviewSchema);

module.exports = {userReview};