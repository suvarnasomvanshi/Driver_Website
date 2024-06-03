
import React from "react";
import "../../../styles/intbutton.css";

export const Button = ({ property1, className }) => {

  return (
    <div className={`button ${property1} ${className} `}>
            <div className="text-wrapper-3 text-black">Download</div>
            <img
              className="download"
              alt="Download"
              src={
                "https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6532b974383de2c8bb576865/img/download-minimalistic-svgrepo-com-1-1.svg"
    
              }
            />

      </div>
  );
};