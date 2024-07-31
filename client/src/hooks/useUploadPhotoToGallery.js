import { uploadPhoto } from "../api/galleryApi";
import { toast } from "react-toastify";

export const useUploadHandler = () => {
  const uploadHandler = async ({ alt, image, category }) => {
    try {
      if (!alt || !image || !category) {
        throw new Error("Molimo Vas da popunite sva polja.");
      }
      await uploadPhoto(alt, image, category);
      toast.success("Fotografija je uspešno dodata.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { uploadHandler };
};
