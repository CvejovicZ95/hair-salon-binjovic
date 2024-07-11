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