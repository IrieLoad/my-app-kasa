import logoHeader from "../assets/logos/logo-kasa.png"
import { NavLink } from "react-router-dom";

function Header () {
  return (
    <div className="header">
      <img src={logoHeader} alt="logo Kasa"/>
      <nav>
        <ul>
          <NavLink to ="/" className={({isActive}) =>(isActive ? "underline" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" className={({isActive}) =>(isActive ? "underline" : "")}>
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;