import React, { useEffect, useRef, useState } from "react";
import { img_url } from "../../utils/utils";
import LeftIcon from "../LeftIcon";
import RightIcon from "../RightIcon";
import Slider from "react-slick";
const ClientsSlider = ({ data: reviews }) => {
  const [rowCount, setRowCount] = useState(1);
  const sliderRef = useRef(null);
  const [reviewIndex, setReviewIndex] = useState(1);
  const [totalIndex, settotalIndex] = useState(1);

  const [visibleSlides, setVisibleSlides] = useState(0);

  const handleInit = (totalSlides) => {
    // Calculate the initial number of visible slides
    const slidesToShow = settings.slidesToShow || 1;
    const rows = settings.rows || 1;
    setVisibleSlides(slidesToShow * rows);
    settotalIndex(totalSlides);
  };

  const handleAfterChange = (current) => {
    setReviewIndex(current + 1);

    // Calculate the remaining slides
    const remainingSlides = reviews?.length - (current + visibleSlides);
    settotalIndex(remainingSlides >= 0 ? remainingSlides : 0);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    rows: rowCount,
    centerMode: true,
    onInit: () => handleInit(reviews?.length),
    afterChange: (current) => handleAfterChange(current),
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          rows: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          rows: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
    afterChange: (current) => setReviewIndex(current + 1),
    appendDots: (dots) => {
      if (dots?.length === reviews?.length) {
        settotalIndex(1);
      } else if (dots.length) {
        settotalIndex(dots?.length);
      }

      return (
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "none",
          }}
        >
          <ul style={{ margin: "0" }}>{dots}</ul>
        </div>
      );
    },
  };
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  useEffect(() => {
    if (reviews?.length <= 5) {
      setRowCount(1);
    } else if (reviews?.length <= 10) {
      setRowCount(2);
    } else if (reviews?.length <= 15) {
      setRowCount(3);
    } else if (reviews?.length < 20) {
      setRowCount(4);
    } else if (reviews?.length >= 20) {
      setRowCount(5);
    }
  }, [reviews]);
  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {reviews?.map((d, index) => {
          return (
            <div className="mb-10">
              <div
                key={index}
                className="h-[155px] p-1 w-[200px] mx-auto flex flex-col gap-2 justify-center items-center"
                style={{
                  maxHeight: '154px',
                  maxWidth: '200px',
                  width: '100%',
                  height: '100%',
                  // backgroundColor:'red'
                }}
              >
                <div className="py-6 h-[155px] p-1 w-[200px] flex flex-col gap-4 items-center"
                  style={{
                    border: '1px solid #EBEDF0',
                    borderRadius: '12px',
                    // padding:'24px 12px 24px 12px'
                    // backgroundColor:'red'
                  }}
                >
                  <figure className="w-[96px] h-[48px] flex justify-center"
                    style={{
                      overflow: 'hidden',
                      maxHeight: '48px',
                      maxWidth: '126px',
                      height: '100%',
                      width: '100%',
                      // backgroundColor: 'red',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      // src={`${img_url}${d.logo}`}
                      src={`${d.logo}`}
                      alt="logo"
                      className="w-full h-full"
                      style={{
                        overflow: 'hidden',
                        maxHeight: '48px',
                        maxWidth: '126px',
                        height: '100%',
                        width: '100%',
                        // backgroundColor: 'red',
                        cursor: 'pointer'
                      }}
                    />
                  </figure>
                  <p className="font-Noto font-sans"
                    style={{
                      //styleName: Body Text B2;
                      // font-family: Noto Sans;
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '21px',
                      letterSpacing: '0em',
                      textAlign: 'center',
                      color: '#3C4043',
                      cursor: 'text'
                    }}
                  // if text length 20 only display on one line otherwise move to next line, display 20 character followed by '...'
                  >{d.name.slice(0, 20)}{d.name.length >= 20 ? `${d.name.slice(20, 40)}...` : ""} </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* down side change slider button */}

      {/* <div className=" max-w-[300px] mx-auto w-full flex justify-between items-center">
        <button disabled={reviewIndex === 1} onClick={previous} type="button">
          <LeftIcon
            stroke={reviewIndex === 1 ? "#001E41" : "#ffff"}
            color={reviewIndex === 1 ? "#ffff" : "#001E41"}
          />
        </button>
        <div
          className="sub-header-4  font-bold md:block hidden"
          id="pageIndicator"
        >
          {reviewIndex}/{totalIndex}
        </div>
        <button
          disabled={reviewIndex === reviews?.length}
          onClick={next}
          type="button"
        >
          <RightIcon
            stroke={reviewIndex === totalIndex ? "#001E41" : "#ffff"}
            color={reviewIndex === totalIndex ? "#ffff" : "#001E41"}
          />
        </button>
      </div> */}
      <div className="max-w-[300px] mx-auto w-full flex justify-between items-center">
        <button disabled={reviewIndex === 1} onClick={previous} type="button">
          <LeftIcon
            stroke={reviewIndex === 1 ? "#001E41" : "#ffff"}
            color={reviewIndex === 1 ? "#ffff" : "#001E41"}
          />
        </button>
        <div className="sub-header-4 font-bold md:block hidden" id="pageIndicator">
          {reviewIndex}/{reviews?.length}
        </div>
        <button
          disabled={reviewIndex === reviews?.length}
          onClick={next}
          type="button"
        >
          <RightIcon
            stroke={reviewIndex === reviews?.length ? "#001E41" : "#ffff"}
            color={reviewIndex === reviews?.length ? "#ffff" : "#001E41"}
          />
        </button>
      </div>

    </div>
  );
};

export default ClientsSlider;
