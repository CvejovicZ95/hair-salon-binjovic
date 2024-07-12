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