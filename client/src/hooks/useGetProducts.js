import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { getProducts, getProductsByCategory, createProduct, markProductAsSold, markProductAsOnline, updateProduct } from '../api/productsApi';

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

    const createProductHandler = async ({ name, preparate, category, quantity, price, inStock }) => {
        try {
            console.log('Creating product with data:', { name, preparate, category, quantity, price, inStock });
            const newProduct = await createProduct(name, preparate, category, quantity, price, inStock);
            setProducts((prevProducts) => [...prevProducts, newProduct]);
            toast.success('Proizvod je uspešno kreiran.');
        } catch (error) {
            console.error('Error creating product:', error.message);
            toast.error(error.message);
        }
    };
    const updateProductHandler = async (
        id,
        updatedName,
        updatedPreparate,
        updatedCategory,
        updatedQuantity,
        updatedPrice,
        updatedInStock
    ) => {
        try {
            await updateProduct(id, updatedName, updatedPreparate, updatedCategory, updatedQuantity, updatedPrice, updatedInStock)
            setProducts((prevProducts) => prevProducts.map((product) => 
                product._id === id ? {
                    ...product,
                    name: updatedName,
                    preparate: updatedPreparate,
                    category: updatedCategory,
                    quantity: updatedQuantity,
                    price: updatedPrice,
                    inStock: updatedInStock
                } : product
            ));
            toast.success('Proizvod je uspešno ažuriran.');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const markProductAsSoldHandler = async (id) => {
        try {
            await markProductAsSold(id);
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product._id === id ? { ...product, inStock: false } : product
                )
            );
            //toast.success('Proizvod je označen da nije na stanju.', { toastId: id });
        } catch (error) {
            toast.error(error.message, { toastId: id });
        }
    };
    
    const markProductAsOnlineHandler = async (id) => {
        try {
            await markProductAsOnline(id);
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product._id === id ? { ...product, inStock: true } : product
                )
            );
            //toast.success('Proizvod je ponovo dostupan.', { toastId: id });
        } catch (error) {
            toast.error(error.message, { toastId: id });
        }
    };

    return { products, loading, error, markProductAsSoldHandler, markProductAsOnlineHandler, createProductHandler, updateProductHandler };
};

export const useGetProductsByCategory = (category) => {
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                const data = await getProductsByCategory(category);
                setProductsByCategory(data);
            } catch (error) {
                setError(error.message);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (category) {
            fetchProductsByCategory();
        }
    }, [category]);

    return { productsByCategory, loading, error };
};
