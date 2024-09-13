// Importation des hooks et composants nécessaires depuis React Router et des fichiers locaux
import { useParams, Navigate } from "react-router-dom"; // Hooks pour récupérer les paramètres d'URL et naviguer
import lodgingData from "../../data/lodging.json"; // Données de logement importées depuis un fichier JSON
import Carousel from "../../components/Carrousel/carrousel"; // Composant de carrousel pour afficher les images
import Host from "../../components/Host/host"; // Composant pour afficher l'hôte
import Tags from "../../components/Tags/tags"; // Composant pour afficher les tags
import Rating from "../../components/Rating/rating"; // Composant pour afficher la notation
import Collapse from "../../components/Collapse/collapse"; // Composant pour afficher les collapses

// Définition du composant pour la page de détail du logement
function FicheLogement() {
  // Utilisation du hook `useParams` pour récupérer l'ID de logement depuis l'URL
  const { id } = useParams(); 

  // Recherche du logement correspondant à l'ID dans les données
  const logement = lodgingData.find((lodging) => lodging.id === id); 

  // Si le logement n'est pas trouvé, rediriger vers la page d'erreur 404
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  // Déstructuration des propriétés du logement 
  const {
    title,
    location,
    pictures,
    host,
    tags,
    rating,
    description,
    equipments,
  } = logement;

  return (
    // Conteneur principal pour la page de détail du logement
    <div className="fiche-logement">
      
      {/* Affiche un carrousel d'images pour le logement */}
      <Carousel slides={pictures} />
      
      {/* Conteneur pour les informations générales et la section d'évaluation de l'hôte */}
      <div className="fiche-logement__container"> 
        <div className="fiche-logement__info">
          {/* Titre du logement */}
          <h1 className="fiche-logement__title">{title}</h1>
          {/* Localisation du logement */}
          <p className="fiche-logement__location">{location}</p>
          
          {/* Affichage des tags associés au logement */}
          <div className="fiche-logement__tags">
            {tags.map((tag, index) => (
              // Utilisation du composant Tags pour afficher chaque tag
              <Tags key={index} label={tag} />
            ))} 
          </div>
        </div>

        {/* Conteneur pour l'hôte et la notation */}
        <div className="fiche-logement__host-rating">
          {/* Affichage des informations de l'hôte (nom et photo) */}
          <div className="fiche-logement__host">
            <Host name={host.name} picture={host.picture} />
          </div>
          {/* Affichage de la notation sous forme d'étoiles */}
          <div className="fiche-logement__rating">
            <Rating rating={parseInt(rating)} />
          </div>
        </div>
      </div>

      {/* Section des collapses pour la description et les équipements */}
      <div className="fiche-logement__collapses">
        {/* Collapse pour la description du logement */}
        <Collapse title="Description">
          {description}
        </Collapse>
        
        {/* Collapse pour les équipements du logement */}
        <Collapse title="Équipements">
          {/* Liste des équipements affichée sous forme de liste non ordonnée */}
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div> 
  );
}

// Exportation du composant FicheLogement pour utilisation dans d'autres parties de l'application
export default FicheLogement;