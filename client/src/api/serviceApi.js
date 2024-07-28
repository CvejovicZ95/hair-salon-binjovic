const apiUrl=process.env.REACT_APP_API_BASE_URL

export const getServices = async () => {
    try {
        const res = await fetch(`${apiUrl}/api/services`);
        const data = await res.json()
        if (data.error){
            throw new Error(data.message)
        }
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createService = async (name, price, category, deleted) => {
    try {
        const res = await fetch (`${apiUrl}/api/services`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, price, category, deleted }),
        });
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error)
        }
        return data;
    } catch (error){
        throw new Error(error.message)
    }
}

export const deleteService = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/api/services/${id}/delete`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ deleted: true }),
        });
        const data = await res.json()
        if (data.error) {
            throw new Error(data.error)
        }
        return data;
    } catch(error) {
        throw new Error(error.message)
    }
}

export const updateService = async (id, updatedName, updatedPrice, updatedCategory, updatedDeleted) => {
    try {
        const res = await fetch (`${apiUrl}/api/services/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: updatedName,
                price: updatedPrice,
                category: updatedCategory,
                deleted: updatedDeleted,
            }),
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
