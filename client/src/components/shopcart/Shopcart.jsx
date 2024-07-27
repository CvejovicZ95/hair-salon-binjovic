import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext";
import './Shopcart.scss';

export const Shopcart = () => {
  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/shop">
      <img src="shopcart.png" alt="shopcart" width={"40px"} />
      {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
    </Link>
  );
};
