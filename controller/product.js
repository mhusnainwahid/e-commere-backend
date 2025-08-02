import Product from "../models/product.js"


export const createProduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        return res.status(200).json({
            message:"Product create successfully!",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while creating product!",
            error:error.message
        })
    }
}

export const getProduct = async(req,res)=>{
    try {
        const product = await Product.find()
        return res.status(200).json({product})
    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while getting product!",
            error:error.message
        })
    }
}
export const getYourProduct = async(req,res)=>{
    try {
        const {userId} = req.params
        const product = await Product.find({ userId })
        return res.status(200).json({product})
    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while getting product!",
            error:error.message
        })
    }
}

export const cartProduct = async(req,res)=>{
    try {
        const {userId} = req.params
        const product = await Product.find({ userId })
        return res.status(200).json({product})
    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while getting product!",
            error:error.message
        })
    }
}

export const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        return res.status(200).json({
            message:"Product delete successfully!",
        })
    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while deleting product!",
            error:error.message
        })
    }
}

export const updateProduct = async(req,res)=>{
    try {
        const {id} =req.params
        const updateData = req.body
        const product = await Product.findByIdAndUpdate(id,updateData,{
            new:true
        })
        return res.status(200).json({
            message:"Product update successfully!",
            product
        })
    } catch (error) {
        return res.status(500).json({
            message:"An error occurred while updating product!",
            error:error.message
        })
    }
}