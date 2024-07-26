import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/authContext";
import { useGetImages } from "../../hooks/useGetPhotosGallery";
import "./Gallery.css"

export const ImageContainer = ({ src, alt, id }) => {
  const { authUser } = useAuthContext();
  const { handleDeleteImage } = useGetImages();

  const handleDelete = async () => {
    const confirmed = window.confirm('Da li ste sigurni da želite da obrišete sliku?');
    if (confirmed) {
      try {
        await handleDeleteImage(id);
        toast.success('Uspešno ste obrisali sliku.');
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="image-container-gallery">
      <img
        src={src}
        alt={alt}
        className="gallery-image"
      />
      {authUser && 
        (<button 
          onClick={handleDelete}
          className="delete-photo-btn"
          >Obriši</button>)}
    </div>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};