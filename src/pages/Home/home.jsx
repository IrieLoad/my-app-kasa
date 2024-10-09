import { Link } from "react-router-dom"; // Importation de Link depuis react-router-dom pour permettre la navigation entre les pages
import pictureHomePage from "../../assets/images/banner-home.jpg"; // Importation de l'image utilisée pour la bannière de la page d'accueil
import Banner from "../../components/banner"; // Importation du composant Banner pour afficher une bannière sur la page d'accueil
import Card from "../../components/card"; // Importation du composant Card pour afficher chaque logement sous forme de carte
import lodging from "../../data/lodging.json"; // Importation des données de logement à partir d'un fichier JSON

// Définition du composant de la page d'accueil
function Home () {
    return (
        // Conteneur principal de la page d'accueil
        <div className="home">

            {/* Composant Banner avec l'image importée et le texte de la bannière */}
            <Banner 
                image={pictureHomePage} text="Chez vous, partout et ailleurs" altText="Bannière d'accueil" 
            />
            
            {/* Conteneur pour afficher les cartes de logement */}
            <div className="gallery-cards">
                {/* Boucle sur les données de logement pour créer une carte pour chaque logement */}
                {lodging.map((logement) => (
                    // Chaque carte est entourée d'un lien qui redirige vers la page du logement correspondant
                    <Link 
                        to={`/logement/${logement.id}`} // Lien dynamique basé sur l'ID du logement
                        key={logement.id} // Clé unique pour chaque élément dans la liste
                        className="card__link" 
                    >
                        {/* Composant Card pour afficher les détails du logement */}
                        <Card logement={logement} /> 
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Exportation du composant Home pour qu'il puisse être utilisé dans d'autres parties de l'application
export default Home;