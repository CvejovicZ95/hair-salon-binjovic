import React, { useContext, useState } from "react";
import { Logo2 } from "../logo2/Logo2";
import { Shopcart } from "../shopcart/Shopcart";
import { Footer } from "../layout/footer/Footer";
import { useGetProductsByCategory } from "../../hooks/useGetProducts";
import { CartContext } from "../../context/cartContext";
import "./Products.scss";

export const Products = () => {
  const { productsByCategory, loading, error } = useGetProductsByCategory('kerastase');
  const { addToCart } = useContext(CartContext);

  const [selectedCategory, setSelectedCategory] = useState('kerastase');

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

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const groupedProducts = groupProductsByCategoryName(productsByCategory);

  return (
    <div className="products-page">
      <div className="logo-and-cart">
        <Logo2 />
        <Shopcart />
      </div>
      <h1>PREPARATI</h1>
      <div className="categories">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
        >
          <option value="kerastase">Molimo izaberite kategoriju</option>
          {Object.keys(groupedProducts).map(categoryName => (
            <option key={categoryName} value={categoryName}>{categoryName}</option>
          ))}
        </select>
      </div>
      <div className="products" id="products">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching products.</p>
        ) : (
          <div className="products-list">
            {groupedProducts[selectedCategory] && groupedProducts[selectedCategory].map(product => (
              <div key={product._id} className="product-item">
                <p>{product.preparate} {product.quantity}</p>
                <p>{product.price} RSD</p>
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className="buy-btn"
                >Naruči</button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
