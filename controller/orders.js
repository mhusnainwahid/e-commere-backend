import Orders from "../models/userOrders.js"

export const createOrders = async (req,res)=>{
    try {
        const order = await Orders.create(req.body)
        return res.status(200).json({
            message: "Order save successfully!",
            order
        })
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating order!",
            error: error.message
        })
    }
}

export const getOrders = async (req,res)=>{
    try {
        const {userId} = req.params
        const order = await Orders.find({ userId }).populate('items.productId');

        return res.status(200).json({order})
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while creating order!",
            error: error.message
        })
    }
}