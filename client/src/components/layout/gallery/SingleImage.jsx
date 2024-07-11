import React from "react";
import PropTypes from "prop-types";


export const ImageContainer = ({ src, alt, id}) => {
  return(
    <div className="image-container-gallery">
      <img
        src={src}
        alt={alt}
        className="gallery-image"
      />
    </div>
  )
}

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};