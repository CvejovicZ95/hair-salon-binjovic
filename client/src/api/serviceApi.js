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
