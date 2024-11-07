const postSchema = require("../../models/postSchema")

exports.getPost = async(req , res) => {
    try {
        
        const response = await postSchema.find({}).populate("comments").populate("likes").exec();
        if(!response){
            res.status(300).json({
                success : false ,
                data : null ,
                message : "No data found"
            })
        }else{
            res.status(200).json({
                success : true ,
                data : response ,
                message : "Data fetched successfully"
            })
        }

    } catch (error) {
        
        res.status(500).json({
            success : false ,
            data : null ,
            message : error.message
        })
    }
}