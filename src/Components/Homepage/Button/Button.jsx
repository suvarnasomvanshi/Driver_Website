import PropTypes from "prop-types";
import React from "react";
import "../../../styles/HButtonstyle.css";

export const Button = ({ property1, className, text = "Support" }) => {
  return (
    <div className={`button ${property1} ${className}`}>
      <div className="support">
        <div className="frame-13">
          {property1 === "default-small-icon" && (
            <>
              <div className="support-2">{text}</div>
              <img
                className="chevron-down-2"
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
    </div>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["variant-5", "white-large", "default-large", "default-small", "default-small-icon"]),
  text: PropTypes.string,
};
