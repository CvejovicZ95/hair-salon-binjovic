import { useEffect, useState } from "react";
import { toast } from "react-toastify"
import { getAllImages } from "../api/galleryApi";

export const useGetImages = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try{
        const data = await getAllImages()
        setImages(data)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    };
    fetchPhotos()
  },[]);

  return { loading, images};
};