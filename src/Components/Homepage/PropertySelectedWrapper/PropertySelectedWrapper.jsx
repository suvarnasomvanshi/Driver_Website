import PropTypes from "prop-types";
import React, { useState } from "react";
import "../../../styles/PSWstyle.css";
import Navbar from "../Navbar/Navbar";

export const PropertySelectedWrapper = ({ property1, className, text = "Products", onMouseEnter, onMouseLeave }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
   <Navbar/>  
  );
};

PropertySelectedWrapper.propTypes = {
  property1: PropTypes.oneOf(["selected-2", "selected-3", "selected", "default"]),
  text: PropTypes.string,
};
