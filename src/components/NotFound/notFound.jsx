import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-page-number">404</h1>
      <p className="error-page-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error-page-link">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default ErrorPage;