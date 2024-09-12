import PropTypes from 'prop-types'; // Importation de PropTypes pour la validation des propriétés (props)

// Définition du composant fonctionnel Host
function Host({ name, picture }) {
  return (
    <div className="host"> {/* Conteneur principal pour les informations de l'hôte */}
      {/* Affichage du nom de l'hôte */}
      <span className="host-name">{name}</span>
      {/* Affichage de la photo de l'hôte */}
      <img
        className="host-picture" src={picture} alt={`Portrait de ${name}`} // Texte alternatif pour l'accessibilité
      />
    </div>
  );
}

// Validation des propriétés (props) du composant Host
Host.propTypes = {
  name: PropTypes.string.isRequired, // Le nom de l'hôte est requis et doit être une chaîne de caractères
  picture: PropTypes.string.isRequired, // L'URL de l'image de l'hôte est requise et doit être une chaîne de caractères
};

// Exportation du composant Host pour pouvoir l'utiliser dans d'autres fichiers
export default Host;