import { Order } from "../models/orderSchema.js";
import { Product } from "../models/productSchema.js";
import { logger } from "../../logger.js";
import { sendOrderConfirmation } from "../../mailgun.js";

export const createOrder = async (name, email, city, postalCode, address, phoneNumber, productDetails) => {
    try {
        const productIds = productDetails.map(detail => detail.productId);
        const products = await Product.find({ '_id': { $in: productIds } });

        if (products.length !== productIds.length) {
            throw new Error('One or more products not found');
        }

        const productMap = new Map(products.map(p => [p._id.toString(), p]));

        const newOrder = new Order({
            name,
            email,
            city,
            postalCode,
            address,
            phoneNumber,
            products: productDetails
        });

        await newOrder.save();

        const orderDetails = `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
        <h2 style="color: #2e6da4; border-bottom: 2px solid #2e6da4; padding-bottom: 10px;">Broj porudžbine: ${newOrder._id}</h2>
        
        <h3 style="color: #2e6da4; margin-top: 20px;">Detalji isporuke:</h3>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phoneNumber}</p>
        <p><strong>Adresa:</strong> ${address}</p>
        <p><strong>Poštanski broj:</strong> ${postalCode}</p>
        <p><strong>Grad:</strong> ${city}</p>
        
        <h3 style="color: #2e6da4; margin-top: 20px;">Naručeni preparati:</h3>
        <ul style="list-style-type: none; padding-left: 0;">
            ${newOrder.products.map(p => {
                const product = productMap.get(p.productId.toString());
                return `
                    <li style="background: #f9f9f9; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                        ${product ? `${product.preparate}: ${product.price} RSD (po preparatu) - količina: ${p.quantity}` : 'Nepoznat proizvod'}
                    </li>
                `;
            }).join('')}
        </ul>
        
        <h1 style="color: #2e6da4; text-align: center; margin-top: 30px;">Hvala Vam na ukazanom poverenju</h1>
        <h2 style="color: #2e6da4; text-align: center;">Vaš 'Hair Salon Binjovic'</h2>
        </div>
    `;



        await sendOrderConfirmation({ email: newOrder.email, details: orderDetails });

        logger.info('New order created successfully');
        return newOrder;
    } catch (error) {
        logger.error('Error creating order', error.message);
        throw new Error('Error creating order');
    }
}

export const getAllOrders = async () => {
    try {
        const allOrders = await Order.find().populate('products.productId');
        return allOrders;
    } catch (error) {
        logger.error('Error getting all orders', error.message);
        throw new Error('Error getting all orders');
    }
}