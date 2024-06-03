import React from "react";
import "../../../styles/intlogo.css";
import { img_url } from "../../../utils/utils";

export const IntegrationLogo = ({ data, className,image }) => {
  console.log(img_url + data.logo);
  return (
    <div className={`integration-logo ${className}`}>
      <img className="image" alt="Imagessc" src={img_url + data.logo} />
    </div>
  );
};
