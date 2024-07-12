import React, { useState } from "react";
import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import "./Products.css";

export const Products = () => {
  const [activeTab, setActiveTab] = useState('kerastase'); 

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
            {[...Array(60)].map((_, index) => (
              <h2 key={index}>{activeTab === 'kerastase' ? `Kerastase Preparat ${index + 1}` : `L'Oreal Preparat ${index + 1}`}</h2>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};