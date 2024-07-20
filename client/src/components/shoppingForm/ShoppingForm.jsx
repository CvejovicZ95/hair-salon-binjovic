import React, { useContext, useState } from "react";
import "./ShoppingForm.css";
import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ShoppingForm = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  });

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price);
    return !isNaN(price) ? acc + price : acc;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      products: cartItems,
      total: totalPrice
    };
    // Handle order submission logic here, e.g., sending the order to a server
    console.log("Order submitted:", orderData);
  };

  return (
    <div className="cart-page">
      <Logo2 />
      <h1>Vaša korpa</h1>
      {cartItems.length === 0 ? (
        <p>Korpa je prazna</p>
      ) : (
        <div className="cart-items">
          <form className="order-form" onSubmit={handleSubmit}>
            <h2>Poručivanje na adresu</h2>
            <label>
              Ime i prezime:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Adresa:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Broj telefona:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <div className="cart-items-list">
              <h3>Izabrani proizvodi:</h3>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item.preparate} ({item.quantity})</p>
                  <p>{item.price} RSD</p>
                  <button onClick={() => removeFromCart(index)} className="remove-btn">Ukloni</button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h2>Ukupno: {totalPrice} RSD</h2>
            </div>
            <p className="delivery-note">Napomena: Trošak dostave plaća korisnik.</p>
            <button type="submit" className="submit-btn">Pošalji porudžbinu</button>
          </form>
        </div>
      )}
      <Link to={"/products"}><button className="back-to-products-btn">Nazad na preparate</button></Link>
      <Footer />
    </div>
  );
};
