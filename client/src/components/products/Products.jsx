import React, { useContext, useState } from "react";
import { Logo2 } from "../logo2/Logo2";
import { ProductUploadForm } from "./UploadProductForm";
import { Shopcart } from "../shopcart/Shopcart";
import { Footer } from "../layout/footer/Footer";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useAuthContext } from "../../context/authContext";
import { CartContext } from "../../context/cartContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Products.scss";

export const Products = () => {
  const { products, loading, error, createProductHandler, updateProductHandler, markProductAsOnlineHandler, markProductAsSoldHandler, deleteProductHandler } = useGetProducts();
  const { addToCart } = useContext(CartContext);
  const { authUser } = useAuthContext();

  const [selectedCategory, setSelectedCategory] = useState('kerastase');

  const groupProductsByCategoryName = (products) => {
    const groupedProducts = {};
    products.forEach(product => {
      const categoryName = product.name; // Trebali biste koristiti category umjesto name ako koristite kategorije
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

  const handleMarkProductAsSold = async (productId) => {
    await markProductAsSoldHandler(productId);
  };

  const handleMarkProductAsOnline = async (productId) => {
    await markProductAsOnlineHandler(productId);
  };

  const handleDeleteProduct = async (productId) => {
    const confirmed = window.confirm('Da li ste sigurni da želite da obrišete proizvod?');
    if (confirmed) {
      try {
        await deleteProductHandler(productId);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const groupedProducts = groupProductsByCategoryName(products);

  return (
    <div className="products-page">
      <div className="logo-and-cart">
        <Logo2 />
        <Shopcart />
      </div>
      {authUser && (<ProductUploadForm handleSubmit={createProductHandler}/>)}
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
              <div
                key={product._id}  
                className={`product-item ${!product.inStock ? 'out-of-stock' : ''}`}>
                <p>{product.preparate} {product.quantity}</p>
                <p>{product.price} RSD</p>
                <button 
                  onClick={() => handleAddToCart(product)} 
                  className="buy-btn"
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'Naruči' : 'Nema na stanju'}
                </button>
                {authUser && (
                  <>
                    <div>
                      {product.inStock ? (
                        <button className="inStock-button" onClick={() => handleMarkProductAsSold(product._id)}>Nema na stanju</button>
                      ) : (
                        <button className="inStock-button" onClick={() => handleMarkProductAsOnline(product._id)}>Na stanju</button>
                      )}
                    </div>
                    <button className="delete-product-button" onClick={() => handleDeleteProduct(product._id)}>Obriši</button>
                    <button className="update-product-button" onClick={() => handleDeleteProduct(product._id)}>Uredi</button>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};
