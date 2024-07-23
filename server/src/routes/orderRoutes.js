import express from 'express'
import { createOrderController, getAllOrdersController, updateOrderProcessedStatus, updateOrderSentStatus } from '../controllers/orderController.js'

export const orderRouter = express.Router()

orderRouter.get('/orders', getAllOrdersController)
orderRouter.post('/orders',createOrderController)
orderRouter.put('/orders/processOrder/:id',updateOrderProcessedStatus)
orderRouter.put('/orders/sentOrder/:id', updateOrderSentStatus)