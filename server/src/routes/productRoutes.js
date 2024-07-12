import express from 'express'
import { getAllProductsController, getProductsByCategoryController, uploadProductController, updateProductController, markProductAsSoldController, markProductAsOnlineController } from '../controllers/productController.js'

export const productRouter = express.Router()

productRouter.get('/products',getAllProductsController)
productRouter.get('/products/category/:category',getProductsByCategoryController)
productRouter.post('/products',uploadProductController)
productRouter.put('/product/:id',updateProductController)
productRouter.put('/product/:id/sold',markProductAsSoldController)
productRouter.put('/product/:id/online',markProductAsOnlineController)