
import express from 'express'
import { editUser, getUser } from '../controller/user.js'

const userRoutes = express.Router()

userRoutes.get('/getauser/:userId', getUser)
userRoutes.put('/editauser/:userId', editUser)

export default userRoutes