import express from 'express'
import { uploadImageToGallery, getAllImagesController, deleteImageController } from '../controllers/galleryController.js'
import { authenticateToken } from '../middlware/authToken.js'

export const galleryRouter = express.Router()

galleryRouter.get('/gallery', getAllImagesController)
galleryRouter.post('/gallery', authenticateToken, uploadImageToGallery)
galleryRouter.delete('/gallery/:id', authenticateToken, deleteImageController )