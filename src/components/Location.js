import { useParams } from "react-router-dom";
import lodging from "../data/lodging.json";

function lodgingID(id) {
    return lodging.find((location) => location.id === id);
}

function Location() {
    let { id } = useParams();
    let location = lodgingID(id);
    let pictures = location.pictures;

    // Vérifie si la location existe
    if (!location) {
        return <p>Aucune location trouvée pour l'ID {id}</p>;
    }

    return (
        <div>
            <p>Voici la location avec l'id {id}</p>
            <p>Voici le titre de la location : {location.title}</p>
            <p>Description : {location.description}</p>
            <div className="pictures">
                {pictures.map((picture,index) => {
                    return (
                        <img src = {picture} alt = {picture.title} key={index} />
                     );
                 })}
            </div>
        </div>
    );
}

export default Location;