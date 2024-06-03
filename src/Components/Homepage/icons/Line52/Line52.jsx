/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Line52 = ({ color = "url(#paint0_linear_1971_10015)", className }) => {
  return (
    <svg
      className={`line-5-2 ${className}`}
      fill="none"
      height="2"
      viewBox="0 0 458 2"
      width="458"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M1 1H457" stroke={color} strokeLinecap="round" strokeWidth="2" />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1971_10008"
          x1="459.955"
          x2="-3.43196"
          y1="1"
          y2="1"
        >
          <stop className="stop" />
          <stop className="stop" stopColor="#E9EEF3" />
          <stop className="stop" offset="0.48165" stopColor="#417198" />
          <stop className="stop" offset="1" stopColor="#E9EEF3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Line52.propTypes = {
  color: PropTypes.string,
};
