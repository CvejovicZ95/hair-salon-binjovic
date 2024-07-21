import React, { useContext, useState } from "react";
import "./ShoppingForm.css";
import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useCreateOrder } from "../../hooks/useCreateOrder";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const ShoppingForm = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city:"",
    postalCode:"",
    address: "",
    phone: ""
  });

  // eslint-disable-next-line
  const { order, createOrder } = useCreateOrder();
  // eslint-disable-next-line
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity);
    return !isNaN(price) && !isNaN(quantity) ? acc + price * quantity : acc;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validacija
    if (!formData.name) {
      toast.error("Molimo unesite ime i prezime");
      return;
    }
    if (!formData.email) {
      toast.error("Molimo unesite e-mail adresu");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Molimo uneti ispravan format e-mail adrese");
      return;
    }
    if (!formData.address) {
      toast.error("Molimo unesite adresu");
      return;
    }
    if (!formData.city) {
      toast.error("Molimo unesite grad");
      return;
    }
    if (!formData.postalCode) {
      toast.error("Molimo unesite poštanski broj");
      return;
    }
    if (!formData.phone) {
      toast.error("Molimo unesite broj telefona");
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Molimo izaberite preparate");
      return;
    }

    const orderData = {
      name: formData.name,
      email: formData.email,
      city: formData.city,
      postalCode: formData.postalCode,
      address: formData.address,
      phoneNumber: formData.phone,
      productDetails: cartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity
      }))
    };

    try {
      await createOrder(orderData);
      toast.success("Porudžbina je uspešno kreirana!");
      clearCart();
      //if u wanna navigate add timeout 
    } catch (error) {
      toast.error("Došlo je do greške prilikom slanja porudžbine");
    }
  };

  return (
    <div className="cart-page">
      <Logo2 />
      <h1>Vaša korpa</h1>
      {/*{cartItems.length === 0 ? (
        <p>Korpa je prazna</p>
      ) : (*/}
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
                
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                
              />
            </label>
            <label>
              Grad:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                
              />
            </label>
            <label>
              Poštanski broj:
              <input
                type="number"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                
              />
            </label>
            <label>
              Adresa:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                
              />
            </label>
            <label>
              Broj telefona:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <div className="cart-items-list">
              <h3>Izabrani proizvodi:</h3>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item.preparate} ({item.quantity} kom)</p>
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
          <ToastContainer/>
        </div>
     {/* )} */}
      <Link to={"/products"}><button className="back-to-products-btn">Nazad na preparate</button></Link>
      <Footer />
    </div>
  );
};
