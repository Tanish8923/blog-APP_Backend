const commentSchema = require("../../models/commentSchema");
const postSchema = require("../../models/postSchema")

exports.createComment = async(req , res) => {
    try {
        //fetch data from req body
        const {body , post , user} = req.body;
        //create a comment object
        const comment = new commentSchema({
            body , post , user
        });
        //save new comment into the database
        const savedComment = await comment.save();

        //find the post by id , add the new comment to its comments array
        const updatePost = await postSchema.findByIdAndUpdate(post , {$push: {comments : savedComment._id}} , {new : true})
        //here we mention {new : true} because we want updated post if we not mention this then it return old post.
        .populate("comments")
        //populate the comments array with comment documents
        //currently we have comment id but we went actual document so using populate we can retrieve document which relate to that id.
        .exec();

        res.status(200).json({
            success : true ,
            data : updatePost ,
            message : "comment uploaded successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success : false , 
            data : null ,
            message : error.message,
        })
    }
}