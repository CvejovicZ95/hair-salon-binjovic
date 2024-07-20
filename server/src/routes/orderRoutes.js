import express from 'express'
import { createOrderController, getAllOrdersController } from '../controllers/orderController.js'

export const orderRouter = express.Router()

orderRouter.get('/orders', getAllOrdersController)
orderRouter.post('/orders',createOrderController)