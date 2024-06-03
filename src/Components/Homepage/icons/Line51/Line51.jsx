import PropTypes from "prop-types";
import React from "react";

export const Line51 = ({ color = "url(#paint0_linear_1971_10011)", className }) => {
  return (
    <svg
      className={`line-5-1 ${className}`}
      fill="none"
      height="303"
      viewBox="0 0 2 303"
      width="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M1 301.5L1 1.50001" stroke={color} strokeLinecap="round" strokeWidth="2" />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1971_10012"
          x1="1"
          x2="1"
          y1="-0.443848"
          y2="304.416"
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

Line51.propTypes = {
  color: PropTypes.string,
};
