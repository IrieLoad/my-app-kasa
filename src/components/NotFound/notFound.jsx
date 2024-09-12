import { NavLink } from "react-router-dom"; // Importation de NavLink depuis react-router-dom pour permettre la navigation entre les pages

// Définition du composant fonctionnel ErrorPage
function ErrorPage() {
  return (
    // Conteneur principal de la page d'erreur
    <div className="error-page">
      
      {/* Affiche le code d'erreur 404 */}
      <h1 className="error-page-number">404</h1>
      
      {/* Message d'erreur informant l'utilisateur que la page demandée n'existe pas */}
      <p className="error-page-message">
        Oups! La page que vous demandez n'existe pas.
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