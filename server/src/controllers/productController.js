import { getAllProducts, getProductsByCategory, addProduct, updateProductById, markProductAsSold, markProductAsOnline } from "../service/productService.js"

export const getAllProductsController = async (req, res) => {
    try {
        const allProducts = await getAllProducts()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).json({error :'Server error'})
    }
}

export const getProductsByCategoryController = async (req, res) => {
    try {
        const category = req.params.category
        const products = await getProductsByCategory(category)
        if (!products || products.length === 0) {
            return res.status(404).json({ error: 'Products not found'})
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
}

export const uploadProductController = async (req, res) => {
    try {
        const {name, preparate, category, quantity, price, inStock} = req.body
        const newProduct = await addProduct(name, preparate, category, quantity, price, inStock)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(500).json('Server error')
    }
}

export const updateProductController = async (req, res) => {
    try {
        const productId = req.params.id
        const newData = req.body
        const updatedProduct = await updateProductById(productId, newData)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json('Server error')
    }
}

export const markProductAsSoldController = async (req, res) => {
    try {
        const productId = req.params.id
        await markProductAsSold(productId)
        res.status(200).json({ message: 'Product marked as sold successfully'})
    } catch (error) {
        res.status(500).json('Server error')
    }
}

export const markProductAsOnlineController = async (req, res) => {
    try {
        const productId = req.params.id
        await markProductAsOnline(productId)
        res.status(200).json({ message: 'Product marked as online successfully'})
    } catch (error) {
        res.status(500).json('Server error')
    }
}