import React, { useState } from "react";

import closeIcon from "../../assets/close-icon.svg";
import galleryNext from "../../assets/gallery-image-next.svg";
import galleryNextTbg from "../../assets/gallery-image-next-trans.svg"
import galleryPrev from "../../assets/gallery-image-prev.svg";
import galleryPrevTbg from "../../assets/gallery-image-prev-trans.svg";
import { img_url } from "../../utils/utils";
import placeholder from "../../assets/images/placeholder.png";

const ImageCard = ({ item }) => {
  const [id, setId] = useState(0);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isHovered, setHovered] = useState(false)
  const [hoverId, setHoverId] = useState("")

  const handleMouseEnter = (id) => {
    setHoverId(id)
    setHovered(true)
  }

  const handleMouseLeave = (id) => {
    setHoverId("")
    setHovered(false)
  }
  console.log(item);
  // func for open modal
  const openModal = () => {
    setId(1);
    setIsModalDisplayed(true);
  };

  // func for close modal
  const closeModal = () => {
    setIsModalDisplayed(false);
  };

  // func for handleImageClick
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // func for Next Switch
  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % item.length);
  };

  // func for Prev Switch
  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + item.length) % item.length
    );
  };

  return (
    <>
      <div id="card" onClick={openModal}>
        <div className="relative w-full">
          {/* Image div */}
          <div className="relative justify-start flex flex-wrap gap-5">
            {item?.map((x, i) => (
              <div
                onMouseEnter={() => { handleMouseEnter(x?.id) }}
                onMouseLeave={() => { handleMouseLeave(x?.id) }}
                style={{
                  border: isHovered && x?.id === hoverId ? '2px solid #146DFA' : "",
                  maxWidth: '312px',
                  maxHeight: '234px',
                  height: '100%',
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: '20px',
                }}
              >
                <img
                  onClick={() => handleImageClick(i)}
                  key={i}
                  className="w-[312px] h-[234px] rounded-md relative"
                  // src={`${img_url}${x?.image}` ?? placeholder}
                  src={`${x?.image}` ?? placeholder}
                  alt="gallery-cover"
                  style={{
                    transform: isHovered && x?.id === hoverId ? 'scale(1.05)' : "",
                    borderRadius: '20px',
                    transition: '0.2s linear',
                  }}
                />
              </div>
            ))}
          </div>
          {/* Image div close */}
        </div>
      </div>

      {/* Modal */}
      {isModalDisplayed && (
        // modal container
        <div className="fixed z-50 flex justify-center items-center top-0 left-0 w-full h-full">
          {/* modal body */}
          <div
            className="bg-white flex flex-col items-start relative z-40  sm:p-8 md:p-2 lg:px-10 mb-2 rounded-md"
            style={{
              boxShadow: "0px 4px 24px 4px rgba(0, 0, 0, 0.15)",
              width: "100%",
              height: '100%',
              // maxHeight:'882px',
              // maxWidth: "796px",
              maxHeight: '882px',
              maxWidth: "1096px",
            }}
          >
            <button
              onClick={handlePrevImage}
              className={`absolute top-1/2 -left-[60px] text-[14px] font-medium transition duration-300 focus:outline-none mr-[100px] ${selectedImageIndex === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-600 hover:text-gray-800"
                }`}
              disabled={selectedImageIndex === 0}
            >
              <img
                src={
                  selectedImageIndex === 0 ? galleryPrevTbg : galleryPrev
                }
                alt=""
              />
            </button>
            {/* title and close icon */}
            <div className="flex items-center justify-between w-full">
              <h2 className="text-[20px] text-[#08090A] font-semibold" style={{
                //styleName: Sub-Header 2;
                fontFamily: 'Helvetica Neue-Medium',
                fontSize: '20px',
                fontWeight: '550',
                lineHeight: '30px',
                letterSpacing: '0.02em',
                textAlign: 'left',
                paddingLeft:'5px'
              }}>
                {item[selectedImageIndex].image_folder_title}
              </h2>
              <button
                className="text-[28px] font-medium text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none"
                onClick={closeModal}
              >
                <img src={closeIcon} alt="close-icon" className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full h-[1px] bg-[#EBEDF0]"></div>

            {/* Images layout */}
            <div className="relative w-full h-full p-1">
              {/* main image */}
              <div className="flex justify-center"
                style={{
                  width: "100%",
                  height: '80%',
                  maxHeight: '648px',
                  maxWidth: "972px",
                  backgroundColor: '#6D747A',
                }}
              >
                {/* left arrow button was previously here which is now shiftd upwards*/}
                {/* actual image */}
                <img
                  className="w-full h-full object-contain"
                  // src={`${img_url}${item[selectedImageIndex].image}`}
                  src={`${item[selectedImageIndex].image}`}
                  alt="video-thumbnail"
                  style={{
                    // maxHeight: '400px',
                    // maxWidth: '600px'
                    // maxHeight: '648px',
                    // maxWidth: "972px",
                  }}
                />
                {/* right arrow button was previously here which is now shiftd upwards*/}
              </div>
              {/* bottom image list */}
              <div className="w-full flex items-center justify-center mt-[12px]" style={{
                // backgroundColor:'blue',
                maxHeight: '200px',
                // maxWidth: '302px'
                // aspectRatio:'5/1',
                // overflow:'hidden'
              }}>
                {item?.map((image, index) => (
                  <div
                    className={`cursor-pointer border flex-1 justify-evenly  ${selectedImageIndex === index
                      ? "border-blue-500 border-1 "
                      : " border border-transparent"
                      }`}
                    key={index}
                    onClick={() => handleImageClick(index)}
                    style={{
                      maxWidth: '100px',
                      maxHeight: '75px'
                    }}
                  >
                    <img
                      className="h-full w-full ml-[2px] mr-[2px]"
                      // src={`${img_url}${image?.image}` ?? placeholder}
                      src={`${image?.image}` ?? placeholder}
                      alt="image"
                      style={{
                        maxWidth: '100px',
                        maxHeight: '75px'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNextImage}
              className={`absolute top-1/2 -right-[60px] text-[14px] font-medium transition duration-300 focus:outline-none mr-2 ml-[30px]
                   ${selectedImageIndex === (item.length - 1)
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-600 hover:text-gray-800"
                }`}
              disabled={selectedImageIndex === item.length - 1}
            >
              <img
                src={
                  selectedImageIndex === (item.length - 1) ? galleryNextTbg : galleryNext
                }
                // src={galleryNext} 
                alt="" />
            </button>
          </div>

          {/* white bg behind modal */}
          <div
            className="absolute bg-opacity-10 w-full h-full bg-red-400"
            style={{
              background: "rgba(255, 255, 255, 0.90)",
            }}
            onClick={closeModal}
          ></div>
        </div>
      )}
    </>
  );
};

export default ImageCard;
