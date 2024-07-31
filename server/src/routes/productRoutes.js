import express from 'express'
import { getAllProductsController, uploadProductController, updateProductController, markProductAsSoldController, markProductAsOnlineController, deleteProductController } from '../controllers/productController.js'
import { authenticateToken } from '../middlware/authToken.js'

export const productRouter = express.Router()

productRouter.get('/products', getAllProductsController)
productRouter.post('/products', authenticateToken, uploadProductController)
productRouter.put('/product/:id', authenticateToken, updateProductController)
productRouter.put('/product/:id/sold', authenticateToken, markProductAsSoldController)
productRouter.put('/product/:id/online', authenticateToken, markProductAsOnlineController)
productRouter.delete('/product/:id', authenticateToken, deleteProductController)
