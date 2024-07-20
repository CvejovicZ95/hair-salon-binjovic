import React from "react";
import { useGetOrder } from "../../hooks/useGetOrders";
import "./OrderInfo.css";

export const OrderInfo = () => {
    const { allOrders } = useGetOrder();

    return (
        <div>
            <h1>Informacije o porudžbinama</h1>
            {allOrders.length === 0 ? (
                <p>Nema porudžbina</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Email</th>
                            <th>Adresa</th>
                            <th>Broj telefona</th>
                            <th>Proizvodi</th>
                            <th>Datum kreiranja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((order) => (
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.adress}</td>
                                <td>{order.phoneNumber}</td>
                                <td>
                                    {order.products.map((product, index) => (
                                        <div key={`${product.productId}-${index}`}>
                                            Proizvod: {product.productId.preparate} ({product.productId.price} rsd) - Količina: {product.quantity}
                                        </div>
                                    ))}
                                </td>
                                <td>{new Date(order.created_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
