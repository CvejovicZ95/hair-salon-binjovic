import express from 'express'
import { getAllServicesController, addServiceController, updateServiceController, deleteServiceController } from "../controllers/serviceController.js"

export const serviceRouter = express.Router()

serviceRouter.get('/services', getAllServicesController)
serviceRouter.post('/services',addServiceController)
serviceRouter.put('/services/:id',updateServiceController)
serviceRouter.put('/services/:id/delete',deleteServiceController)