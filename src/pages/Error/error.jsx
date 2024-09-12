// Importation de NavLink depuis react-router-dom pour permettre la navigation entre les pages
import { NavLink } from "react-router-dom";

// Définition du composant de la page d'erreur
function ErrorPage() {
  return (
    // Conteneur principal pour la page d'erreur
    <div className="error-page">
      
      <h1 className="error-page-number">404</h1>
    
      <p className="error-page-message">
        {/* Utilisation d'un <span> avec la classe "line-break" pour gérer le saut de ligne sur les petits écrans */}
        Oups! La page que <span className="line-break"> </span>vous demandez n'existe pas.
      </p>
      
      {/* Lien de navigation qui permet à l'utilisateur de revenir à la page d'accueil */}
      <NavLink to="/" className="error-page-link">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

// Exportation du composant ErrorPage pour qu'il puisse être utilisé dans d'autres parties de l'application
export default ErrorPage;