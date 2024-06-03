import React, { useEffect, useState } from "react";
import { Button } from "../Components/AboutUs/Button/Button";
import { Founder } from "../Components/AboutUs/Founder/Founder";
import "../styles/About.css";

//  importing spra Icons
import SmallBlueWave from "../Components/SmallBlueWave";
import SPRATick from "../assets/SPRA_Tick.png";
import SPRAThumbsUp from "../assets/SPRA_thumbs_Up.png";
import SPRADollar from "../assets/SRPA_Dollar.png";
import SPRASmilie from "../assets/SRPA_Smilie.png";
import vid_overlay from "../assets/vid_overlay.png";
import about_us from "../assets/about_Us.png";
import {
  useGetBannerContentQuery,
  useGetCardContentQuery,
  useGetTeamContentQuery,
  useGetVissionContentQuery,
} from "../redux/features/about/aboutApi";
import useWindowDimensions from "../utils/windowDimension";
import { base_url, img_url } from "../utils/utils";

export const AboutUs = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { data: bannerData, loading, error } = useGetBannerContentQuery();
  const {
    data: vissionData,
    loading: vissionLoading,
    error: vissionError,
  } = useGetVissionContentQuery();

  const {
    data: teamData,
    loading: teamLoading,
    error: teamError,
  } = useGetTeamContentQuery();
  const {
    data: cardData,
    loading: cardLoading,
    error: cardError,
  } = useGetCardContentQuery();

  const [id, setId] = useState(0);

  const { width, height } = useWindowDimensions();
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
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  if (error || vissionError || teamError || cardError) {
    console.log("error", error, vissionError, teamError);
    return <div>Something went wrong</div>;
  }

  if (
    loading ||
    !bannerData ||
    vissionLoading ||
    !vissionData ||
    teamLoading ||
    !teamData ||
    cardLoading ||
    !cardData
  ) {
    return <div>Loading...</div>;
  }

  console.log("data", cardData);

  const chooseSuvarna = [
    {
      id: 1,
      title: "Simple",
      description:
        "Our solutions are engineered to optimize the workflows and provide a simple interaction with the system to take away the complexities of the daily operations",
      image: SPRASmilie,
    },
    {
      id: 2,
      title: "Reliable",
      description:
        "Our products undergo multi level testing to ensure that our clients get the desired & consistent outcomes all the time.",
      image: SPRAThumbsUp,
    },
    {
      id: 3,
      title: "Proven",
      description:
        "We take pride in the fact that our products and solutions are being used and accepted by 500+ healthcare organizations of all sizes.",
      image: SPRATick,
    },
    {
      id: 4,
      title: "Affordable",
      description:
        "We firmly believe that proven & reliable products and solutions should be accessible to every healthcare provider.",
      image: SPRADollar,
    },
  ];

  console.log("data", teamData);

  return (
    <>
      <div className="w-[100vw] h-auto flex flex-col justify-start items-start about ">
        <div className="w-full sm:mt-20 flex flex-col justify-end items-center relative pb-[20px]">
          <div className="w-10/12 flex flex-col justify-center items-start">
            <div className="compliance-header">ABOUT US</div>
            <div className="">
              <p className=" lg:w-10/12 font-medium text-[#08090A] lg:text-[48px] md:text-[40px] text-[32px]">
                {bannerData && bannerData[0]?.title.split(" ").map((word, index) => {
                  return <span className="mt-5 font-Helvetica font-Neue"
                    style={{
                      fontFamily: 'Helvetica Neue-Medium',
                      fontSize: '48px',
                      fontWeight: '500',
                      lineHeight: '72px',
                      letterSpacing: '0.02em',
                      textAlign: 'left',
                      //  color: index === 4 ? '#2B6997' : '#08090A'
                    }}
                  >
                    {/* {word}&nbsp; */}
                    {word.split("\u2028").length == 2 ?
                      <>
                        {/* `${word.split("\u2028")[0]}\n${word.split("\u2028")[1]}\u00A0` */}
                        <span style={{ color: '#2B6997', fontFamily: 'Helvetica Neue-Medium' }}>{word.split("\u2028")[0]}</span>
                        <br />
                        {word.split("\u2028")[1]}&nbsp;
                      </>
                      :
                      `${word}\u00A0`}

                  </span>
                })}
                {/* <span className="mt-5 font-Helvetica font-Neue"
                 style={{
                  // font-family: Helvetica Neue;
                  fontSize: '48px',
                  fontWeight: '500',
                  lineHeight: '72px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                 }}
                >
                  {bannerData && bannerData[0]?.title}
                </span> */}
                <span className="text-[#2B6997]"></span>
              </p>
              <p
                className="lg:w-[70%] text-[#3C4043] lg:text-[20px] md:text-[20px] text-[16px] my-2 font-Noto font-sans"
                style={{
                  //styleName: Metric_Descriptor;
                  // fontFamily: 'Noto Sans',
                  fontSize: '24px',
                  fontWeight: '400',
                  lineHeight: '36px',
                  letterSpacing: '0.01em',
                  textAlign: 'justify',
                  color: '#3C4043'
                }}
              >
                {bannerData[0]?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full my-[60px] flex justify-center items-center relative ">
          {/* gradient card */}
          <div
            className="lg:w-670px md:w-10/12 w-full h-[680px] md:px-0 relative flex justify-start items-center"
            // style={{backgroundColor:'red'}}
          >
            {/* <div className="lg:w-10/12 md:w-11/12 w-full h-[650px] md:px-0 px-2 relative flex justify-start items-center "> */}
            <div className="frame-wrapper relative lg:w-[40vw] md:w-[50vw] w-[50vw] md:h-[10/12] lg:h-full py-[98.5px] lg:pl-[48px] flex flex-col justify-center items-start"
              style={{ maxWidth: '680px', width: '100%',maxHeight: '690px', height: '100%'}}
            >
              <div className="md:px-[10px] px-[10px]">
                {/* <p className="md:w-3/4 w-full lg:text-[48px] md:text-[40px] text-[32px] text-white font-medium"> */}
                <p
                  className="md:w-3/4 w-full lg:text-[48x] mb-5 md:text-[38px] text-[32px] text-white font-medium font-Helvetica font-light leading-18 tracking-tight"
                  style={{
                    width: '500px',
                    fontFamily: 'Helvetica Neue-Medium',
                    fontSize: '48px',
                    fontWeight: '500',
                    lineHeight: '72px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    cursor: 'text',
                  }}
                >
                  {cardData?.about_us_cards[0].title}
                </p>
                <p
                  className="md:w-3/4 w-3/4 lg:text-[22px] md:text-[20px] text-[16px] text-white mb-9 font-Noto font-sans"
                  style={{
                    fontFamily: 'Noto Sans',
                    fontSize: '24px',
                    fontWeight: '350',
                    lineHeight: '43px',
                    letterSpacing: '0.01em',
                    textAlign: 'left',
                    cursor: 'text',
                  }}
                >
                  {cardData?.about_us_cards[0].description}
                </p>
                <div className="frame-9">
                  {cardData?.about_us_card_list?.map((e, i) => (
                    <div className="frame-10">
                      <img
                        className="material-symbols"
                        alt="Material symbols"
                        src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle-1.svg"
                      />
                      <div
                        className="lg:text-[24px] md:text-[20px] text-[16px] text-white"
                        style={{
                          //styleName: Metric_Descriptor;
                          fontFamily: 'Noto Sans',
                          fontSize: '24px',
                          fontWeight: '350',
                          lineHeight: '36px',
                          letterSpacing: '0.01em',
                          textAlign: 'left',
                        }}
                      >
                        {e.point}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="absolute lg:w-[35vw] md:w-1/2 w-1/2 h-auto ms-[45%] overflow-hidden rounded-md">
              <div className="w-full h-auto flex justify-center items-center">
                <img src={about_us} alt="about_us" className="h-[102%]" />
              </div>
            </div> */}
            <div className="absolute lg:w-[45vw] md:w-1/2 w-1/2 h-auto ms-[45%] overflow-hidden rounded-md pl-[30px]"
              style={{
                cursor: 'pointer'
              }}
            >
              <div
                className="w-full h-auto flex justify-center items-center relative"
                onClick={handleVideoClick}
                style={{overflow:'hidden'}}
              >
                {/* <div className="lg:w-[648px] md:w-[35vw] w-[80vw] h-[435px] rounded-[12px] overflow-hidden flex justify-center items-center cursor-pointer bg-[rgba(0, 0, 0, 0.30)] shadow-[0px 4px 48px 12px rgba(0, 0, 0, 0.25)] relative"> */}
                <video
                  ref={videoRef}
                  className="rounded-xl w-[648px] h-[435px] object-cover shadow-[0px 4px 48px 12px rgba(0, 0, 0, 0.25)] "
                  width="100%"
                  height="100%"
                  id="video"
                  style={{overflow:'hidden'}}
                  // onClick={handlePlayButtonClick}
                >
                  <source
                    // src={`${img_url}${cardData?.about_us_cards[0].image}`}
                    src={`${cardData?.about_us_cards[0].image}`}
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
                    alt="about_us"
                    className="w-[648px] h-510px object-cover z-10 rounded-xl shadow-[0px 4px 48px 12px rgba(0, 0, 0, 0.25)] absolute top-0 left-[21px]"
                    style={{
                      width:'100%',
                      maxWidth:'600px',
                      height:'100%'
                    }}
                  />
                )}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative flex flex-col justify-center items-center mb-[80px] ">
          <div className="w-full flex flex-col justify-center items-center mb-[104px] ">
            <div className="w-full flex flex-col justify-center items-center ">
              <p className="lg:text-[48px] md:text-[40px] text-[32px] font-bold">
                <span className="span">OUR</span>
                <span className="text-wrapper-2"> VISION</span>
              </p>
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/line-2.svg"
              />
            </div>
            <p className="md:w-3/4 w-full mt-[24px] lg:text-[28px] md:text-[20px] text-[16px] text-[#08090A] font-normal text-center">
              {vissionData[0]?.title}
            </p>
          </div>
          {/* our vision - img and text */}
          <div className="w-full flex flex-row-reverse justify-start items-center relative pr-100">
            {/* text and description */}
            <div className="onMission md:h-[540px] lg:w-[50vw] md:w-[50%] md:mr-100 mr-100 w-[60%] h-[400px] rounded-[16px] relative flex justify-center items-center"
            // style={{backgroundColor:'red'}}
            >
              <div className="h-full w-full flex flex-col md:justify-center md:mr-10 justify-center md:items-center items-end">
                {/* text */}
                <div className="lg:text-[40px] md:text-[30px] text-[32px] md:w-2/3 w-2/3 font-medium text-[#08090A] font-Helvetica font-Neue"
                  style={{
                    fontWeight: '500',
                    lineHeight: '72px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    cursor: 'text',
                    fontFamily: 'Helvetica Neue-Medium',
                    fontSize: '48px',
                    maxWidth: '550px',
                    width: '100%',
                    marginLeft: '60px'
                  }}
                >
                  {vissionData[0]?.card_title}
                </div>
                {/* description */}
                <div className="text-[#3C4043] lg:text-[20px] md:text-[16px] text-[14px] md:w-2/3 w-1/3"
                  style={{
                    fontFamily: 'Noto Sans',
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '36px',
                    letterSpacing: '0.01em',
                    textAlign: 'justify',
                    cursor: 'text',
                    fontFamily: 'Noto Sans',
                    // fontSize: '24px',
                    maxWidth: '550px',
                    width: '100%',
                    marginLeft: '60px',
                  }}
                >
                  {vissionData[0]?.card_description}
                </div>
              </div>
            </div>
            <img
              className="visionImage lg:w-[620px] w-[50vw] lg:h-[431.666px] absolute mx-[45vw] object-fit rounded-md"
              alt="Pexels pixabay"
              // src={`${img_url}${vissionData[0]?.card_image}`}
              src={`${vissionData[0]?.card_image}`}
              style={{
                // border:'10px solid red'
                borderRadius:'16px'
              }}
            />
          </div>
        </div>

        <div className="w-full relative flex flex-col justify-center items-center">
          <div className="text-wrapper-6 mb-[48px] font-medium leading-10 tracking-normal text-left text-[#3C4043] font-Helvetica font-Neue"
            style={{
              //styleName: Header H3;
              fontFamily: 'Helvetica Neue-Medium',
              fontSize: '28px',
              fontWeight: '500',
              lineHeight: '42px',
              letterSpacing: '0em',
              cursor: 'text'
              // textAlign: 'left',
            }}
          >
            Why choose Suvarna?
          </div>

          <div
            className={`${
              height < 770 && width < 1370
                ? "flex flex-row  "
                : "flex flex-col xl:flex-row xl:flex-wrap items-center justify-center space-y-4 md:px-0 lg:px-0 px-10 "
            }`}
          >
            {chooseSuvarna?.map((d, index) => (
              <div
                key={index}
                className={`choose_card w-full md:w-[312px] h-[360px] 
                 justify-center items-center hover:scale-110 ${
                   height < 770 && width < 1370
                     ? ` mx-[5px] `
                     : "mx-[12px] md:mx-[24px]"
                 }  my-4`}
                onMouseEnter={() => {
                  setIsMouseOver(true);
                  setId(d.id);
                }}
                onMouseOver={() => {
                  setIsMouseOver(true);
                  setId(d.id);
                }}
                onMouseLeave={() => {
                  setIsMouseOver(false);
                  setId(0);
                }}
              >
                <div
                  className={`choose_card_header font-Helvetica font-Neue font-medium leading-7 tracking-tight text-center ${isMouseOver && id === d.id ? "text-blue-400" : "text-black"
                    } text-center mb-4`}
                  style={{
                    cursor: 'text',
                    fontFamily: 'Helvetica Neue-Medium',
                    fontSize: '24px',
                    fontWeight: '500',
                    lineHeight: '29px',
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                  }}
                >
                  {d.title}
                </div>
                <div className="choose_card_logo my-4">
                  <img src={d.image} alt={d.title} className="w-full h-auto" />
                </div>
                <div className="choose_card_description text-center md:text-[16px] text-[14px] font-Noto font-sans text-center font-normal leading-6 tracking-normal"
                  style={{
                    cursor: 'text',
                    textAlign: 'center'
                  }}
                >
                  {d.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* blue wave three */}
        <SmallBlueWave
          heading="How our story began"
          subheading="Suvarna Technosoft's journey began with a simple yet profound vision: to revolutionize the healthcare industry through cutting-edge software solutions. Established in 1999, our founders, seasoned healthcare professionals and visionary technologists, recognized the critical need for seamless integration of technology in the healthcare ecosystem. With unwavering commitment and a deep understanding of the sector's intricacies, we embarked on a mission to streamline processes, enhance patient care, and empower healthcare providers. Over the years, we have tirelessly strived to bridge the gap between healthcare and technology, leveraging our expertise to develop bespoke, intuitive, and scalable solutions that cater to the unique needs of our clients. "
        />

        <div className="w-full flex justify-center items-center mt-[46px] mb-[60px] relative">
          <div className="w-10/12 flex flex-col justify-center items-center">
            <div className="frame-16">
              <div className="frame-17">
                <div className="text-wrapper-7 mb-[16px]">
                  Meet our Leadership Team
                </div>
              </div>
              <p className="lg:w-5/6 md:w-4/5 text-[20px] text-[#6D747A] font-normal md:px-0 px-2 mb-[48px] text-center" style={{width:'1098px'}}>
                Our founding team combines seasoned professionals and tech
                visionaries with decades of experience, uniting their expertise
                to drive innovation in the industry.
              </p>
            </div>
            <div className="lg:w-10/12 md:w-11/12 w-full flex gap-[72px] flex-col justify-center items-center md:flex-row md:flex-wrap">
              {teamData?.map((item, index) => (
                <Founder
                  key={index}
                  // maskGroup={`${img_url}${item.image}`}
                  maskGroup={`${item.image}`}
                  text={item.name}
                  text1={item.profession}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full  flex justify-center items-center ">
          <div className="contact-us">
            <div className="frame-20">
              <p className="compliance-header-12">
                Have a question? We’d love to hear from you.
              </p>
              <Button
                className="button-instance"
                property1="default-small"
                supportClassName="button-instance"
                text="Contact us"
                link="/contactus"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
