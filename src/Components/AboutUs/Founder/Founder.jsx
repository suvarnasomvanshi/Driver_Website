import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Founderstyle.css";

export const Founder = ({
  maskGroup = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group@2x.png",
  text = "T. Suresh",
  text1 = "Managing Director",
}) => {
  console.log("Founder", maskGroup, text, text1);
  return (
    <div className="founder">
      <img className="mask-group rounded-full" alt="Mask group" src={maskGroup} />
      <div className="frame-2">
        <div className="t-suresh">{text}</div>
        <div className="managing-director">{text1}</div>
      </div>
    </div>
  );
};

Founder.propTypes = {
  maskGroup: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
