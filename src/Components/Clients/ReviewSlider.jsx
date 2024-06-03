import React, { useEffect, useRef, useState } from "react";
import { useGetAllReviewsQuery } from "../../redux/features/review/reviewApi";
import { img_url } from "../../utils/utils";
import LeftIcon from "../LeftIcon";
import RightIcon from "../RightIcon";
import Slider from "react-slick";
const ReviewSlider = () => {
  const { data: reviews } = useGetAllReviewsQuery();
  const sliderRef = useRef(null);
  const [reviewIndex, setReviewIndex] = useState(1);
  const [profileImageDimensions, setProfileImageDimensions] = useState({});
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => setReviewIndex(current + 1),
  };
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const handleImageLoad = (event, index) => {
    const { naturalWidth, naturalHeight } = event.target;
    setProfileImageDimensions((prevDimensions) => ({
      ...prevDimensions,
      [index]: { width: naturalWidth, height: naturalHeight },
    }));
  };

  useEffect(() => {
    // Access the dimensions of profile images in profileImageDimensions state
    console.log("Profile Image Dimensions:", profileImageDimensions);
  }, [profileImageDimensions]);

  return (
    <div className="w-full h-full">
      <Slider ref={sliderRef} {...settings}>
        {reviews?.map((d, index) => {
          return (
            <div key={index} className="h-[625px]"
              style={{
                height: '100%',
                maxHeight: '611px',
                width: '100%',
                maxWidth: '424px',
                backgroundColor: 'red'
              }}
            >
              {/* image section */}
              <div className="h-[45%] w-10/12 mx-auto flex justify-center items-center relative"
                style={{
                  height: '100%',
                  maxHeight: '282px',
                  width: '100%',
                  maxWidth: '424px',
                  backgroundColor: '#F1F6F9',
                  cursor: 'default'
                }}>
                {/* profile img */}
                <img
                  // src={`${img_url}${d.testimonial_image}`}
                  src={`${d.testimonial_image}`}
                  alt="profile"
                  className="h-full w-full mx-2 relative rounded-xl"
                  style={{
                    borderRadius: '12px',
                    ...(profileImageDimensions[index] && {
                      width: profileImageDimensions[index].width < 300 ? "180px" : "",
                      height: profileImageDimensions[index].width < 300 ? "180px" : "",
                      borderRadius: profileImageDimensions[index].width < 300 ? "50%" : "",
                      // borderColor: profileImageDimensions[index].width < 300 ? "10px solid black" : "",
                    }),
                  }}
                  onLoad={(event) => handleImageLoad(event, index)}
                />
                {/* logo img */}
                <img
                  // src={`${img_url}${d.logo}`}
                  src={`${d.logo}`}
                  alt="logo"
                  className="absolute bottom-0 end-0 z-10 m-4"
                  style={{
                    height: '100%',
                    width: '100%',
                    maxWidth: '100px',
                    maxHeight: '48px',
                    aspectRatio: '2/1',
                    backgroundColor: '#fff',
                    padding: '2px 4px',
                    objectFit: 'contain',
                    // border:'2px solid red'
                  }}
                />
              </div>
              <div className="h-[55%] w-10/12 mx-auto flex flex-col justify-center items-start pt-[26px] px-1 mt-[10px]"
                style={{
                  height: '100%',
                  maxHeight: '302px',
                  width: '100%',
                  maxWidth: '424px',
                  // backgroundColor:'red',
                  cursor: 'pointer'
                }}>
                <div className="w-full flex justify-start items-start relative">
                  {/* quotes image */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="w-[24px] h-[24px]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2637_22361)">
                      <path
                        d="M6.64424 3.29933C7.3053 2.80354 8.24311 2.9375 8.7389 3.59855C9.23473 4.25961 9.10067 5.19742 8.43968 5.69323C6.09969 7.44824 4.75764 9.15457 3.99167 10.6451C4.40915 10.5379 4.84675 10.4809 5.29766 10.4809C8.18979 10.4809 10.5343 12.8255 10.5343 15.7176C10.5343 18.6097 8.18979 20.9542 5.29766 20.9542C2.43448 20.9542 0.107983 18.6564 0.0617064 15.8042C-0.0732497 14.51 -0.0535452 12.6009 0.821126 10.3967C1.71501 8.14416 3.46097 5.68681 6.64424 3.29933ZM20.1099 3.29933C20.7709 2.80354 21.7087 2.9375 22.2046 3.59855C22.7004 4.25961 22.5664 5.19742 21.9053 5.69323C19.5653 7.44824 18.2234 9.15457 17.4573 10.6451C17.8748 10.5379 18.3124 10.4809 18.7633 10.4809C21.6555 10.4809 24 12.8255 24 15.7176C24 18.6097 21.6555 20.9542 18.7633 20.9542C15.9001 20.9542 13.5737 18.6564 13.5274 15.8042C13.3925 14.51 13.4121 12.6009 14.2868 10.3967C15.1807 8.14416 16.9266 5.68681 20.1099 3.29933Z"
                        fill="#6D747A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2637_22361">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-[#3C4043] h-auto lg:text-[16px] md:text-[16px] text-[14px] mb-4 mt-3"
                  style={{
                    fontFamily: 'Helvetica Neue,sans-serif',
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '30px',
                    letterSpacing: '0.02em',
                    textAlign: 'justify',
                  }}
                >
                  {d.description}
                </div>
                <div className="client-name font-Noto font-sans"
                  style={{
                    // font-family: Noto Sans;
                    fontSize: '20px',
                    fontWeight: '600',
                    lineHeight: '30px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color: '#3C4043'
                  }}
                >
                  {d.auther_first_name}&nbsp;
                  {d.auther_last_name}
                </div>
                <div className="client-org-location"
                  style={{
                    //styleName: Body Text B1;
                    // font-family: Noto Sans;
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                  }}
                >
                  {d.title}&nbsp;
                  {d.address}&nbsp;
                  {d.city}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* down side change slider button */}

      <div className="w-full flex justify-between items-center pl-[15px] pr-[15px] mt-[50px]">
        <button disabled={reviewIndex === 1} onClick={previous} type="button">
          <LeftIcon
            stroke={reviewIndex === 1 ? "#001E41" : "#ffff"}
            color={reviewIndex === 1 ? "#EBEDF0" : "#001E41"}
          />
        </button>
        <div
          className="sub-header-4  font-bold md:block hidden"
          id="pageIndicator"
        >
          {reviewIndex}/{reviews?.length}
        </div>
        <button
          disabled={reviewIndex === reviews?.length}
          onClick={next}
          type="button"
        >
          <RightIcon
            stroke={reviewIndex === reviews?.length ? "#001E41" : "#ffff"}
            color={reviewIndex === reviews?.length ? "#EBEDF0" : "#001E41"}
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;