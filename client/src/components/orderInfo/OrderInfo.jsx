import React from "react";
import { Logo2 } from "../logo2/Logo2";
import { useGetOrder } from "../../hooks/useGetOrders";
import { useLogoutAdmin } from "../../hooks/useAdminLoginLogout";
import { Link } from "react-router-dom";
import "./OrderInfo.css";

export const OrderInfo = () => {
    const { allOrders } = useGetOrder();
    const { logoutHandler } = useLogoutAdmin()

    return (
        <div>
            <div className="logo-logout">
              <Logo2/>
              <Link to={'/'}><button onClick={logoutHandler}>Izloguj se</button> </Link> 
            </div>
            
            <h1>Informacije o porudžbinama</h1>
            {allOrders.length === 0 ? (
                <p>Nema porudžbina</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Email</th>
                            <th>Grad</th>
                            <th>Poštanski broj</th>
                            <th>Adresa</th>
                            <th>Broj telefona</th>
                            <th>Proizvodi</th>
                            <th>Datum kreiranja</th>
                            <th>Obrađena / Poslata</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((order) => (
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.city}</td>
                                <td>{order.postalCode}</td>
                                <td>{order.address}</td>
                                <td>{order.phoneNumber}</td>
                                <td>
                                    {order.products.map((product, index) => (
                                        <div key={`${product.productId}-${index}`}>
                                            Proizvod: {product.productId.preparate} ({product.productId.price} rsd) - Količina: {product.quantity}
                                        </div>
                                    ))}
                                </td>
                                <td>{new Date(order.created_at).toLocaleString()}</td>
                                <td>
                                    <button className="order-btn">Da</button>
                                    <button className="order-btn">Da</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
