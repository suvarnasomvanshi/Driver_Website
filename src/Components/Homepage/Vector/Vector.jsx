import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Vectorstyle.css";

export const Vector = ({
  property1,
  className,
  propertyDefault = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/property-1-default.svg",
}) => {
  return (
    <img
      className={`vector ${property1} ${className}`}
      alt="Property default"
      src={
        property1 === "small"
          ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/property-1-small.svg"
          : propertyDefault
      }
    />
  );
};

Vector.propTypes = {
  property1: PropTypes.oneOf(["small", "default"]),
  propertyDefault: PropTypes.string,
};
