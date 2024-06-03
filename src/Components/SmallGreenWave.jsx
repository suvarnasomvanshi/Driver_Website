import "../styles/BrochuresAndCollateral.css";

import BrochuresAndCollateralVector from "../assets/ContactUs_Vector.png";
import React from "react";

const SmallGreenWave = (props) => {
  return (
    <div className="w-screen min-h-[274px] flex justify-center items-center relative">
      <img
        src={BrochuresAndCollateralVector}
        className="w-screen h-[120%] z-10 absolute top-0 left-0"
        alt="contact-us-vector"
      />

      <div className="lg:w-10/12 md:w-11/12 z-20 relative w-screen h-full flex flex-col justify-center items-start bg-transparent text-white md:px-0 px-4">
        <div className="lg:text-[48px] md:text-[36px] text-[32px] font-bold"
        style={{
          fontFamily: 'Helvetica Neue-Bold',
          // fontWeight: '500',
        }}
        >
          {props.heading}
        </div>
        <div className="lg:text-[32px] md:text-[24px] text-[20px] w-3/4"
        style={{
          fontFamily: 'Roboto',
          fontSize: '32px',
          fontWeight: '375',
          lineHeight: '48px',
          letterSpacing: '0.02em',
          textAlign: 'left',
        }}
        >
          {props.subheading}
        </div>
      </div>
    </div>
  );
};

export default SmallGreenWave;
