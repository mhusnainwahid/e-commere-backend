import mongoose from "mongoose"


const connectMongo =()=>{
    try {
        const connectDb = mongoose.connect(process.env.MONGO_URL)
        console.log("Mongodb is connected")
    } catch (error) {
        console.log("Mongodb is not connected",error)
    }
}
export default connectMongo