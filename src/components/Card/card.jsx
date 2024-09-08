import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Card ({lodging}) {
    return (
        lodging.map((lodging)=>(
            <Link to={`/location/${lodging.id}`} className="card" key={lodging.id}>
                <img src={lodging.cover} alt={lodging.title} />
                <h2>{lodging.title}</h2>
            </Link>
        ))
    );
};

Card.propTypes = {
        lodging: PropTypes.array.isRequired
    }

export default Card;