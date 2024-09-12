import logoFooter from "../../assets/logos/logo-kasa-footer.png"; // Importation du logo du footer depuis les fichiers d'assets

// Définition du composant fonctionnel Footer
function Footer() {
  return (
    
    <footer>
      <img src={logoFooter} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

// Exportation du composant Footer pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Footer;