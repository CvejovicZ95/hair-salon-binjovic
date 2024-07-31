import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllImages, deletePhoto } from "../api/galleryApi";

export const useGetImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const data = await getAllImages();
        setImages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [images]);

  const handleDeleteImage = async (id) => {
    try {
      await deletePhoto(id);
      setImages((prevImages) => {
        const updatedImages = prevImages.filter((image) => image._id !== id);
        return updatedImages;
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { loading, images, handleDeleteImage };
};
