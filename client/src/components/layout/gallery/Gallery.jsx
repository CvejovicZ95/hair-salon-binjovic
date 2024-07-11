import React from "react";
import "./Gallery.css";
import {Logo} from "../../logo/Logo"
import {Footer} from "../footer/Footer"
import { ImageContainer } from "./SingleImage";
import { useGetImages } from "../../../hooks/useGetPhotosGallery";

export const Gallery = () => {
  const { images } = useGetImages();
  
  const serviceImages = images.filter((image) => image.category === 'hair');

  return (
    <>
    <div className="gallery-div" id="gallery">
      <Logo/>
      <div className="gallery-section">
        <h2>Usluga</h2>
        <div className="image-grid">
          {serviceImages.map((image) => (
            <ImageContainer
              key={image._id}
              src={`${process.env.REACT_APP_API_BASE_URL}/images/${image.imagePath}`}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};