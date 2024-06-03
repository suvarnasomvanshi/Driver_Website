import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "../../../styles/SliderNewstyle.css";

export const SliderNew = ({
  className
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-1.png",
      textwrapper: "Trusted by 100+ healthcare providers",
      text: `Our wide range of innovative technology-enabled solutions cater to hospitals,diagnostic centres, medical colleges and other healthcare touch points.`,
    },
    {
      image:
        "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-2.png",
      textwrapper: "Simple. Reliable. Proven. Affordable",
      text: "Suvarna's streamlined healthcare solutions prioritize simplicity and affordability without compromising quality or reliability.",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-3.png",
      textwrapper: " Celebrating 23+ years of innovation",
      text: " Our two-decade journey of unwavering commitment to improving health outcomes signifies a legacy built on experience, expertise, and continuous innovation.",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-4.png",
      textwrapper: "Digitally transforming healthcare",
      text: " Suvarna pioneers the digital revolution in healthcare, leveraging cutting-edge technology and empowering healthcare providers to deliver superior patient care.",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const currentSlideInfo = slides[currentSlide];
  return (
    <div className={`slider-new ${className}`}>
      {
        <div 
          style={{ position: "absolute",
          transition: 'opacity 1s ease-in-out'}}
        >
          <img 
            style={{ position: "relative",opacity:"1",transition: 'opacity 1s ease-out'}}
            src={`${currentSlideInfo.image}`}
          />
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgb(0,0,0,0.5)",
              top: "0",
              left: "0",
              transform: 'translate(-0%, -0%)',
              height: "100%",
              width: "100%",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "500px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          ><div
          style={{
            textAlign:'center',
            width:'60%'
          }}
          >
            <div
              style={{
                marginTop:"10px",
                position: "relative",
                color: "white",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              {currentSlideInfo.textwrapper}
            </div>
            <h1
              style={{
                marginTop:"20px",
                fontStyle:"normal",
                lineHeight:"1.61",
                position: "relative",
                color: "white",
                fontWeight: "light",
                fontSize:"20px"
              }}
            >
              {currentSlideInfo.text}
            </h1></div>
          </div>
        </div>
      }
      
         </div>
  );
};

SliderNew.propTypes = {
  property1: PropTypes.oneOf([
    "frame-482705",
    "frame-482704",
    "frame-482703",
    "frame-482706",
  ]),
  vector84Color: PropTypes.string,
};
