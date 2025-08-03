
import User from "../models/auth.js";
import { updateProduct } from "./product.js";


export const getUser = async (req, res) => {
    try {
        const { userId } = req.params
        const user = await User.findById(userId)
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while getting a user!",
            error: error.message
        })
    }
}

export const editUser = async (req, res) => {
    try {
        const {userId} = req.params
        const updateData = req.body
        const user = await User.findByIdAndUpdate(userId,updateData,{
            new:true
        }
        )
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while edit a user!",
            error: error.message
        })
    }
}