import React, { useState } from "react"; // Import de React et du hook useState pour la gestion de l'état
import PropTypes from "prop-types"; // Import de PropTypes pour la validation des propriétés (props)
import arrowCollapse from "../assets/images/arrow-collapse.png"; // Import de l'image de la flèche utilisée dans le collapse
import "../styles/Components/collapse.scss"; // Import du fichier de styles SCSS pour le composant Collapse

// Définition du composant fonctionnel Collapse
function Collapse({ title, children }) {
  // Déclaration de l'état local pour déterminer si le contenu est visible ou non
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture/fermeture du collapse
  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse la valeur de isOpen (true devient false et vice versa)
  };

  return (
    <div className="collapse"> {/* Conteneur principal du composant collapse */}
      {/* Entête du collapse, qui contient le titre et l'icône de la flèche */}
      <div className="collapse__header" onClick={toggleCollapse}> {/* OnClick déclenche la fonction toggleCollapse */}
        <h2 className="collapse__title">{title}</h2> 
        <img
          src={arrowCollapse} // Affiche l'image de la flèche
          alt={isOpen ? "Réduire" : "Agrandir"} // Accessibilité : texte alternatif qui change en fonction de l'état du collapse
          className={`collapse__arrow ${isOpen ? "collapse__arrow-open" : ""}`} // Ajoute une classe CSS conditionnelle si le collapse est ouvert
        />
      </div>

        <div className={`collapse__content ${isOpen ? "collapse__content--open" : ""}`}> {/* Conteneur pour le contenu à l'intérieur du collapse */}
          
          {/* Si children est un tableau */}
          {Array.isArray(children) ? (
            <ul className="collapse__list"> {/* Conteneur de liste */}
              {children.map((item, index) => (
                <li key={index} className="collapse__item"> {item} </li> // Chaque élément de la liste est affiché dans un <li>
              ))}
            </ul>
          ) : (
            <div className="collapse__text">{children}</div> // Sinon, si children est une chaîne de caractères, affiche children
          )}
        </div>
      
    </div>
  );
}

// Définition des types des props attendues pour le composant Collapse
Collapse.propTypes = {
  title: PropTypes.string.isRequired, // Le titre est requis et doit être une chaîne de caractères
  content: PropTypes.oneOfType([ // Le contenu (children) peut être soit une chaîne de caractères soit un tableau de chaînes
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
};

// Export du composant Collapse pour pouvoir l'utiliser dans d'autres fichiers
export default Collapse;