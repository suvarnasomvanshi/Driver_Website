import PropTypes from "prop-types";
import React from "react";
import { ProductCardLogos26 } from "../icons/ProductCardLogos26/ProductCardLogos26";
import { ProductCardLogos1 } from "../icons/ProductCardLogos1/ProductCardLogos1";
import { ProductCardLogos2 } from "../icons/ProductCardLogos2/ProductCardLogos2";
import { ProductCardLogos5 } from "../icons/ProductCardLogos5/ProductCardLogos19";
import { ProductCardLogos16 } from "../icons/ProductCardLogos16/ProductCardLogos16";
import { ProductCardLogos19 } from "../icons/ProductCardLogos19/ProductCardLogos19";
import { ProductCardLogos27 } from "../icons/ProductCardLogos27/ProductCardLogos27";
import "../../../styles/Productstyle.css";

export const Products = ({
  property1,
  className,
  arrowRight = "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right.svg",
  icon = <ProductCardLogos26 className="product-card-logos" />,
  icon1 = <ProductCardLogos27 className="product-card-logos" />,
  icon2= <ProductCardLogos19 className="product-card-logos" />,
  icon3= <ProductCardLogos1 className="product-card-logos" />,
  icon4= <ProductCardLogos2 className="product-card-logos" />,
  icon5= <ProductCardLogos5 className="product-card-logos" />,
  icon6= <ProductCardLogos16 className="product-card-logos" />,
  pexelsDanielFrankClassName,
  text = "Business Intelligence & MIS",
  text1 = "BI & MIS",
  text2 = "Digital Campus Management System",
  text3 = "Edukares",
  text4 = "Suvarna Laboratory Information Management System",
  text5 = "SLIMS",
  text6 = "DMS",
  text7= "Hospital Information Management System",
  text8="HIMS",
  text9= "Radiology Information System",
  text10="RIS-PACS",
  text11 ="Electronic Medical Record",
  text12="EMR",
  text13="TRI Mangement System",
  text14="TRIMS"
}) => {
 const navigateProducts=(a)=>{
    switch (a) {
      case "products-5":
        return ("/products/bimis");
      case "products-2-instance":
        return("/products/edukares");
      case "products-instance":
        return("/products/dms");
      case "products-6":
        return("/products/slims");
      case "products-instance a":
        return("/products/hims");
      case "products-2-instance b":
        return("/products/rispacs");
      case "products-5 c":
        return("/products/emr");
      case "products-6 d":
        return("/products/trims");
      default:
        return("/")
    }
 }
  return (
    <>
   
    <div className={`products ${className}`}>
   
     <div className="document-management">
        {property1 === "DMS" && <>Document Management System</>}

        {property1 === "edukares" && <>{text2}</>}

        {property1 === "BI-MIS" && <>{text}</>}

        {property1 === "SLIMS" && <p className="text-wrapper-24">{text4}</p>}

              {property1 === "HIMS" && <>{text7}</>}
           {property1 === "RIS-PACS" && <>{text9}</>}
           {property1 === "EMR" && <>{text11}</>}
           {property1 === "TRIMS" && <>{text13}</>}
      </div>
 
    <a href={navigateProducts(className)} className="frame-14">
        <div  className="text-wrapper-4" >Know more</div>
        <img className='arrow-right' alt="Arrow right" src={arrowRight} />
      </a>
      
      <div className="frame-15">
      {className==="products-5" ?icon:
      className==="products-2-instance" ?icon2:
      className==="products-instance" ?icon6:
      className==="products-6" ?icon4:
      className==="products-instance a" ?icon1:
      className==="products-2-instance b" ?icon3:
      className==="products-5 c" ?icon5:
      className==="products-6 d" ?icon6:icon}
       
      <div className={`DMS-2 ${property1}`}>
        {property1 === "DMS" && <>{text6}</>}

          {property1 === "edukares" && <>{text3}</>}

          {property1 === "BI-MIS" && <>{text1}</>}

          {property1 === "SLIMS" && <>{text5}</>}

         {property1 === "HIMS" && <>{text8}</>}

          {property1 === "RIS-PACS" && <>{text10}</>}

          {property1 === "EMR" && <>{text12}</>}

          {property1 === "TRIMS" && <>{text14}</>}
        </div>

      </div>
      <img
        className={`pexels-daniel-frank property-1-${property1} ${pexelsDanielFrankClassName}`}
        alt="Pexels daniel frank"
        src={
          property1 === "edukares"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-anand-raj-2880979-1@2x.png"
            : property1 === "BI-MIS"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-alphatradezone-5784807-1.png"
            : property1 === "SLIMS"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-pixabay-356040-1.png"
            :property1==="DMS" 
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-daniel-frank-305566-1.png"
            :property1==="HIMS"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-alphatradezone-5784807-1.png"
            :property1==="RIS-PACS"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-anand-raj-2880979-1@2x.png"
            :property1==="EMR"
            ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-pixabay-356040-1.png"
            : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-daniel-frank-305566-1.png"
        }
      />
    </div>
    </> );
};

Products.propTypes = {
  property1: PropTypes.oneOf(["TRIMS","EMR","RIS-PACS","HIMS","SLIMS", "BI-MIS", "edukares", "DMS"]),
  arrowRight: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15:PropTypes.string
};
