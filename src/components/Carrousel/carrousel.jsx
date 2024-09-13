import React, { useState } from "react"; // Import de React et du hook useState pour la gestion de l'état
import PropTypes from "prop-types"; // Import de PropTypes pour la validation des propriétés
import arrowRight from "../../assets/images/arrow-right.png"; // Import de l'image de la flèche droite
import arrowLeft from "../../assets/images/arrow-left.png"; // Import de l'image de la flèche gauche

// Définition du composant fonctionnel Carousel
function Carousel({ slides }) {
  // Déclaration de l'état local pour l'index actuel de l'image affichée, initialisé à 0
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Nombre total d'images dans le carrousel
  const totalSlides = slides.length; 

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    // Si l'image actuelle est la dernière, on revient à la première, sinon on passe à l'image suivante
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    // Si l'image actuelle est la première, on passe à la dernière, sinon on revient à l'image précédente
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  // Si le nombre total de slides est 0 ou moins, on ne retourne rien (le carrousel ne s'affiche pas)
  if (totalSlides <= 0) {
    return null;
  }

  return (
    <div className="carousel"> {/* Conteneur principal du carrousel */}
      <div className="carousel__slider"> {/* Conteneur pour l'image active du carrousel */}
        {/* Affiche l'image actuelle du carrousel */}
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel__image" />

        {/* Affiche les flèches de navigation seulement s'il y a plus d'une image */}
        {totalSlides > 1 && (
          <>
            {/* Flèche gauche pour revenir à l'image précédente */}
            <button
              className="carousel__arrow carousel__arrow-left" onClick={prevSlide}
              aria-label="Image précédente" // Accessibilité : texte pour les lecteurs d'écran
            >
              <img src={arrowLeft} alt="Flèche gauche" /> {/* Icône de flèche gauche */}
            </button>
            {/* Flèche droite pour passer à l'image suivante */}
            <button
              className="carousel__arrow carousel__arrow-right" onClick={nextSlide}
              aria-label="Image suivante" // Accessibilité : texte pour les lecteurs d'écran
            >
              <img src={arrowRight} alt="Flèche droite" /> {/* Icône de flèche droite */}
            </button>
          </>
        )}
      </div>

      {/* Indicateur de position de l'image seulement s'il y a plus d'une image */}
      {totalSlides > 1 && (
        <div className="carousel__indicator">
          {/* Affiche l'index de l'image actuelle et le nombre total d'images */}
          {currentIndex + 1}/{totalSlides}
        </div>
      )}
    </div>
  );
}

// Validation des propriétés (props) du composant Carousel
Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired, // 'slides' est requis et doit être un tableau de chaînes de caractères (URL des images)
};

// Exportation du composant Carousel pour pouvoir l'utiliser dans d'autres fichiers
export default Carousel;