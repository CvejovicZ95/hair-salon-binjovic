import { Product } from "../models/productSchema.js"
import { logger } from "../../logger.js"

export const getAllProducts = async () => {
    try {
        const allProducts = await Product.find()
        return allProducts
    } catch (error){
        logger.error('Error fetching products', error.message)
        throw new Error ('Error fetching products')
    }
}

export const addProduct = async (name, preparate, quantity, price, inStock) => {
    try {
        const newProduct = new Product({name, preparate, quantity, price, inStock})
        await newProduct.save()

        logger.info('Product added successfully')
        return newProduct
    } catch (error) {
        logger.error('Error adding product:', error.message)
        throw new Error('Error adding product')
    }
}

export const updateProductById = async (productId, newData) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, newData, { new: true });
        if (!updatedProduct) {
            logger.error('Product not found:', productId);
            throw new Error('Product not found');
        }
        logger.info('Product updated successfully:', updatedProduct._id);
        return updatedProduct;
    } catch (error) {
        logger.error('Error updating product:', error.message);
        throw new Error('Error updating product');
    }
};


export const markProductAsSold = async (productId) => {
    try {
        const product = await Product.findById(productId);
        if (!product) {
            logger.error('Product not found:', productId);
            throw new Error('Product not found');
        }
        product.inStock = false;
        await product.save();
        logger.info('Product successfully marked as sold:', productId);
        return product;
    } catch (error) {
        logger.error('Error marking product as sold:', error.message);
        throw new Error('Error marking product as sold');
    }
};

export const markProductAsOnline = async (productId) => {
    try {
        const product = await Product.findById(productId);
        if (!product) {
            logger.error('Product not found:', productId);
            throw new Error('Product not found');
        }
        product.inStock = true;
        await product.save();
        logger.info('Product successfully marked as online again:', productId);
        return product;
    } catch (error) {
        logger.error('Error marking product as online:', error.message);
        throw new Error('Error marking product as online');
    }
};

export const deleteProduct = async (productId) => {
    try {
        const product = await Product.findByIdAndDelete(productId)
        if (!product) {
            logger.error('Product not found:', productId)
            throw new Error('Product not found')
        }
        logger.info('Product deleted successfully')
    } catch (error) {
        logger.error('Error while deleting product', error.message)
        throw new Error('Error deleting product')
    }
}