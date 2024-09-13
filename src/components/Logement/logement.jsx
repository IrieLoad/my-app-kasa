import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des propriétés (props)
import Host from "../Host/host"; // Importation du composant Host pour afficher les informations de l'hôte
import Tags from "../Tags/tags"; // Importation du composant Tags pour afficher les tags
import Rating from "../Rating/rating"; // Importation du composant Rating pour afficher la notation

// Définition du composant fonctionnel Logement
function Logement({ title, localisation, tags, host, rating }) {
  return (
    <div className="logement"> {/* Conteneur principal du composant Logement */}
      
      {/* Affichage du titre et de la localisation du logement */}
      <div className="logement__header"> {/* Conteneur pour le titre et la localisation */}
        <h1 className="logement__title">{title}</h1> 
        <p className="logement__location">{localisation}</p> 
      </div>

      {/* Affichage des tags du logement */}
      <div className="logement__tags"> {/* Conteneur pour les tags */}
        {tags.map((tag, index) => ( // Boucle à travers le tableau de tags
          <Tags key={index} label={tag} /> // Utilisation du composant Tags pour chaque tag
        ))}
      </div>

      {/* Affichage des informations de l'hôte et de la notation */}
      <div className="logement__host-rating"> {/* Conteneur pour l'hôte et la notation */}
        {/* Affichage des informations de l'hôte (nom et photo) */}
        <Host name={host.name} picture={host.picture} />
        {/* Affichage de la notation */}
        <Rating rating={parseInt(rating)} />
      </div>
    </div>
  );
}

// Définition des types des props attendues pour le composant Logement
Logement.propTypes = {
  title: PropTypes.string.isRequired, // Le titre est requis et doit être une chaîne de caractères
  localisation: PropTypes.string.isRequired, // La localisation est requise et doit être une chaîne de caractères
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Les tags sont requis et doivent être un tableau de chaînes de caractères
  host: PropTypes.shape({ // L'hôte est requis et doit être un objet avec les propriétés suivantes :
    name: PropTypes.string.isRequired, // Le nom de l'hôte est requis et doit être une chaîne de caractères
    picture: PropTypes.string.isRequired, // L'image de l'hôte est requise et doit être une chaîne de caractères (URL de l'image)
  }).isRequired,
  rating: PropTypes.number.isRequired, // La notation est requise et doit être un nombre
};

// Exportation du composant Logement pour pouvoir l'utiliser dans d'autres fichiers
export default Logement;
