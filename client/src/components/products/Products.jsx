import React, { useState } from "react";
import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import { useGetProductsByCategory } from "../../hooks/useGetProducts";
import "./Products.css";

export const Products = () => {
  const [activeTab, setActiveTab] = useState('kerastase');
  const { productsByCategory, loading, error } = useGetProductsByCategory(activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="products-page">
      <Logo2/>
      <h1>PREPARATI</h1>
      <div className="tab-buttons">
        <button onClick={() => handleTabClick('kerastase')} className={activeTab === 'kerastase' ? 'active' : ''}>Kérastase</button>
        <button onClick={() => handleTabClick('loreal')} className={activeTab === 'loreal' ? 'active' : ''}>L'Oréal</button>
      </div>
      <div className="products" id="products">
        <div>
          {activeTab === 'kerastase' && (
            <img
              className="product-img"
              src="kerastase.png"
              alt="kerastase"
            />
          )}
          {activeTab === 'loreal' && (
            <img
              className="product-img"
              src="loreal2.png"
              alt="loreal"
            />
          )}
          <div className="products-list">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error fetching products.</p>
            ) : (
              productsByCategory.map(product => (
                <div key={product._id} className="product-item">
                  <h2>{product.name}</h2>
                  <p>{product.preparate}</p>
                  <p>Kolicina: {product.quantity}</p>
                  <p>Cena: {product.price}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};