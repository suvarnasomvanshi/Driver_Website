import React, { useState, useRef, useEffect } from "react";
import { img_url } from "../../../utils/utils";
import videoPlayerIcon from "../../../assets/gallery-play-icon.svg";
import { Link } from "react-router-dom";
import vid_overlay from "../../../assets/vid_overlay.png";
// Conflict part below
// import vid_overlay from "../../../assets/vid_overlay.png";
const Banner = ({ head, paragraph, image }) => {
  const [play, setPlay] = React.useState(false);
  const videoRef = React.useRef(null);
  const handleVideoClick = (e) => {
    e.preventDefault();
    setPlay(!play);
    const video = document.getElementById("video");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  const handlePlayButtonClick = () => {
    // Play the video when the play button is clicked
    if (videoRef.current) {
      videoRef.current.play();

      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen(); // Firefox
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen(); // Chrome, Safari, and Opera
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen(); // IE/Edge
      }
    }
  };
  console.log(img_url + image);
  return (
    <div className="framedms md:h-[560px] h-auto w-full flex justify-center items-center relative sm:py-[64px] py-10 sm:px-[60px] px-10">
      <div className="lg:w-11/12 md:w-11/12 min-h-[70vh] md:mt-0 mt-[64px] w-full flex md:flex-row flex-col md:justify-between justify-center items-center relative">
        <div className="md:w-4/6 text-white md:pr-[16px] flex flex-col justify-center md:items-start items-center">
          <div className=" lg:text-[48px] md:text-[40px] text-[48px] font-bold pt-10"
            style={{
              fontFamily: 'Helvetica Neue-Medium',
              fontSize: '48px',
              fontWeight: '500',
              lineHeight: '68px',
              letterSpacing: '0.02em',
              textAlign: 'left',
            }}
          >
            {head}
          </div>
          <div className="lg:w-full md:w-11/12 text-[14px] font-extralight my-[24px] md:text-[24px] pr-[10px]"
            style={{
              //styleName: Metric_Descriptor;
              fontFamily: 'Noto Sans',
              fontSize: '24px',
              fontWeight: '300',
              lineHeight: '32px',
              letterSpacing: '0.01em',
              textAlign: 'left',
            }}
          >
            {/* conflict below */}
            {/* <div className="framedms  h-auto w-full flex justify-center items-center relative sm:py-[64px] py-10 sm:px-[60px] px-10 ">
      <div className="lg:w-full md:w-11/12  md:mt-0 mt-[64px] w-full flex md:flex-row flex-col md:justify-between justify-center items-center">
        <div className="md:w-[648px] text-white md:pr-[32px] flex flex-col justify-center md:items-start items-center">
          <div className="md:w-full lg:text-[48px] md:text-[40px] text-[48px] font-bold  pt-10">
            {head}
          </div>
          <div className=" md:w-full text-[14px] font-normal my-[24px] font-notoSans md:text-[24px]"> */}
            {/* conflict ends */}
            {paragraph}
          </div>
          {/* <button className="bg-white text-[#295989] h-[50px] py-[12px] px-[47px] uppercase rounded-[6px] border border-1 border-white text-[16px] cursor-pointer font-bold">
            Request a Demo
          </button> */}
          <Link
            to="/contactus#contactusForm"
            className="bg-white text-[#295989] h-[50px] py-[12px] px-[47px] uppercase rounded-[6px] border border-1 border-white text-[16px] cursor-pointer font-bold"
          >
            Request a Demo
          </Link>
        </div>
        <div
          className="lg:w-[648px] md:w-[35vw] w-[80vw] h-[435px] rounded-[12px] overflow-hidden flex justify-center items-center cursor-pointer bg-[rgba(0, 0, 0, 0.30)] shadow-[0px 4px 48px 12px rgba(0, 0, 0, 0.25)] relative"
          onClick={handleVideoClick}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: '648px',
            maxHeight: '435px'
          }}
        >
          <video
            ref={videoRef}
            className="rounded-xl w-[648px] h-[435px] object-cover shadow-[0px 4px 48px 12px rgba(0, 0, 0, 0.25)] "
            width="100%"
            height="100%"
            id="video"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: '648px',
              maxHeight: '435px'
            }}
          // onClick={handlePlayButtonClick}
          >
            <source
              // src={`${img_url}${image}`}
              src={`${image}`}
              type="video/mp4"
              className="shadow-[0px 4px 48px 12px rgba(0, 0, 0, 0.25)]"
              style={{
                borderRadius: "12px",
                boxShadow: "0px 4px 48px 12px rgba(0, 0, 0, 0.25)",
              }}

            />
          </video>
          {!play && (
            <img
              src={vid_overlay}
              className="z-10 rounded-xl w-[648px] h-[435px] object-cover shadow-[0px 4px 48px 12px rgba(0, 0, 0, 0.25)] absolute top-0 left-0"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                maxWidth: '648px',
                maxHeight: '435px'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
