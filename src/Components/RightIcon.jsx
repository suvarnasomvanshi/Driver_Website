import React from "react";

const RightIcon = ({ color, stroke, className }) => {
  return (
    <svg
      className={`property-1-right ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="24" cy="24" fill={color} r="24" />
      <path
        className="path"
        d="M17 24H31"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M24 17L31 24L24 31"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default RightIcon;
