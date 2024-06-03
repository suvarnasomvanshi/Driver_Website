import PropTypes from "prop-types";
import React from "react";
import { Property1LeftDisabled } from "../icons/Property1LeftDisabled/Property1LeftDisabled";
import { Property1Right } from "../icons/Property1Right/Property1Right";
import "../../../styles/ProductSliderstyle.css";

export const ProductSlider = ({ property1 }) => {
  return (
    <div className="product-slider">
      <Property1LeftDisabled
      className="slider-3"
        color={property1 === "variant-2" ? "#001E41" : "#EBEDF0"}
        stroke={property1 === "variant-2" ? "white" : "#001E41"}
      />
      <Property1Right
        className="slider-3"
        color={property1 === "variant-2" ? "#EBEDF0" : "#001E41"}
        stroke={property1 === "variant-2" ? "#001E41" : "white"}
        
      />
    </div>
  );
};

ProductSlider.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
