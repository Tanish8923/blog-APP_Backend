const Like = require("../../models/likeSchema");
const postSchema = require('../../models/postSchema');

exports.unlike = async(req , res) => {

    try {
        
        const {post , like} = req.body;
        await postSchema.findByIdAndUpdate(post , {$pull: {likes : like}} , {new : true});
        await Like.findByIdAndDelete(like);
        res.status(200).json({
            success : true ,
            message : "post unliked successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success : false , 
            message : error.message,
        })
    }

}