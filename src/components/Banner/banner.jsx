import React from "react";
import PropTypes from "prop-types";

function Banner({ image, text, altText }) {
    return (
      <div className="banner">
        <img className="banner-image" src={image} alt={altText || "Bannière"} />
        <div className="banner-mask"></div>
        {text && <span className="banner-text">{text}</span>}
      </div>
    );
  }
  
  Banner.propTypes = {
    image: PropTypes.string.isRequired, // L'image est obligatoire
    text: PropTypes.string, // Le texte est optionnel
    altText: PropTypes.string, // Texte alternatif optionnel pour l'image
  };

  export default Banner;