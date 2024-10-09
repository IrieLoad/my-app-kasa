// Importation des composants nécessaires et des données
import Collapse from "../../components/collapse"; // Composant Collapse 
import Banner from "../../components/banner"; // Composant Banner 
import collapseData from "../../data/collapse.json"; // Importation des données pour les collapses à partir d'un fichier JSON
import pictureAboutPage from "../../assets/images/banner-about.jpg"; // Importation de l'image utilisée pour la bannière de la page À propos

// Définition du composant de la page À propos
function About () {
    return (
        // Conteneur principal de la page À propos
        <div className="about-page">

          {/* Composant Banner avec l'image importée et le texte alternatif pour l'accessibilité */}
          <Banner image={pictureAboutPage} altText="Bannière À propos" />

          {/* Conteneur pour tous les éléments Collapse */}
          <div className="about-page-collapses">
            {/* Boucle sur les données de collapseData pour créer plusieurs sections Collapse */}
            {collapseData.map((item, index) => (
              // Chaque Collapse utilise une clé unique basée sur l'index et reçoit un titre
              <Collapse key={index} title={item.title}>
                {/* Le contenu de chaque Collapse est affiché à l'intérieur d'un paragraphe */}
                <p>{item.content}</p>
              </Collapse>
            ))}
          </div>
        </div>
    );
}

// Exportation du composant About pour qu'il puisse être utilisé dans d'autres parties de l'application
export default About;