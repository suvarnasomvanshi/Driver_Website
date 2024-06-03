import PropTypes from "prop-types";
import React from "react";
import { Component215 } from "../icons/Component215/Component215";
import { Component217 } from "../icons/Component217/Component217";
import { Component25 } from "../icons/Component25/Component25";
import { Component27 } from "../icons/Component27/Component27";
import { Frame } from "../Frame/Frame";
import { LargeButton } from "../LargeButton/LargeButton";
import { Slider } from "../Slider/Slider";
import { SliderNew } from "../SliderNew/SliderNew";
import "../../../styles/SliderVstyle.css";

export const SliderV = ({
  property1,
  className,
  sliderNewVectorPropertyDefaultClassName,
  sliderNewVectorPropertyDefaultClassNameOverride,
  sliderNewVector84Color = "url(#paint0_linear_2082_1121)",
  largeButtonDivClassName,
  largeButtonPropertyOutlineClassName,
  frameIcon = <Component215 className="component-2" />,
  override = <Component25 className="component-2" />,
  frameIcon1 = <Component27 className="component-2" />,
  frameIcon2 = <Component217 className="component-2" />,

}) => {
  return (
    <div className={`slider-v ${property1} ${className}`}>
      <div className="overlap-group-2">
        {property1 === "static" && <div className="diffuser" />}

        {property1 === "animation-1" && (
          <>
            <div className="slider-component">
              <img
                className="img"
                alt="Pexels artem podrez"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-2.png"
              />
              <img
                className="pexels-artem-podrez-2"
                alt="Pexels artem podrez"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-3.png"
              />
              <img
                className="pexels-artem-podrez-3"
                alt="Pexels artem podrez"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-4.png"
              />
              <div className="frame-wrapper">
                <div className="frame-7">
                  <p className="text-wrapper">Trusted by 1000+ healthcare providers</p>
                  <p className="p">
                    Our wide range of innovative technology-enabled solutions cater to hospitals, diagnostic centres,
                    medical colleges and other healthcare touch points.
                  </p>
                </div>
              </div>
            </div>
            <LargeButton className="large-button-instance " property1="solid-white" text="EXPLORE PRODUCTS" />
          </>
        )}

        {["animation-1", "static"].includes(property1) && (
          <div className="content-n-CTA">
            {property1 === "static" && (
              <>
                <div className="frame-8">
                  <div className="text-wrapper-2">Suvarna</div>
                  <div className="frame-9">
                    <p className="trusted-by">
                      <span className="span">Trusted by </span>
                      <span className="text-wrapper-3">1000+</span>
                      <span className="span"> healthcare providers</span>
                    </p>
                    <p className="p">
                      Our wide range of innovative technology-enabled solutions cater to hospitals, diagnostic centres,
                      medical colleges and other healthcare touch points.
                    </p>
                  </div>
                </div>
                <LargeButton className="instance-node text-center" property1="solid-white" text="EXPLORE PRODUCTS" />
              </>
            )}

            {property1 === "animation-1" && (
              <>
                <Frame
                  className="frame-482671"
                  icon={<Component215 className="component-2" />}
                  property1="default"
                  text="36K+"
                  text1="Healthcare Professionals"
                />
                <Frame
                  className="frame-482671"
                  divClassName="frame-instance"
                  icon={<Component25 className="component-2" />}
                  property1="default"
                  text="15K+"
                  text1="Physicians"
                />
                <Frame
                  className="frame-482671"
                  icon={<Component27 className="component-2" />}
                  property1="default"
                  text="4K+"
                  text1="Organisations"
                />
                <Frame
                  className="frame-482671"
                  icon={<Component217 className="component-2" />}
                  property1="default"
                  text="60M+"
                  text1="Patient Records"
                />
              </>
            )}
          </div>
        )}

        {property1 === "animation-1" && <Slider className="slider-instance" property1="one" />}

        {property1 === "green" && (
          <>
            <SliderNew
              className="slider-new-instance"
              property1="frame-482703"
              vector84Color={sliderNewVector84Color}
              vectorPropertyDefaultClassName={sliderNewVectorPropertyDefaultClassNameOverride}
              vectorPropertyDefaultClassNameOverride={sliderNewVectorPropertyDefaultClassName}
            />
            
             <div className=" w-full justify-center items-center">
             <LargeButton
              className={largeButtonPropertyOutlineClassName}
              divClassName={largeButtonDivClassName}
              property1="solid-white"
              text="EXPLORE PRODUCTS"
            />
             </div>

            <div className="metrics-left">
              <Frame
                className="frame-482671"
                icon={frameIcon}
                property1="default"
                text="36K+"
                text1="Healthcare Professionals"
              />
              <Frame
                className="frame-482671"
                divClassName="frame-instance"
                icon={override}
                property1="default"
                text="15K+"
                text1="Physicians"
              />
              <Frame className="frame-482671" icon={frameIcon1} property1="default" text="4K+" text1="Organisations" />
              <Frame
                className="frame-482671"
                icon={frameIcon2}
                property1="default"
                text="60M+"
                text1="Patient Records"
              />
            </div>
            <Slider className="slider-instance" property1="one" />
            <img
              className="vector-2 w-full"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-5.svg"
            />
          </>
        )}

        {property1 === "static" && (
          <>
            <div className="slider-2">
              <div className="ellipse-5" />
              <div className="ellipse-6" />
              <div className="ellipse-6" />
              <div className="ellipse-6" />
              <div className="ellipse-6" />
            </div>
            <div className="metrics-left">
              <Frame
                className="frame-482671"
                icon={<Component215 className="component-2" />}
                property1="default"
                text="36K+"
                text1="Healthcare Professionals"
              />
              <Frame
                className="frame-482671"
                divClassName="frame-instance"
                icon={<Component25 className="component-2" />}
                property1="default"
                text="15K+"
                text1="Physicians"
              />
              <Frame
                className="frame-482671"
                icon={<Component27 className="component-2" />}
                property1="default"
                text="4K+"
                text1="Organisations"
              />
              <Frame
                className="frame-482671"
                icon={<Component217 className="component-2" />}
                property1="default"
                text="60M+"
                text1="Patient Records"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

SliderV.propTypes = {
  property1: PropTypes.oneOf(["animation-1", "static", "green"]),
  sliderNewVector84Color: PropTypes.string,
};
