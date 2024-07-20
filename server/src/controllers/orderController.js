import { createOrder, getAllOrders } from "../service/orderService.js";

export const createOrderController = async (req, res) => {
    try {
        const { name, email, adress, phoneNumber, productDetails } = req.body

        const newOrder = await createOrder(name, email, adress, phoneNumber, productDetails)

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
