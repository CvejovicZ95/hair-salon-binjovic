import { useState } from 'react';
import { toast } from 'react-toastify';
import { createSingleOrder } from '../api/orderApi';

export const useCreateOrder = () => {
    const [order, setOrder] = useState("");

    const createOrder = async ({
        name,
        email,
        adress,
        phoneNumber,
        productDetails,
    }) => {
        const success = handleErrors({
            name,
            email,
            adress,
            phoneNumber,
            productDetails
        });

        if (!success) return;

        try {
            const orderData = await createSingleOrder({
                name,
                email,
                adress,
                phoneNumber,
                productDetails
            });
            setOrder(orderData);
        } catch (error) {
            toast.error("Došlo je do greške: " + error.message);
            setOrder(null);
        }
    };

    function handleErrors({ name, email, adress, phoneNumber, productDetails }) {
        if (!name) {
            toast.error("Molimo unesite ime i prezime");
            return false;
        }
        if (!email) {
            toast.error("Molimo unesite e-mail adresu");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Molimo unesti ispravan format e-mail adrese");
            return false;
        }
        if (!adress) {
            toast.error("Molimo unesite adresu");
            return false;
        }
        if (!phoneNumber) {
            toast.error("Molimo unesite broj telefona");
            return false;
        }
        if (!productDetails || productDetails.length === 0) {
            toast.error("Molimo izaberite preparat");
            return false;
        }
        return true;
    }

    return { order, createOrder };
};