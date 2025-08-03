import express from "express"
import dotenv from "dotenv"
import connectMongo from "./config/mongoDb.js"
import authRoutes from "./routes/auth.js"
import cors from 'cors'
import productRoutes from "./routes/product.js"
import generalRoutes from "./routes/generalRoutes.js"
import cartRoutes from "./routes/cart.js"
import userRoutes from "./routes/user.js"
import ordersRoutes from "./routes/orders.js"

const app = express()
dotenv.config()
connectMongo()
app.use(express.json())
app.use(cors())
app.use('/',authRoutes)
app.use('/',productRoutes)
app.use('/',generalRoutes)
app.use('/',cartRoutes)
app.use('/',userRoutes)
app.use('/',ordersRoutes)

const PORT = process.env.PORT || 8000


app.listen(PORT,()=>{
    console.log(`Server is running on Port:${PORT}`)
})