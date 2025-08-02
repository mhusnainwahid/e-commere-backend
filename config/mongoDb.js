import mongoose from "mongoose"


const connectMongo =()=>{
    try {
        const connectDb = mongoose.connect('mongodb+srv://mhusnainwahid:husnain@cluster0.guzq2dl.mongodb.net/')
        console.log("Mongodb is connected")
    } catch (error) {
        console.log("Mongodb is not connected",error)
    }
}
export default connectMongo