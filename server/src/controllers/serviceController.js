import { getAllServices, addService, updateService, deleteService } from '../service/serviceService.js'

export const getAllServicesController = async (req, res) => {
  try {
    const allServices = await getAllServices()
    res.status(200).json(allServices)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const addServiceController = async (req, res) => {
  try {
    const { name, price, category, deleted } = req.body
    const newService = await addService(name, price, category, deleted)
    res.status(201).json(newService)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateServiceController = async (req, res) => {
  try {
    const serviceId = req.params.id
    const newData = req.body
    const updatedService = await updateService(serviceId, newData)
    res.status(200).json(updatedService)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const deleteServiceController = async (req, res) => {
  try {
    const serviceId = req.params.id
    await deleteService(serviceId)
    res.status(200).json({ message: 'Service deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}
