import express from 'express'
import { getAllProductsController, uploadProductController, updateProductController, markProductAsSoldController, markProductAsOnlineController, deleteProductController } from '../controllers/productController.js'

export const productRouter = express.Router()

productRouter.get('/products',getAllProductsController)
productRouter.post('/products',uploadProductController)
productRouter.put('/product/:id',updateProductController)
productRouter.put('/product/:id/sold',markProductAsSoldController)
productRouter.put('/product/:id/online',markProductAsOnlineController)
productRouter.delete('/product/:id', deleteProductController)