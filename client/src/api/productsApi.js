const apiUrl=process.env.REACT_APP_API_BASE_URL

export const getProducts = async () => {
    try {
        const res = await fetch (`${apiUrl}/api/products`);
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createProduct = async (
    name,
    preparate,
    quantity,
    price,
    inStock
) => {
    try {
        const res = await fetch(`${apiUrl}/api/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, preparate, quantity, price, inStock }),
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        return data;
    } catch (error) {
        console.error('Error in createProduct:', error.message);
        throw new Error(error.message);
    }
}

export const markProductAsSold = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/api/product/${id}/sold`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inStock: false }),
            credentials: 'include'
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        return data;
    } catch (error) {
        console.error(`Error in markProductAsSold: ${error.message}`);
        throw new Error(error.message);
    }
};

export const markProductAsOnline = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/api/product/${id}/online`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inStock: true }),
            credentials: 'include'
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        return data;
    } catch (error) {
        console.error(`Error in markProductAsOnline: ${error.message}`);
        throw new Error(error.message);
    }
};

export const updateProduct = async (
    id,
    updatedName,
    updatedPreparate,
    updatedQuantity,
    updatedPrice,
    updatedInStock
) => {
    try {
        await fetch(`${apiUrl}/api/product/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: updatedName,
                preparate: updatedPreparate,
                quantity: updatedQuantity,
                price: updatedPrice,
                inStock: updatedInStock
            }),
            credentials: 'include'
        })
        return true;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteProduct = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/api/product/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            credentials: 'include'
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || 'Error deleting product')
        }
        const result = await res.json()
        return result;
    } catch (error){
        console.error('Error in deleteProduct:', error.message)
        throw new Error(error.message)
    }
}