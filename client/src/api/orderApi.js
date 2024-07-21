const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const getAllOrders = async () => {
    try {
        const res = await fetch(`${apiUrl}/api/orders`)
        const data = await res.json()
        if (data.error) {
            throw new Error(data.error)
        }
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createSingleOrder = async ({
    name,
    email,
    adress,
    phoneNumber,
    productDetails
}) => {
    try {
        const res = await fetch(`${apiUrl}/api/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({
                name,
                email,
                adress,
                phoneNumber,
                productDetails
            }),
        });
        if (!res.ok) {
            const errorData = await res.json();
            console.error('Error creating order:', errorData);
            throw new Error(errorData.message || 'Error creating order');
        }
        const data = await res.json()
        return data
    } catch(error){
        throw new Error('Error creating order')
    }
}