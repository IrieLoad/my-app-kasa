import { useParams, Navigate } from "react-router-dom";
import lodgingData from "../../data/lodging.json";
import Carousel from "../../components/Carrousel/carrousel";
import Host from "../../components/Host/host";
import Tags from "../../components/Tags/tags";
import Rating from "../../components/Rating/rating";
import Collapse from "../../components/Collapse/collapse";


function FicheLogement() {
  const { id } = useParams(); 
  const logement = lodgingData.find((lodging) => lodging.id === id); 

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

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
    <div className="fiche-logement">
      {/* Carousel d'images */}
      <Carousel slides={pictures} />
      <div className="fiche-logement-container"> 
        <div className="fiche-logement-info">
          {/* Informations principales */}
          <h1 className="fiche-logement-title">{title}</h1>
          <p className="fiche-logement-location">{location}</p>
          {/* Tags */}
          <div className="fiche-logement-tags">
            {tags.map((tag, index) => (
              <Tags key={index} label={tag} />
            ))} 
          </div>
        </div>
        <div className="fiche-logement-host-rating">
          {/* Host */}
          <div className="fiche-logement-host">
            <Host name={host.name} picture={host.picture} />
          </div>
          {/* Rating */}
            <div className="fiche-logement-rating">
              <Rating rating={parseInt(rating)} />
            </div>
        </div>
      </div>
      {/* Collapses Description et Équipements */}
      <div className="fiche-logement-collapses">
        {/* Utilisation de Collapse avec children */}
        <Collapse title="Description">
          {description}
        </Collapse>
        <Collapse title="Équipements">
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

export default FicheLogement;