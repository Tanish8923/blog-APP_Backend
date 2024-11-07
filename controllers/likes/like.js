const Like = require("../../models/likeSchema");
const postSchema = require("../../models/postSchema");

exports.like = async (req , res) => {

    try {
        
        const {post , user} = req.body;
        const newLike = new Like({

            post , user

        })
        const saveLike = await newLike.save();
    
        const updatePost = await postSchema.findByIdAndUpdate(post , {$push: {likes : saveLike._id}} , {new : true})
        .populate("likes").exec();

        res.status(200).json({
            success : true , 
            data : updatePost , 
            message : "post liked successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success : false ,
            data : null , 
            message : error.message,
        })
    }
}