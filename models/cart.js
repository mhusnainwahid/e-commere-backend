import mongoose, {model, Schema} from 'mongoose'

const cartSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity:{
        type :Number
    }
})

const Cart = model('Cart',cartSchema)
export default Cart