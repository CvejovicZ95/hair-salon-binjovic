const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const getAllImages = async () => {
  try {
    const res = await fetch(`${apiUrl}/api/gallery`);
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const uploadPhoto = async (alt, image, category) => {
  try {
    const formData = new FormData();
    formData.append("alt", alt);
    formData.append("image", image);
    formData.append("category", category);

    const res = await fetch(`${apiUrl}/api/gallery`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to upload photo to gallery");
    }

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deletePhoto = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/api/gallery/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error deleting photo");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};
