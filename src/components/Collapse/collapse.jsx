import React, { useState } from "react";
import PropTypes from "prop-types"; 
import arrowCollapse from "../../assets/images/arrow-collapse.png";

function CollapsePanel({ title, children }) {
  const [isExpanded, setExpanded] = useState(false);

  function togglePanel() {
    setExpanded(!isExpanded);
  }

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={togglePanel}>
        <h2 className="collapse-title">{title}</h2>
        <img
          src={arrowCollapse}
          alt="Toggle Collapse"
          className={`collapse-icon ${isExpanded ? "open" : ""}`}
        />
      </div>
      {isExpanded && <div className="collapse-content">{children}</div>}
    </div>
  );
}

CollapsePanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CollapsePanel;