import { Order } from "../models/orderSchema.js";
import { Product } from "../models/productSchema.js";
import { logger } from "../../logger.js";

export const createOrder = async (name, email, adress, phoneNumber, productIds) => {
    try {
        const products = await Product.find({ '_id': { $in: productIds } });
        if (products.length !== productIds.length) {
            throw new Error('One or more products not found');
        }

        const newOrder = new Order({
            name,
            email,
            adress,
            phoneNumber,
            products: products.map(product => product._id) 
        });

        await newOrder.save();

        logger.info('New order created successfully');
        return newOrder;
    } catch (error) {
        logger.error('Error creating order', error.message);
        throw new Error('Error creating order');
    }
}

export const getAllOrders = async () => {
    try {
        const allOrders = await Order.find().populate('products');
        return allOrders;
    } catch (error) {
        logger.error('Error getting all orders', error.message);
        throw new Error('Error getting all orders');
    }
}