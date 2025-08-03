import express from 'express'
import multer from 'multer'
import { storage } from '../config/cloudinary.js'
import { imageUpload, userImage } from '../controller/general.controller.js'

const upload = multer({storage})

const generalRoutes = express.Router()

generalRoutes.post('/image',upload.single('image'), imageUpload)
generalRoutes.post('/userimage',upload.single('image'), userImage)

export default generalRoutes