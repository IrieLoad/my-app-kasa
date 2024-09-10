import PropTypes from 'prop-types';

function Host({ name, picture }) {
  return (
    <div className="host">
      <span className="host-name">{name}</span>
      <img
        className="host-picture"
        src={picture}
        alt={`Portrait de ${name}`}
      />
    </div>
  );
}

Host.propTypes = {
  name: PropTypes.string.isRequired, 
  picture: PropTypes.string.isRequired, 
};

export default Host;