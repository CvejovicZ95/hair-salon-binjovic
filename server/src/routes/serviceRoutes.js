import express from 'express'
import { getAllServicesController, addServiceController, updateServiceController, deleteServiceController } from '../controllers/serviceController.js'
import { authenticateToken } from '../middlware/authToken.js'

export const serviceRouter = express.Router()

serviceRouter.get('/services', getAllServicesController)
serviceRouter.post('/services', authenticateToken, addServiceController)
serviceRouter.put('/services/:id', authenticateToken, updateServiceController)
serviceRouter.put('/services/:id/delete', authenticateToken, deleteServiceController)
