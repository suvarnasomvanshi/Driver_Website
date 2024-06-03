import React, { useEffect, useState, useMemo, useRef } from "react";
import "../styles/Clients.css";
import { Footer } from "../Components/Footer";
import LeftIcon from "../Components/LeftIcon";
import RightIcon from "../Components/RightIcon";
import ReviewSlider from "../Components/Clients/ReviewSlider";
//  importing images
import omega from "../assets/Omega.png";
import lucid from "../assets/Lucid.png";
import dypatil from "../assets/DYPatil.png";
import lotus from "../assets/Lotus.png";
import kingston from "../assets/Kingston.png";
import anilDental from "../assets/Client_Card.png";

//  import for reviews
import ravi from "../assets/pexels-koolshooters-6976943 1.png";
import lotus_logo from "../assets/image 133.png";
import omega_logo from "../assets/image 128.png";
import hema from "../assets/pexels-cottonbro-studio-4100672 1.png";

import polygon from "../assets/Ellipse 301.png";

import { img_url } from "../utils/utils";
import useWindowDimensions from "../utils/windowDimension";
import { useGetClientLogoQuery } from "../redux/features/client/clientApi";
import ClientsSlider from "../Components/Clients/clientsSlider";
import { useLocation } from "react-router-dom";

export const Clients = () => {
  const { width, height } = useWindowDimensions();
  const [smallLaptop, setSmallLaptop] = useState(false);
  const { data, isLoading, isError, isSuccess } = useGetClientLogoQuery();
  const [filter, setFilter] = useState("all");
  const [filterOptions, setFilterOptions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const scrollableClientRef = useRef(null);
  const location = useLocation()
  const hash = location.hash;

  useEffect(() => {
    if (hash === "#testimonials") {
      // scroll to testimonials
      console.log(hash);
      if (scrollableClientRef.current) {
        scrollableClientRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [hash]);

  useEffect(() => {
    setFilteredData(data);

    if (filter !== "all") {
      const newfilterData = data.filter((x) => x.client_cat === filter);
      setFilteredData(newfilterData);
    }

    const options = data?.reduce((unique, item) => {
      if (!unique.includes(item.client_cat)) {
        unique.push(item.client_cat);
      }
      return unique;
    }, []);
    setFilterOptions(options);
  }, [data, filter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  useEffect(() => {
    if (width < 1370 && width > 1024) {
      setSmallLaptop(true);
    } else {
      setSmallLaptop(false);
    }
  }, [width]);


  if (isError) {
    return <div>Something went wrong</div>;
  }
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="clients w-screen flex flex-col justify-start items-center relative overflow-hidden "
        id="clients"
      >
        <div
          className={`w-screen flex flex-col items-center justify-start  relative mb-[60px] ${smallLaptop ? "h-[555px] mt-0" : "h-[685px] mt-14 md:mt-0"
            }`}
        >
          {/*  frame -6 */}
          <div
            className={`lg:w-9/12 md:w-11/12 w-full h-full flex flex-col gap-6 relative z-10 md:p-0 p-2  ${smallLaptop ? " lg:mt-8 " : " lg:mt-14"
              }`}
          >
            <h1
              className={` text-[32px] text-white font-bold ${smallLaptop ? "md:text-[38px]" : "md:text-[48px]"
                }`}
            >
              A legacy of collaboration, with 1000+ satisfied clients worldwide.
            </h1>
            <div className="lg:w-[75%] flex flex-col justify-center items-start mt-[0px] font-Noto font-sans">
              <p className=" md:text-[16px] text-[14px] text-white font-normal md:mb-3 my-0.5 font-Noto font-sans"
                style={{
                  // fontFamily: 'Noto Sans',
                  fontSize: '20px',
                  fontWeight: '400',
                  lineHeight: '30px',
                  letterSpacing: '0.01em',
                  textAlign: 'justify',
                }}
              >
                Our philosophy of attention to detail & quality has given us an opportunity to work with the best healthcare providers globally. Our clients implicitly trust us and consider us as their trusted partner in their digital transformation.
              </p>
              <p className="md:text-[16px] text-[14px] text-white font-normal md:my-3 my-0.5 font-Noto font-sans"
                style={{
                  // fontFamily: 'Noto Sans',
                  fontSize: '20px',
                  fontWeight: '400',
                  lineHeight: '30px',
                  letterSpacing: '0.01em',
                  textAlign: 'justify',
                }}
              >
                In the 2 decades of our journey, we have worked with 1000+ healthcare providers of all sizes. Today we are proud to say that we are here because of our clients and they are our brand ambassadors
              </p>
              <p className="md:text-[16px] text-[14px] text-white font-normal md:mt-3 my-0.5 font-Noto font-sans"
                style={{
                  // fontFamily: 'Noto Sans',
                  fontSize: '20px',
                  fontWeight: '400',
                  lineHeight: '30px',
                  letterSpacing: '0.01em',
                  textAlign: 'justify',
                }}
              >
                Our clients include nursing homes, small hospitals, multi specialty hospitals, corporate hospital chains, medical colleges, standalone labs, multi-city diagnostic chains, pharmacy outlets etc.
              </p>
            </div>
            <a
              href="#testimonials"
              className={`header-button  ${smallLaptop ? " mt-[0]" : " mt-[24px]"
                }`}
              style={{
                //styleName: Button Text;
                // font-family: 'Helvetica Neue',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '20px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: '#146DFA',
                backgroundColor: '#ffffff',
                border: '1px solid #146DFA',
                borderRadius: '6px',
                padding: '12px 18px 12px 18px',
                height: '48px',
                cursor: 'pointer'
              }}
            >
              See Testimonials
            </a>
          </div>
          {/*  frame-6 ends here */}
          {/* background Image */}
          <div className="w-full h-full absolute top-0 ">
            <img
              src={polygon}
              alt="polygon"
              className={`w-full  flex justify-center items-center ${smallLaptop ? "h-[590px]" : "h-[685px]"
                }`}
            />
          </div>
        </div>
        {/*  clients  */}
        <div className="w-screen  h-auto flex flex-col justify-start items-center relative mt-[30px] mb-5">
          <h1 className="md:w-11/12 lg:text-[48px] md:text-[40px] text-[32px]  font-bold text-black flex justify-start items-center">
            Our Clientele
          </h1>

          <div className=" md:w-11/12  flex justify-start items-center my-9">
            <button
              type="button"
              onClick={() => {
                setFilter("all");
              }}
              className={`font-medium lg:text-[20px] md:text-[16px] text-[14px] mx-2 text-stone-700 ${filter === "all" ? "border-b-4 border-blue-500 text-black" : "border-0"
                }`}
              style={{
                borderColor: '#146DFA',
                color: `${filter === 'all' ? "#000000" : "#3C4043"}`,
                maxHeight: '34px',
                height: '100%',
                paddingBottom:'4px',
                fontFamily:'Helvetica Neue-Medium',
                marginRight:'20px'
              }}
            >
              All
            </button>
            {filterOptions?.map((d, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  onClick={(e) => {
                    setFilter(d);
                  }}
                  className={`font-medium mx-2 lg:text-[20px] md:text-[16px] text-[14px] text-stone-700 ${filter === d ? "border-b-4 border-blue-500" : "border-0"
                    }`}
                  style={{
                    borderColor: '#146DFA',
                    color: `${filter === d ? "#000000" : "#3C4043"}`,
                    maxHeight: '34px',
                    height: '100%',
                    marginRight:'20px',
                    paddingBottom:'4px',
                    fontFamily:'Helvetica Neue-Medium'
                  }}
                >
                  {d}
                </button>
              );
            })}
          </div>

          <div className=" w-full  ">
            <div ref={scrollableClientRef}>
              <ClientsSlider data={filteredData} />
            </div>
          </div>
        </div>

        {/*  reviews section start */}
        <div
          className="w-screen min-h-[500px] justify-center items-center bg-white relative mt-5 sm:mt-0"
          id="testimonials" ref={scrollableClientRef}
        >
          <div className="w-full bg-white p-1 flex flex-col lg:flex-row justify-center gap-5">
            <div className="w-full flex justify-center lg:w-1/3 text-black">
              <h2 className="w-full px-10 mx-5 lg:text-[48px] md:text-[40px] text-[32px] font-medium font-Helvetica font-Neue ml-[50px]"
                style={{
                  //styleName: H0 Medium;
                  fontFamily: 'Helvetica Neue-Medium',
                  fontSize: '48px',
                  fontWeight: '500',
                  lineHeight: '72px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}
              >
                Here’s what clients have to say
              </h2>
            </div>

            <div className="w-full lg:w-2/3 mb-[60px]">
              <ReviewSlider reviews={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
