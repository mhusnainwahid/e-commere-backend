import { model, Schema } from "mongoose";


const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type:String
    },
    token:{
        type:String
    },
    role:{
        type: String
    }
})

const User = model("user",userSchema)
export default User