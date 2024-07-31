import express from 'express'
import { createOrderController, getAllOrdersController, updateOrderProcessedStatus, updateOrderSentStatus } from '../controllers/orderController.js'
import { authenticateToken } from '../middlware/authToken.js'

export const orderRouter = express.Router()

orderRouter.get('/orders', authenticateToken, getAllOrdersController)
orderRouter.post('/orders', createOrderController)
orderRouter.put('/orders/processOrder/:id', authenticateToken, updateOrderProcessedStatus)
orderRouter.put('/orders/sentOrder/:id', authenticateToken, updateOrderSentStatus)
