import React, { useState } from "react";
import PropTypes from "prop-types";
import arrowRight from "../../assets/images/arrow-right.png";
import arrowLeft from "../../assets/images/arrow-left.png";

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const totalSlides = slides.length; 

  const nextSlide = () => {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  if (totalSlides <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="carousel-slider">
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />

        {totalSlides > 1 && (
          <>
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={prevSlide}
              aria-label="Image précédente"
            >
              <img src={arrowLeft} alt="Flèche gauche" />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={nextSlide}
              aria-label="Image suivante"
            >
              <img src={arrowRight} alt="Flèche droite" />
            </button>
          </>
        )}
      </div>

      {totalSlides > 1 && (
        <div className="carousel-indicator">
          {currentIndex + 1}/{totalSlides}
        </div>
      )}
    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;