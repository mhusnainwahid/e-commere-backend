import mongoose, { model, Schema } from 'mongoose'

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  items: [
    {
      name:{
        type: String
      },
      imageUrl:{
        type: String
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: Number,
      price: Number,
      vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
    }
  ],
  totalAmount: {
    type: Number,
  },
  status: {
    type: String,
    default: 'Pending'
  }
}, { timestamps: true })

const Orders = model('Orders', orderSchema)
export default Orders
