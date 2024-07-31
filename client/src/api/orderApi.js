const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const getAllOrders = async () => {
    try {
        const res = await fetch(`${apiUrl}/api/orders`, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const createSingleOrder = async ({
    name,
    email,
    city,
    postalCode,
    address,
    phoneNumber,
    productDetails,
    processed,
    sent
}) => {
    try {
        const res = await fetch(`${apiUrl}/api/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({
                name,
                email,
                city,
                postalCode,
                address,
                phoneNumber,
                productDetails,
                processed,
                sent
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

export const markOrderAsProcessed = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/api/orders/processOrder/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ processed: true }),
            credentials: 'include'
        })
        const data = await res.json();
        if(data.error) {
            throw new Error(data.error)
        }
        return data;
    } catch (error){
        throw new Error(error.message)
    }
}

export const markOrderAsSent = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/api/orders/sentOrder/${id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ sent: true }),
            credentials: 'include'
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error)
        }
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}