import PropTypes from "prop-types";
import React from "react";
import "../../../styles/HMenustyle.css";

export const Menu = ({ property1, className, text = "Blog", onMouseEnter, onMouseLeave }) => {
  return (
    <div className={`menu ${className}`} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      <div className={`blog-2 property-1-2-${property1}`}>{text}</div>
      <div className={`rectangle-2 ${property1}`} />
    </div>
  );
};

Menu.propTypes = {
  property1: PropTypes.oneOf(["selected", "default"]),
  text: PropTypes.string,
};
