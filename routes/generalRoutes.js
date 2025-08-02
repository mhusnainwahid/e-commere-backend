import express from 'express'
import multer from 'multer'
import { storage } from '../config/cloudinary.js'
import { imageUpload } from '../controller/general.controller.js'

const upload = multer({storage})

const generalRoutes = express.Router()

generalRoutes.post('/image',upload.single('image'), imageUpload)

export default generalRoutes