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
        <h2>Broj porudžbine: ${newOrder._id}</h2>
        
        <h3>Detalji isporuke:</h3>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phoneNumber}</p>
        <p><strong>Adresa:</strong> ${address}</p>
        <p><strong>Poštanski broj:</strong> ${postalCode}</p>
        <p><strong>Grad:</strong> ${city}</p>
        
        <h3>Naručeni preparati:</h3>
        <ul>
            ${newOrder.products.map(p => {
                const product = productMap.get(p.productId.toString());
                return `
                    <li>
                        ${product ? `${product.category} - ${product.preparate} - ${product.name} - ${product.price} RSD - količina: ${p.quantity}` : 'Nepoznat proizvod'}
                    </li>
                `;
            }).join('')}
        </ul>
        <h1>Hvala Vam na ukazanom poverenju<h1>
        <h2>Vaš 'Hair Salon Binjovic'<h2>
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

/*const testSendOrderConfirmation = async () => {
    try {
        const email = 'cvejovicz@gmail.com';
        const details = 'Order ID: 12345\nProducts:\nProduct1 - 2\nProduct2 - 1\nTotal Price: $50.00';

        await sendOrderConfirmation({ email, details });
        console.log('Test email sent successfully');
    } catch (error) {
        console.error('Test email failed:', error);
    }
};

testSendOrderConfirmation();*/
