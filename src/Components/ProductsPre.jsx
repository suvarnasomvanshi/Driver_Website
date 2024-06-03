import React from "react";
import products_header from "../assets/about_Us.png";
import "../styles/dmsstyle.css";
import { ComplianceLogos } from "./Products/ComplianceLogos/ComplianceLogos";

import Banner from "./Products/Banner/Banner";
import HimsBenifits from "./Products/HimsBenifits/HimsBenifits";
import SmallBlueWave from "./SmallBlueWave";
import { img_url } from "../utils/utils";

export const ProductsPre = ({ head, paragraph, data }) => {
  console.log(data);
  const { title, description, video } = data.product;
  console.log("debug",video);
  return (
    <>
      <Banner head={title} paragraph={description} image={video} />

      <div className=" flex flex-col items-center relative flex-[0_0_auto] w-full my-[120px]">
        <HimsBenifits />
        <ComplianceLogos data={data.global_compliances} />
      </div>
      <SmallBlueWave
        heading="Key Modules"
        subheading="So that you spend less time at the computer and more time on what matters… your patients."
      />
    </>
  );
};
