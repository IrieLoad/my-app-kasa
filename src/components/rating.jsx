import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des propriétés (props)
import completedNotation from "../assets/images/completedNotation.png"; // Importation de l'image d'une étoile pleine
import emptyNotation from "../assets/images/emptyNotation.png"; // Importation de l'image d'une étoile vide

// Définition du composant fonctionnel Rating
function Rating({ rating }) {
  const totalStars = 5; // Nombre total d'étoiles à afficher
  // Création d'un tableau d'étoiles basé sur la note reçue en props
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <img
      key={index} // Clé unique pour chaque étoile
      className="rating__star" // Classe CSS pour styliser les étoiles
      src={index < rating ? completedNotation : emptyNotation} // Choix de l'image à afficher en fonction de la note
      alt={index < rating ? "Étoile pleine" : "Étoile vide"} // Texte alternatif pour l'accessibilité
    />
  ));

  // Retourne le conteneur des étoiles
  return <div className="rating">{stars}</div>;
}

// Validation des propriétés (props) du composant Rating
Rating.propTypes = {
  rating: PropTypes.number.isRequired, // La note (rating) est requise et doit être un nombre
};

// Exportation du composant Rating pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Rating;