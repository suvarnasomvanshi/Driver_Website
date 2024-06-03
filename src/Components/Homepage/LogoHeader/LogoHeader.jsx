import React from "react";
import "../../../styles/HLogoHeaderstyle.css";
import { useNavigate } from "react-router-dom";

export const LogoHeader = ({ className }) => {
  let navigate=useNavigate();
  return (
    <div onClick={() => {navigate("/");window.scrollTo(0, 0);}} className={`logo-header ${className} cursor-pointer ml-6`}>
      <img
        className="suvarna-s"
        alt="Suvarna s"
        src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/suvarna-s-1.png"
      />
      <img
        className="suvarna-logo-header"
        alt="Suvarna logo header"
        src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/suvarna-logo-header-flip-fixed-1.png"
      />
    </div>
  );
};
