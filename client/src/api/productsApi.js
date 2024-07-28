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

export const getProductsByCategory = async (category) => {
    try {
        const res = await fetch (`${apiUrl}/api/products/category/${category}`)
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        return data
    } catch (error){
        throw new Error(error.message)
    }
}

export const createProduct = async (
    name,
    preparate,
    category,
    quantity,
    price,
    inStock
) => {
    try {
        console.log('Sending request to API with data:', { name, preparate, category, quantity, price, inStock });
        const res = await fetch(`${apiUrl}/api/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, preparate, category, quantity, price, inStock }),
        });
        const data = await res.json();
        console.log('Response from API:', data);
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
        console.log(`markProductAsSold called with id: ${id}`);
        const res = await fetch(`${apiUrl}/api/product/${id}/sold`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inStock: false }),
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        console.log(`markProductAsSold response: ${JSON.stringify(data)}`);
        return data;
    } catch (error) {
        console.error(`Error in markProductAsSold: ${error.message}`);
        throw new Error(error.message);
    }
};

export const markProductAsOnline = async (id) => {
    try {
        console.log(`markProductAsOnline called with id: ${id}`);
        const res = await fetch(`${apiUrl}/api/product/${id}/online`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inStock: true }),
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        console.log(`markProductAsOnline response: ${JSON.stringify(data)}`);
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
    updatedCategory,
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
                category: updatedCategory,
                quantity: updatedQuantity,
                price: updatedPrice,
                inStock: updatedInStock
            }),
        })
        return true;
    } catch (error) {
        throw new Error(error.message)
    }
}