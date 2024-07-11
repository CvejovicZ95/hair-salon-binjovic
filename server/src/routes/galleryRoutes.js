import express from 'express'
import { uploadImageToGallery, getAllImagesController } from '../controllers/galleryController.js'

export const galleryRouter = express.Router()

galleryRouter.get('/gallery', getAllImagesController)
galleryRouter.post('/gallery', uploadImageToGallery)