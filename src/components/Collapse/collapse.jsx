import React, { useState } from "react";
import PropTypes from "prop-types"; 
import arrowCollapse from "../../assets/images/arrow-collapse.png";
import "../../styles/Components/collapse.scss";


function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <img src={arrowCollapse} alt={isOpen ? "Réduire" : "Agrandir"} className={`collapse-arrow ${isOpen ? "collapse-arrow-open" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(children) ? (
            <ul className="collapse-list">
              {children.map((item, index) => (
                <li key={index} className="collapse-item"> {item} </li>
              ))}
            </ul>
          ) : (
            <p className="collapse-text">{children}</p>
          )}
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired, 
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired, 
};

export default Collapse;