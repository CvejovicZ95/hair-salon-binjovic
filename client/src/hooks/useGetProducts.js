import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { getProducts, getProductsByCategory } from '../api/productsApi';

export const useGetProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const data = await getProducts()
                setProducts(data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                toast.error(error.message)
                setLoading(false)
            }
        };
        fetchProducts()
    }, []);

    return { products, loading, error}
}

export const useGetProductsByCategory = (category) => {
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                const data = await getProductsByCategory(category);
                setProductsByCategory(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                toast.error(error.message);
                setLoading(false);
            }
        };
        if (category) {
            fetchProductsByCategory();
        }
    }, [category]);

    return { productsByCategory, loading, error };
};