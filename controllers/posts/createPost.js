const postSchema = require("../../models/postSchema");

exports.createPost = async(req , res) => {

    try {

        const {title , body} = req.body;
        const Response = await postSchema.create({title , body});
        res.status(200).json({
            success : true , 
            data : Response , 
            message : "Post created successfully"
        })
        
    } catch (error){

        res.status(500).json({
            success : false , 
            data : null , 
            message : "Internal server issue"
        })
        
    }
}
