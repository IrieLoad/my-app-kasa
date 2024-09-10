import PropTypes from "prop-types";
import Host from "../Host/host";
import Tags from "../Tags/tags";
import Rating from "../Rating/rating";

function Logement({ title, localisation, tags, host, rating }) {
  return (
    <div className="logement">
      {/* Title and Location */}
      <div className="logement-header">
        <h1 className="logement-title">{title}</h1>
        <p className="logement-location">{localisation}</p>
      </div>

      {/* Tags */}
      <div className="logement-tags">
        {tags.map((tag, index) => (
          <Tags key={index} label={tag} />
        ))}
      </div>

      {/* Host and Notation */}
      <div className="logement-host-rating">
        <Host name={host.name} picture={host.picture} />
        <Rating rating={parseInt(rating)} />
      </div>
    </div>
  );
}

Logement.propTypes = {
  title: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Logement;