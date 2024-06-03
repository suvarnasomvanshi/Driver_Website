import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "../../../styles/Sliderstyle.css";

export const Slider = ({ property1, className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 3200);

    return () => clearInterval(interval);
  }, []);
  //ellipse one

  return (
    <div style={{left:window.innerWidth/2-60}} className={`slider ${className}`}>
      <div className={(currentSlide===0)?`ellipse ${property1}`:`ellipse property-1-${property1}`} />
      <div className={(currentSlide===1)?`ellipse ${property1}`:`ellipse property-1-${property1}`} />
      <div className={(currentSlide===2)?`ellipse ${property1}`:`ellipse property-1-${property1}`} />
      <div className={(currentSlide===3)?`ellipse ${property1}`:`ellipse property-1-${property1}`} />
    </div>
  );
};

Slider.propTypes = {
  property1: PropTypes.oneOf(["two", "four", "three", "one"]),
};
