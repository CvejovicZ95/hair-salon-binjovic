import { Gallery } from '../models/gallerySchema.js'
import { logger } from '../../logger.js'

export const getAllImages = async () => {
  try {
    const allImages = await Gallery.find()
    return allImages
  } catch (error) {
    logger.error('Error fetching images from gallery', error.message)
    throw new Error ('Error fetching images')
  }
}

export const deleteImage = async (id) => {
  try {
    const deletedImage = await Gallery.findByIdAndDelete(id)
    if (!deletedImage) {
      logger.error('Image not found')
      throw new Error('Image not found')
    }
    logger.info('Image deleted successfully')
  } catch (error) {
    logger.error('Error deleting image from gallery', error.message)
    throw new Error('Error deleting image')
  }
}