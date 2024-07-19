import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import './Shopcart.css';

export const Shopcart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to="/shop">
      <img src="shopcart.png" alt="shopcart" width={"40px"} />
      {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
    </Link>
  );
};