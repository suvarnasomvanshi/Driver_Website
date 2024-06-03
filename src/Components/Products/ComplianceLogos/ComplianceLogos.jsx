import PropTypes from "prop-types";
import React from "react";
import "../../../styles/compliancestyleP.css";
import { img_url } from "../../../utils/utils";

export const ComplianceLogos = ({ data }) => {
  console.log("data", data);
  return (
    <div className="compliance-logosP w-screen">
      <p className="md:w-full w-11/12 font-normal text-[#6D747A] text-[20px] text-center"
      >
        All our products adhere to global compliance standards
      </p>
      <div className="lg:w-1/2 md:w-2/3 w-full mt-[10px] flex justify-evenly items-center flex-wrap"
      style={{
        maxWidth:'1072px',
        width:'100%',
        cursor:'pointer'
      }}
      >
        {data?.map((item) => (
          <img
            // src={img_url + item?.image}
            src={item?.image}
            className="h-[50px]"
            alt="product_global_complaince"
          />
        ))}
      </div>
    </div>
  );
};

ComplianceLogos.propTypes = {
  image: PropTypes.string,
  img: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
};
