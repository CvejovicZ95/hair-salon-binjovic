import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getProducts,
  createProduct,
  markProductAsSold,
  markProductAsOnline,
  updateProduct,
  deleteProduct,
} from "../api/productsApi";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const createProductHandler = async ({
    name,
    preparate,
    quantity,
    price,
    inStock,
  }) => {
    try {
      const newProduct = await createProduct(
        name,
        preparate,
        quantity,
        price,
        inStock,
      );
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const updateProductHandler = async (
    id,
    updatedName,
    updatedPreparate,
    updatedQuantity,
    updatedPrice,
    updatedInStock,
  ) => {
    try {
      await updateProduct(
        id,
        updatedName,
        updatedPreparate,
        updatedQuantity,
        updatedPrice,
        updatedInStock,
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id
            ? {
                ...product,
                name: updatedName,
                preparate: updatedPreparate,
                quantity: updatedQuantity,
                price: updatedPrice,
                inStock: updatedInStock,
              }
            : product,
        ),
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  const markProductAsSoldHandler = async (id) => {
    try {
      await markProductAsSold(id);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? { ...product, inStock: false } : product,
        ),
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  const markProductAsOnlineHandler = async (id) => {
    try {
      await markProductAsOnline(id);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? { ...product, inStock: true } : product,
        ),
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteProductHandler = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.filter(
          (product) => product._id !== id,
        );
        return updatedProducts;
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    products,
    loading,
    error,
    markProductAsSoldHandler,
    markProductAsOnlineHandler,
    createProductHandler,
    updateProductHandler,
    deleteProductHandler,
  };
};
