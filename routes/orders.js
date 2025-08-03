import express from 'express'
import { createOrders, getOrders } from '../controller/orders.js'


const ordersRoutes = express.Router()

ordersRoutes.post('/createorder', createOrders)
ordersRoutes.get('/getorders/:userId', getOrders)

export default ordersRoutes