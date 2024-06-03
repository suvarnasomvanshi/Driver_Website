import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//  date formatter
import { formatDate } from "../utils/DateFormatConvertor";

//  importing components
import Loader from "./Loader";

//  importing fetchDta functions

import LeftIcon from "./LeftIcon";
import RightIcon from "./RightIcon";

// image imports
import arrow_icon from "../assets/blogs/arrow-icon.svg";
//  blog
// import share from "../assets/icon/share.png";
import share from "../assets/blogs/share.svg";
import { useGetBlogsQuery } from "../redux/features/blog/blogApi";
import { front_url, img_url } from "../utils/utils";
import PopUpShare from "./PopUpShare";

const BlogCarousel = ({ title }) => {
  const { data: blogs, isLoading, isError, isSuccess } = useGetBlogsQuery();
  const [isSupportVisible, setIsSupportVisible] = useState(false);

  const scrollableBlogs = useRef(null);
  // const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [isPopupVsible, setpopupVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const locaiton = useLocation();
  const [url, setUrl] = useState("");
  const pathname = locaiton.pathname;
  useEffect(() => {
    const link = front_url + pathname;
    setUrl(link);
  }, [pathname]);
  
  //  states
  const [white, setWhite] = useState("#EBEDF0");
  const [black, setBlack] = useState("#001E41");
  const [left, setLeft] = useState(0);

  //  onclick functions
  const handleRight = () => {
    setLeft(1);
    setWhite("#001E41");
    setBlack("#EBEDF0");
  };
  const handleLeft = () => {
    setLeft(0);
    setWhite("#EBEDF0");
    setBlack("#001E41");
  };
  console.log(blogs);
  const scrollTo = (direction, amount, ref) => {
    if (ref.current) {
      const container = ref.current;
      const currentScrollLeft = container.scrollLeft;
      const targetScrollLeft =
        direction === "left"
          ? currentScrollLeft - amount
          : currentScrollLeft + amount;
      const duration = 500; // Animation duration in milliseconds, adjust as needed
      const startTime = performance.now();

      function scrollStep(timestamp) {
        const progress = (timestamp - startTime) / duration;
        if (progress < 1) {
          container.scrollLeft =
            currentScrollLeft +
            (targetScrollLeft - currentScrollLeft) * progress;
          requestAnimationFrame(scrollStep);
        } else {
          container.scrollLeft = targetScrollLeft;
        }
      }

      requestAnimationFrame(scrollStep);
    }
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center  mt-10">
      {/*  blog section header  */}
      <div className="w-screen flex items-center px-[60px]">
        <div className=" w-full flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start">
          <div className="flex flex-grow-1 justify-start items-center">
            {title ? (
              title
            ) : (
              <p
                className="flex flex-wrap text-[36px] font-bold"
                style={{
                  //styleName: Header H1;
                  fontFamily: "Helvetica Neue-Bold",
                  fontSize: "36px",
                  fontWeight: 700,
                  lineHeight: "54px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#3C4043",
                }}
              >
                Check out our latest insights
              </p>
            )}
          </div>
          <div className="w-32 flex justify-center items-center ">
            <div
              className="mx-2"
              onClick={() => {
                handleLeft();
                scrollTo("left", window.innerWidth / 4, scrollableBlogs);
              }}
            >
              {" "}
              <LeftIcon className="slider-3" color={white} stroke={black} />
            </div>

            <div
              className="mx-2"
              onClick={() => {
                handleRight();
                scrollTo("right", window.innerWidth / 4, scrollableBlogs);
              }}
            >
              <RightIcon className="slider-3" color={black} stroke={white} />
            </div>
          </div>
        </div>
      </div>

      {/* blog cards */}

      <div className="h-[483px] w-full flex flex-col justify-center  px-[60px]">
        {/*  product-card */}
        <div
          className="w-full flex justify-start items-center overflow-hidden"
          ref={scrollableBlogs}
        >
          <div className="w-[4000px] flex justify-start items-center">
            {isLoading ? (
              <div className="lg:w-10/12 md:w-11/12 w-screen h-full justify-center items-center">
                <Loader />
              </div>
            ) : (
              blogs?.map((d, index) => {
                return (
                  <div
                    key={d.id}
                    className="bg-white flex flex-col justify-center items-center h-[420px] w-[312px] overflow-hidden me-[24px] select-none"
                    style={{
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      className="h-1/2 overflow-hidden relative"
                      style={{
                        borderRadius: "12px",
                      }}
                    >
                      <img
                        // src={img_url + d.thumb_image}
                        src={d.thumb_image}
                        alt={d.title}
                        className="relative"
                      />
                      <img
                        src={share}
                        className="absolute top-1 right-1 cursor-pointer mt-[10px] mr-[10px]"
                        alt=""
                        id="support-button"
                        onClick={() => {
                          setpopupVisible(true);
                        }}
                      />
                    </div>
                    <div className="h-1/2 w-full flex flex-col justify-start items-start">
                      <div className="flex flex-col justify-start items-center h-1/2">
                        {/* title */}
                        <div
                          className="font-medium md:text-[16px] text-[14px] text-[#3C4043] mt-[16px] mb-[12px] font-helvetica font-sans"
                          style={{
                            color: "#3C4043",
                            //styleName: Sub-Header 4;
                            fontFamily: "Helvetica Neue-Medium",
                            fontSize: "16px",
                            fontWeight: "500",
                            lineHeight: "24px",
                            letterSpacing: "0.02em",
                            textAlign: "left",
                          }}
                        >
                          {d.title}
                        </div>

                        {/*  date and type */}
                        <div
                          className="w-full blog-card-regular-text flex justify-start items-center"
                          style={{
                            color: "#6D747A",
                            fontFamily: "Noto Sans",
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "21px",
                            letterSpacing: "0em",
                            textAlign: "left",
                          }}
                        >
                          <div>{formatDate(d.created_at)}</div>
                          <div className="mx-[12px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="4"
                              height="5"
                              viewBox="0 0 4 5"
                              fill="none"
                            >
                              <circle cx="2" cy="2.5" r="2" fill="#6D747A" />
                            </svg>
                          </div>
                          {/* <div>{category[d.category - 1]?.cat_title}</div> */}
                          {/* <div>{category[d.category - 1]?.category}</div> */}
                          <div
                            className="mx-1 flex w-40   other_blog_regular_text text-sm"
                            style={{
                              //styleName: Body Text B2;
                              fontFamily: "Noto Sans",
                              fontSize: "14px",
                              fontWeight: "400",
                              lineHeight: "21px",
                              letterSpacing: "0em",
                              textAlign: "left",
                              // color: ishovered && hoverID === d.id ? "#000" : ""
                            }}
                          >
                            {d.category}
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/blogs/${d.id}`}
                        className="product-card-button flex items-center justify-center my-4 text-[#146DFA] text-[16px] font-bold"
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        Read more
                        <img
                          src={arrow_icon}
                          alt=""
                          style={{ marginLeft: "10px" }}
                        />
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="mx-1 w-[20px] h-[20px]"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3.3335 8H12.6668"
                            stroke="#146DFA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 3.33331L12.6667 7.99998L8 12.6666"
                            stroke="#146DFA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg> */}
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {isPopupVsible ? (
          <>
            <PopUpShare
              setpopupVisible={setpopupVisible}
              isPopupVsible={isPopupVsible}
              url={url}
              data={data}
            />
            {console.log(isPopupVsible)}
          </>
        ) : (
          console.log(isPopupVsible)
        )}
      </div>
    </div>
  );
};

export default BlogCarousel;
