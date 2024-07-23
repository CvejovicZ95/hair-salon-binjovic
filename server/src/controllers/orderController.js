import { createOrder, getAllOrders, makeOrderAsSent, makeOrderProcessed } from "../service/orderService.js";

export const createOrderController = async (req, res) => {
    try {
        const { name, email, city, postalCode, address, phoneNumber, productDetails, processed, sent } = req.body

        const newOrder = await createOrder(name, email, city, postalCode, address, phoneNumber, productDetails, processed, sent)

        res.status(201).json(newOrder)
    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
}

export const getAllOrdersController = async (req, res) => {
    try {
        const allOrders = await getAllOrders()
        res.status(200).json(allOrders)
    } catch (error){
        res.status(500).json({ error: 'Server error'})
    }
}

export const updateOrderProcessedStatus = async (req, res) => {
    try {
        const orderId = req.params.id
        await makeOrderProcessed(orderId)
        res.status(200).json({ message: 'Order processed successfully'})
    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
}

export const updateOrderSentStatus = async (req, res) => {
    try {
        const orderId = req.params.id
        await makeOrderAsSent(orderId)
        res.status(200).json({ message: 'Order sent successfully'})
    } catch (error) {
        res.status(500).json({ error: 'Server error'})
    }
}
