

export const imageUpload = async(req,res)=>{
    try {
        return res.status(200).json({
            imageUrl: req.file.path
        })
    } catch (error) {
        return res.status(500).json({
            message:"Image not upload!",
            error:error.message
        })
    }
}

export const userImage = async(req,res)=>{
    try {
        console.log("Image received:", req.file); 
        return res.status(200).json({
            imageUrl: req.file.path
        });
    } catch (error) {
        console.log("Upload error:", error);
        return res.status(500).json({
            message:"Image not upload!",
            error:error.message
        });
    }
}
