import PropTypes from "prop-types";

function Tag({ label }) {
  return (
    <div className="tag">
      <span className="tag-label">{label}</span>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;