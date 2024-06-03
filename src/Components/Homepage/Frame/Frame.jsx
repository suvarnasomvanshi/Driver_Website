import PropTypes from "prop-types";
import React from "react";
import { Component25 } from "../icons/Component25/Component25";
import "../../../styles/Framestyle.css";

export const Frame = ({
  property1,
  className,
  icon = <Component25 className="component" />,
  text = "36K+",
  divClassName,
  text1 = "Healthcare Professionals",
}) => {
  return (
    <div className={`w-[262px] bg-[#252629] opacity-70 p-[8px] flex justify-start items-center`}>
      <div className="w-[48px] h-[48px]">
        {icon}
      </div>
      <div className="ms-[12px] flex-grow-1 flex flex-col justify-center items-start">
        <div className="font-medium text-[20px] text-white">{text}</div>
        <div className={`font-normal text-[16px] text-white ${divClassName}`}>{text1}</div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["lighter", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
