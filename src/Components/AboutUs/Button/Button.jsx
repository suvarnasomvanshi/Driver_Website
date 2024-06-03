import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Buttonstyle.css";
import { Link } from "react-router-dom";

export const Button = ({ property1, className, supportClassName, text = "Support",link }) => {
  return (
    <div className={`button ${property1} ${className}`}>
      <Link to={link}>
        <div
          className={`support ${
            ["default-large", "default-small", "variant-5", "white-large"].includes(property1)
              ? supportClassName
              : undefined
          }`}
        >
          <div className="frame-3" style={{fontWeight:"500"}}>
            {property1 === "default-small-icon" && (
              <>
                <div className="support-2">{text}</div>
                <img
                  className="chevron-down"
                  alt="Chevron down"
                  src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/chevron-down.svg"
                />
              </>
            )}
            {["default-large", "default-small"].includes(property1) && <>{text}</>}
            {property1 === "white-large" && <>SUPPORT</>}
            {property1 === "variant-5" && <>REQUEST A DEMO</>}
          </div>
        </div>
      </Link>
    </div>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["variant-5", "white-large", "default-large", "default-small", "default-small-icon"]),
  text: PropTypes.string,
};
