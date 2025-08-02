import mongoose, { model, Schema } from "mongoose";


const productSchema = new Schema({
    name:{
        type: String
    },
    price:{
        type: Number
    },
    desc:{
        type: String
    },
    imageUrl:{
        type: String
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Product = model("Product",productSchema)
export default Product