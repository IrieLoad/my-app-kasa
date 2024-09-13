import React from "react"; // Importation de React depuis la bibliothèque "react"
import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des types de propriétés

// Définition du composant fonctionnel Banner
function Banner({ image, text, altText }) {
  return (
    <div className="banner"> {/* Conteneur principal de la bannière */}
      {/* Image de la bannière avec des son texte alternatif pour l'accessibilité */}
      <img className="banner__image" src={image} alt={"Bannière"} /> 
      {/* Couche de masque superposée à l'image */}
      <div className="banner__mask"></div>
      {/* Affichage du texte de la bannière s'il est fourni via les props */}
      {text && <span className="banner__text">{text}</span>}
    </div>
  );
}

// Validation des propriétés (props) du composant Banner
Banner.propTypes = {
  image: PropTypes.string.isRequired, // L'image est obligatoire et doit être de type chaîne 
  text: PropTypes.string, // Le texte est optionnel et doit être de type chaîne 
  altText: PropTypes.string, // Le texte alternatif pour l'image est optionnel et doit être de type chaîne 
};

// Exportation du composant Banner pour pouvoir l'utiliser dans d'autres fichiers
export default Banner;