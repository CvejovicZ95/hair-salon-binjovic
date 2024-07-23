import React from "react";
import { Layout } from "./components/layout/Layout";
import { Gallery } from "./components/gallery/Gallery";
import { ReservationPage } from "./components/reservation/ReservationPage";
import { Services } from "./components/services/Services";
import { Products } from "./components/products/Products"
import { ShoppingForm } from "./components/shoppingForm/ShoppingForm";
import { AdminLogin } from "./components/admin/AdmingLogin";
import { OrderInfo } from "./components/orderInfo/OrderInfo"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>

      <Route path="/gallery" element ={<Gallery/>}/>

      <Route path="/reservation" element = {<ReservationPage/>}/>

      <Route path="/services" element = {<Services/>}/>

      <Route path="/products" element = {<Products/>}/>

      <Route path="/shop" element = {<ShoppingForm/>}/>

      <Route path="/admin" element = {<AdminLogin/>}/>

      <Route path="/orderInfo" element = {<OrderInfo/>}/>
    </Routes>
  );
}

export default App;
