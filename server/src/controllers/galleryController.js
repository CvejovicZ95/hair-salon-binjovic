import { Gallery } from "../models/gallerySchema.js"
import { logger } from '../../logger.js'
import multer from "multer"

import { getAllImages } from "../service/galleryService.js"

export const getAllImagesController = async (req,res) => {
  try {
    const allImages = await getAllImages()
    res.status(200).json(allImages)
  } catch (error) {
    res.status(500).json({ error: 'Server error'})
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../server/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop())
  }
})
const upload = multer({ storage }).single('image')

export const uploadImageToGallery = async (req,res) => {
  try{
    upload(req, res, async function (err) {
      if( err instanceof multer.MulterError) {
        logger.error('Error uploading photo')
        return res.status(400).json({ message: 'Error uploading photo'})
      } else if (err) {
        logger.error('Server error uploading photo')
        return res.status(500).json({ message: 'Server error uploading photo'})
      }

      const { alt, category } = req.body
      const imagePath = req.file.filename 

      const newImage = new Gallery({
        imagePath,
        alt,
        category
      })

      await newImage.save()
      logger.info('Image uploaded!')
      res.status(201).json(newImage)
    })
  } catch (error) {
    logger.error('Error in uploadImageToGallery controller', error.message)
    res.status(500).json('Server error')
  }
}