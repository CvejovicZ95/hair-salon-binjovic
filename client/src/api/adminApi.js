const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const loginAdmin = async (username, password) => {
  try {
    const res = await fetch(`${apiUrl}/api/loginAdmin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errorData = await res.json();
      throw new Error(errorData.error || "Neuspešna prijava");
    }
  } catch (error) {
    throw new Error(error.message || "Neuspešna prijava");
  }
};
export const logoutAdmin = async () => {
  try {
    const res = await fetch(`${apiUrl}/api/logoutAdmin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
