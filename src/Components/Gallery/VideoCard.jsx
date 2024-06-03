import React, { useEffect, useRef, useState } from "react";

import closeIcon from "../../assets/close-icon.svg";
import durationIcon from "../../assets/duration-icon.svg";
// import galleryFullScreen from "../../assets/gallery-fullscreen-icon.svg";
// import galleryMoreIcon from "../../assets/gallery-more-icon.svg";
// import galleryPauseIcon from "../../assets/gallery-pause-icon.svg";
// import galleryVolumeIcon from "../../assets/gallery-volume-icon.svg";
import { img_url } from "../../utils/utils";
import videoPlayerIcon from "../../assets/gallery-play-icon.svg";
import ReactPlayer from 'react-player';

const VideoCard = ({ item }) => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [duration, setDuration] = useState(null);
  const videoRef = useRef(null)
  const [isHovered, setHovered] = useState(false)
  const [isMaximized, setMaximized] = useState(false);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullScreenChange = (state) => {
    console.log("Full screen", state)
    setIsFullscreen(state);
  };

  useEffect(() => {
    // Add event listener for fullscreen change
    document.addEventListener('fullscreenchange', () => handleFullScreenChange(document.fullscreenElement !== null));

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('fullscreenchange', () => handleFullScreenChange);
    };
  }, []);

  const handleVideoClick = () => {
    setMaximized(!isMaximized);
  };

  const handleLoadedMetadata = (event) => {
    const { duration } = event.target;

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    setDuration(formattedTime)
  };

  const openModal = () => {
    setIsModalDisplayed(true);
    // if (videoRef.current.paused) {
    //   videoRef.current.play();
    // }
  };

  const closeModal = () => {
    setIsModalDisplayed(false);

    if (videoRef.current) {
      videoRef.current.pause()
    }
  };
  // console.log(duration);
  // console.log(item);
  return (
    <>
      <div id="card" onClick={openModal} className="rounded-md relative" style={{
        height: '100%',
        width: '100%',
        maxHeight: '385px',
        maxWidth: '424px',
        // backgroundColor:'red'
        // border:'10px solid black'
      }}>
        <div className="relative justify-center items-center rounded-md "
          // w-[424px] aspect-w-16 aspect-h-9 
          style={{
            height: '100%',
            width: '100%',
            maxHeight: '318px',
            maxWidth: '424px'
          }}
        >
          <video
            ref={videoRef}
            className="img-wrap video-card rounded-md"
            width="100%"
            height="100%"
            // controls
            onLoadedMetadata={handleLoadedMetadata}
            style={{
              height: '100%',
              width: '100%',
              maxHeight: '318px',
              maxWidth: '424px',
              borderRadius: '10px',
              borderColor: isHovered ? "#146DFA" : "",
              borderWidth: '2px', // Add this line
              // backgroundColor:'red'
            }}
            onMouseOver={(e) => { setHovered(true) }}
            onMouseLeave={(e) => { setHovered(false) }}
          >
            {/* <source src={`${img_url}${item?.video}`} type="video/mp4" /> */}
            <source src={`${item?.video}`} type="video/mp4" />
          </video>
          <div
            // onClick={() => videoRef.current.pause()}
            className="play-icon absolute inset-0 flex items-center justify-center cursor-pointer"
            onMouseOver={(e) => { setHovered(true) }}
            onMouseLeave={(e) => { setHovered(false) }}
            style={{
              transform: isHovered ? 'scale(1.2)' : 'scale(1)',
              // transition: 'transform 0.3s ease-in-out',
            }}
          >
            <img src={videoPlayerIcon} alt="play-icon" className="w-16 h-16"
            />
          </div>
        </div>

        {/* title */}
        <div className="text-[20px]"
          style={{
            fontFamily: 'Helvetica',
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '30px',
            letterSpacing: '0.02em',
            textAlign: 'left',
          }}
        >{item?.title}</div>

        {/* duration */}
        <div className="text-[14px] text-[#3c4043] flex"
          style={{
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '21px',
            letterSpacing: '0em',
            color: '#3C4043'
          }}
        >
          <img className="mr-[8px]" src={durationIcon} alt="duration-icon" />
          {duration}
        </div>
      </div>

      {/* Modal */}

      {isModalDisplayed && (
        <div className="fixed z-50 flex justify-center items-center top-0 left-0 w-full h-full" style={{ backgroundColor: '#FFFFFFE5' }}>
          {isFullscreen && (
            <div className="absolute top-0 left-0 fullscreen-title layer-2" style={{ zIndex: '2' }}>
              {/* Your title here */}
              {item?.title}
            </div>
          )}
          <div
            className="bg-white max-w-[1096px] h-[680px] w-full  flex flex-col items-start relative z-40 p-4 md:p-6 lg:p-7 rounded-md"
            style={{
              // boxShadow: "0px 4px 24px 4px rgba(0, 0, 0, 0.15)",
              boxShadow: '0px 4px 24px 4px #00000026',
            }}
          >
            <div className="flex items-center justify-between w-full mb-[5px]">
              <h2 className="text-[20px] text-[#08090A]"
                style={{
                  //styleName: Sub-Header 2;
                  fontFamily: 'Helvetica Neue-Medium',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '30px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}>
                {item?.title}
              </h2>

              <button
                className="text-[28px] font-medium text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none"
                onClick={closeModal}
              >
                <img src={closeIcon} alt="close-icon" className="w-6 h-6" />
              </button>
            </div>
            <div className="w-[1040px] h-[1px] bg-[#EBEDF0]"></div>
            {/* video player */}
            <div className="relative mt-[5px] w-full  flex  justify-center items-center">
              {/* Video thumbnail image */}
              <div className="max-w-[1080px] h-[580px] w-full flex  justify-center items-center">
                {/* add a custome video player */}

                {/* <video
                  className="video-player max-w-[1080px] h-[580px] w-full"
                  width="100%"
                  height="100%"
                  controls
                  autoPlay
                  onLoadedMetadata={handleLoadedMetadata}
                  ref={videoRef}
                  onClick={handleVideoClick}
                >
                  <source src={`${img_url}${item?.video}`} type="video/mp4" />
                </video> */}

                <ReactPlayer
                  url={`${item?.video}`}
                  // url={`${img_url}${item?.video}`}
                  controls
                  width="100%"
                  height="100%"
                  onLoadedMetadata={handleLoadedMetadata}
                  playing={isMaximized}  // Auto-play when maximized
                  onClick={handleVideoClick}
                  onFullScreenChange={handleFullScreenChange}
                />

              </div>
            </div>
          </div>

          {/* <div
            className="absolute bg-opacity-10 w-full h-full"
            style={{
              background: "rgba(255, 255, 255, 0.90)",
            }}
            onClick={closeModal}
          ></div> */}
        </div>
      )}
    </>
  );
};

export default VideoCard;
