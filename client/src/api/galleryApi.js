const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const getAllImages = async () => {
  try{
    const res = await fetch(`${apiUrl}/api/gallery`);
    const data = await res.json();
    if(data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    throw new Error(error.message)
  }
}
