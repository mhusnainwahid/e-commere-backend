import express from 'express'
import { createProduct, deleteProduct, getProduct, getYourProduct, updateProduct } from '../controller/product.js'

const productRoutes = express.Router()

productRoutes.post('/createproduct',createProduct)
productRoutes.get('/getproduct',getProduct)
productRoutes.delete('/:id',deleteProduct)
productRoutes.put('/:id',updateProduct)
productRoutes.get('/getyourproducts/:userId',getYourProduct)

export default productRoutes