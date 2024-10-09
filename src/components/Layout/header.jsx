import logoHeader from "../../assets/logos/logo-kasa.png"; // Importation du logo de l'en-tête depuis les fichiers d'assets
import { NavLink } from "react-router-dom"; // Importation de NavLink depuis react-router-dom pour la navigation entre les pages

// Définition du composant fonctionnel Header
function Header() {
  return (
    <div className="header"> {/* Conteneur principal de l'en-tête */}
      {/* Affichage du logo Kasa */}
      <img src={logoHeader} alt="logo Kasa" />
      
      {/* Navigation principale du site */}
      <nav>
        <ul>
          {/* Lien de navigation vers la page d'accueil */}
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "underline" : "")} // Ajoute une classe "underline" si le lien est actif
          >
            <li>Accueil</li> {/* Texte du lien pour la page d'accueil */}
          </NavLink>

          {/* Lien de navigation vers la page À propos */}
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "underline" : "")} // Ajoute une classe "underline" si le lien est actif
          >
            <li>A propos</li> 
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

// Exportation du composant Header pour pouvoir l'utiliser dans d'autres parties de l'application
export default Header;