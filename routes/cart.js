import express from 'express'
import { addToCart, deleteCartProducts, getCartProducts } from '../controller/cart.js'

const cartRoutes = express.Router()

cartRoutes.post('/addtocart',addToCart)
cartRoutes.get('/getcartproducts/:userId',getCartProducts)
cartRoutes.delete('/deletecartproducts/:id',deleteCartProducts)

export default cartRoutes