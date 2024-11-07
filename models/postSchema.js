const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true ,
        maxLength : 50
    },
    body : {
        type : String , 
        required : true ,
        maxLength : 50
    } , 
    likes : [{
        type : mongoose.Schema.ObjectId,
        ref : "Like"                      //referrence to the like model
    }],
    comments : [{
        type : mongoose.Schema.ObjectId,
        ref : "Comment"                   //referrence to the comment model
    }]
})

module.exports = mongoose.model("postSchema" , postSchema);