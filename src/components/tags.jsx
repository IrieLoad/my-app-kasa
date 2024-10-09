import PropTypes from "prop-types"; // Importation de PropTypes pour la validation des propriétés (props)

// Définition du composant fonctionnel Tag
function Tag({ label }) {
  return (
    <div className="tag"> {/* Conteneur principal du tag */}
      {/* Affichage du label du tag */}
      <span className="tag__label">{label}</span>
    </div>
  );
}

// Validation des propriétés (props) du composant Tag
Tag.propTypes = {
  label: PropTypes.string.isRequired, // Le label est requis et doit être une chaîne de caractères
};

// Exportation du composant Tag pour pouvoir l'utiliser dans d'autres fichiers
export default Tag;