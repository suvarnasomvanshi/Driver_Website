import PropTypes from "prop-types";
import React from "react";
import "../../../styles/InputFieldstyle.css";

export const InputField = ({ property1, className, text = "Email", text1 = "e.g. person@gmail.com" }) => {
  return (
    <div className={`input-field ${className}`}>
      <div className="first-name">
        {property1 === "half" && <>First name</>}

        {property1 === "default" && <>{text}</>}

        {property1 === "phone" && <>Phone</>}

        {property1 === "message" && <>Message</>}
      </div>
      <div className={`frame-25 property-1-10-${property1}`}>
        {["default", "half", "message"].includes(property1) && (
          <div className="first-name-2">
            {property1 === "half" && <>First name</>}

            {property1 === "default" && <input placeholder={text1}/>}

            {property1 === "message" && <textarea placeholder="Leave us a message..."></textarea>}
          </div>
        )}

        {property1 === "phone" && (
          <>
            <div className="frame-26">
              <div className="text-wrapper-6">+91</div>
              <img
                className="chevron-down-3"
                alt="Chevron down"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/chevron-down-1.svg"
              />
            </div>
            <div className="text-wrapper-7">Mobile number</div>
          </>
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  property1: PropTypes.oneOf(["default", "message", "phone", "half"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
