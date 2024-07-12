import React, { useState } from "react";
import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import { useGetProductsByCategory } from "../../hooks/useGetProducts";
import "./Products.css";

export const Products = () => {
  // eslint-disable-next-line
  const [activeTab, setActiveTab] = useState('kerastase');
  const { productsByCategory, loading, error } = useGetProductsByCategory(activeTab);

  const groupProductsByCategoryName = (products) => {
    const groupedProducts = {};
    products.forEach(product => {
      const categoryName = product.name; 
      if (!groupedProducts[categoryName]) {
        groupedProducts[categoryName] = [];
      }
      groupedProducts[categoryName].push(product);
    });
    return groupedProducts;
  };

  const groupedProducts = groupProductsByCategoryName(productsByCategory);

  return (
    <div className="products-page">
      <Logo2 />
      <h1>PREPARATI</h1>
      <img
        className="product-img"
        src="kerastase.png"
        alt="kerastase"
      />
      <div className="products" id="products">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching products.</p>
        ) : (
          <div className="products-list">
            {Object.keys(groupedProducts).map(categoryName => (
              <div key={categoryName}>
                <h2>{categoryName}</h2>
                {groupedProducts[categoryName].map(product => (
                  <div key={product._id} className="product-item">
                    <p>{product.preparate}</p>
                    <p>Količina: {product.quantity}</p>
                    <p>Cena: {product.price}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};