import PropTypes from "prop-types";
import React from "react";
import "../../../styles/intcategory.css";

export const Category = ({ property1, className, text = "All" }) => {
  return (
    <div className={`category ${property1} ${className}`}>
      <div className="all">{text}</div>
    </div>
  );
};

Category.propTypes = {
  property1: PropTypes.oneOf(["selected", "default"]),
  text: PropTypes.string,
};