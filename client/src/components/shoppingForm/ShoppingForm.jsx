import React, { useContext } from "react";
import "./ShoppingForm.css";
import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ShoppingForm = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price);
    return !isNaN(price) ? acc + price : acc;
  }, 0);

  return (
    <div className="cart-page">
      <Logo2 />
      <h1>Vaša korpa</h1>
      {cartItems.length === 0 ? (
        <p>Korpa je prazna</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.preparate} ({item.quantity})</p>
              <p>{item.price} RSD</p>
              <button onClick={() => removeFromCart(index)} className="remove-btn">Ukloni</button>
            </div>
          ))}
          <div className="cart-total">
            <h2>Ukupno: {totalPrice} RSD</h2>
          </div>
        </div>
      )}
      <Link to={"/products"}><button className="back-to-products-btn">Nazad na preparate</button></Link>
      <Footer />
    </div>
  );
};
