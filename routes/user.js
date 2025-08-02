
import express from 'express'
import { getUser } from '../controller/user.js'

const userRoutes = express.Router()

userRoutes.get('/getauser/:userId', getUser)

export default userRoutes