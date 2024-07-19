import  React, { useContext } from "react"
import "./ShoppingForm.css"
import { Logo2 } from "../logo2/Logo2"
import {Footer} from "../layout/footer/Footer"
import { CartContext } from "../../context/CartContext"


export const ShoppingForm = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div className="cart-page">
            <Logo2/>
          <h1>Vaša korpa</h1>
          {cartItems.length === 0 ? (
            <p>Korpa je prazna</p>
          ) : (
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item.preparate} {item.quantity}</p>
                  <p>{item.price} RSD</p>
                </div>
              ))}
            </div>
          )}
          <Footer/>
        </div>
      );
    };