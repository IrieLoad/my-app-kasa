import PropTypes from "prop-types";

function Card({ logement }) { 
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={logement.cover} alt={logement.title} className="card-image" /> 
      </div>
      <div className="card-content">
        <h2 className="card-title">{logement.title}</h2> 
      </div>
    </div>
  );
}

Card.propTypes = {
  logement: PropTypes.shape({ 
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;