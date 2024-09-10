import PropTypes from "prop-types";
import completedNotation from "../../assets/images/completedNotation.png";
import emptyNotation from "../../assets/images/emptyNotation.png";

function Rating({ rating }) {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <img
      key={index}
      className="rating-star"
      src={index < rating ? completedNotation : emptyNotation}
      alt={index < rating ? "Étoile pleine" : "Étoile vide"}
    />
  ));

  return <div className="rating">{stars}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired, 
};

export default Rating;