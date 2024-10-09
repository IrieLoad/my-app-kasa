import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des types de propriétés

// Définition du composant fonctionnel Card
function Card({ logement }) { 
  return (
    <div className="card"> {/* Conteneur principal de la carte */}
      <div className="card__image-container"> {/* Conteneur de l'image de la carte */}
        {/* Image du logement avec l'attribut 'src' pour la source de l'image et 'alt' pour le texte alternatif */}
        <img src={logement.cover} alt={logement.title} className="card__image" /> 
      </div>
      <div className="card__content"> {/* Conteneur du contenu de la carte */}
        {/* Titre du logement */}
        <h2 className="card__title">{logement.title}</h2> 
      </div>
    </div>
  );
}

// Validation des propriétés (props) du composant Card
Card.propTypes = {
  logement: PropTypes.shape({ // 'logement' doit être un objet avec les propriétés suivantes :
    id: PropTypes.string.isRequired, // 'id' est requis et doit être une chaîne de caractères
    cover: PropTypes.string.isRequired, // 'cover' est requis et doit être une chaîne de caractères (URL de l'image)
    title: PropTypes.string.isRequired, // 'title' est requis et doit être une chaîne de caractères (titre du logement)
  }).isRequired, // L'objet 'logement' est requis
};

// Exportation du composant Card pour pouvoir l'utiliser dans d'autres fichiers
export default Card;