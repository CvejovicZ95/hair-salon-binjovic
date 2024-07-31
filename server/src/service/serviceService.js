import { Service } from '../models/serviceSchema.js'
import { logger } from '../../logger.js'

export const getAllServices = async () => {
  try {
    const allServices = await Service.find()
    return allServices
  } catch (error) {
    logger.error('Error fetcing services', error.message)
    throw new Error('Error fetching services')
  }
}

export const addService = async (name, price, category, deleted) => {
  try {
    const newService = new Service({ name, price, category, deleted })
    await newService.save()

    logger.info('New service created')
    return newService
  } catch (error) {
    logger.error('Error adding service', error.message)
    throw new Error('Error adding service')
  }
}

export const updateService = async (serviceId, newData) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(serviceId, newData, { new: true })
    if (!updatedService) {
      logger.error('Service not found', serviceId)
      throw new Error('Service not found')
    }
    logger.info('Service updated successfully', updatedService._id)
    return updatedService
  } catch (error) {
    logger.error('Error updating service', error.message)
    throw new Error('Error updating service')
  }
}

export const deleteService = async (serviceId) => {
  try {
    const deletedService = await Service.findById(serviceId)
    if (!deletedService) {
      logger.error('Service not found:', serviceId)
      throw new Error('Service not found')
    }
    deletedService.deleted = true
    await deletedService.save()
    logger.info('Service successfully marked as deleted:', serviceId)
    return deletedService
  } catch (error) {
    logger.error('Error marking service as deleted:', error.message)
    throw new Error('Error marking service as deleted')
  }
}
