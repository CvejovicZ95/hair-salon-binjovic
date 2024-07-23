const apiUrl = process.env.REACT_APP_API_BASE_URL

export const loginAdmin = async (username, password) => {
    try {
        const res = await fetch(`${apiUrl}/api/loginAdmin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (data.error) {
            throw new Error("Pogrešno korisničko ime ili lozinka")
        }
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const logoutAdmin = async () => {
    try {
        const res = await fetch(`${apiUrl}/api/logoutAdmin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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