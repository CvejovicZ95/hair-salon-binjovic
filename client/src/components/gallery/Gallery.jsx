import React, { useState } from "react";
import "./Gallery.css";
import { Logo2 } from "../logo2/Logo2";
import { Footer } from "../layout/footer/Footer";
import { ImageContainer } from "./SingleImage";
import { useGetImages } from "../../hooks/useGetPhotosGallery";

export const Gallery = () => {
  const { images } = useGetImages();
  const [activeTab, setActiveTab] = useState('hair');

  const serviceImages = images.filter((image) => image.category === 'hair');
  const salonImages = images.filter((image) => image.category === 'salon');

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <>
      <div className="gallery-div" id="gallery">
        <Logo2 />
        <h1>GALERIJA</h1>
        <div className="tab-buttons">
          <button onClick={() => handleTabClick('hair')} className={activeTab === 'hair' ? 'active' : ''}>USLUGA</button>
          <button onClick={() => handleTabClick('salon')} className={activeTab === 'salon' ? 'active' : ''}>SALON</button>
        </div>
        <div className="gallery-section">
          <div className="image-grid">
            {activeTab === 'hair' && serviceImages.map((image) => (
              <ImageContainer
                key={image._id}
                src={`${process.env.REACT_APP_API_BASE_URL}/images/${image.imagePath}`}
                alt={image.alt}
              />
            ))}
            {activeTab === 'salon' && salonImages.map((image) => (
              <ImageContainer
                key={image._id}
                src={`${process.env.REACT_APP_API_BASE_URL}/images/${image.imagePath}`}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
