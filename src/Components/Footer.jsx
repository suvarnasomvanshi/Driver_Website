import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import x from "../assets/footer/x.svg"
import fb from "../assets/footer/fb.svg"
import instagram from "../assets/footer/instagram.svg"
import linkedin from "../assets/footer/linkedin.svg"

import "../styles/footer.css";

import { front_url, img_url } from "../utils/utils";

//  importing images
import toast from "react-hot-toast";
import logo from "../assets/suvarna_logo_footer.png";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, InstapaperShareButton } from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";
import { useGetBlogDetailQuery, useGetBlogsQuery } from "../redux/features/blog/blogApi";
import { masks } from "dateformat";

// import ReactTooltip from 'react-tooltip';

export const Footer = () => {
  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [searchError, setSearchError] = React.useState(null);
  const [isFocus,setFocus] = useState(true)

  const params = useParams();
  const scrollableBlogs = useRef(null);
  const [ishovered, setmousehover] = useState(false)
  const [hoverID, sethoverID] = useState(null)
  // console.log(params);
  const id = params.id;
  const { data, loading, error } = useGetBlogDetailQuery(params.id);
  const [blogLoading, setBlogLoading] = useState(false);
  // const [isSupportVisible, setIsSupportVisible] = useState(false);
  const [isPopupVsible, setpopupVisible] = useState(false)

  const {
    data: blogs,
    loading: blogs_loading,
    error: blogs_error,
  } = useGetBlogsQuery(id);
  const [blog, setBlog] = useState({});
  //  states
  const [white, setWhite] = useState("#EBEDF0");
  const [black, setBlack] = useState("#001E41");
  const [left, setLeft] = useState(0);

  masks.hammerTime = "d mmm, yyyy";
  //  onclick functions

  const [copied, setCopied] = useState(false);
  const locaiton = useLocation();
  const [url, setUrl] = useState("");
  const pathname = locaiton.pathname;
  useEffect(() => {
    const link = front_url + pathname;
    setUrl(link);
  }, [pathname]);

  let navigate = useNavigate();
  useEffect(() => {
    if (searchResult?.integrations?.length > 0) {
      if (searchResult?.integrations?.length > 0) {
        navigate(`/integration`);

        window.scrollTo(0, 0);
      } else {
        setSearchError("No results found");
      }
    } else if (searchResult?.blogs?.length > 0) {
      if (searchResult?.blogs?.length > 0) {
        navigate(`/blogs/${searchResult?.blogs[0].id}`);

        window.scrollTo(0, 0);
      } else {
        setSearchError("No results found");
      }
    } else if (searchResult?.products?.length > 0) {
      if (searchResult?.products?.length > 0) {
        navigate(`/products/${searchResult?.products[0].url}`);
        window.scrollTo(0, 0);
      } else {
        setSearchError("No results found");
      }
    }
  }, [searchResult]);

  const handleFocus = (e) => {
    setFocus((prevFocus) => !prevFocus);
  }  

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.length === 0) {
      toast.error("Please enter a search term");
    }
    if (search.length > 0) {
      fetch(
        `http://13.235.48.176:8000/api/integrations/filter/?query=${search}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.length == null) {
            toast.error("No results found");
          }
          setSearchResult(data);
        })
        .catch((err) => console.log(err));
    }
  };

  const usefulLinks = [
    {
      id: 1,
      name: "Privacy policy",
      route: "/privacypolicy",
    },
    {
      id: 2,
      name: "Terms of service",
      route: "/termsofuse",
    },
    {
      id: 3,
      name: "Support",
      route: "/support",
    },
    {
      id: 4,
      name: "careers",
      route: "/careers",
    },
    {
      id: 5,
      name: "Contact Us",
      route: "/contactus",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      name: "address",
      content:
        "6-3-191/C/1, Tower B, 4th Floor, Fortune 9, Raj Bhavan Road, Somajiguda, Hyderabad, Telangana, India-500082.",
    },
    {
      id: 2,
      name: "phoneNumber",
      content: "+91 8125772299",
    },
    {
      id: 3,
      name: "email",
      content: "jagdeesh@suvarna.co.in",
    },
  ];

  return (
    <footer className="w-full sm:h-[536px] flex flex-col justify-center items-center bg-[#3A3D40]">
      <div className="lg:10/12 md:w-11/12 w-full h-full flex flex-col justify-start items-start px-3">
        {/*  logo and search Box */}
        <div className="w-full my-5 flex md:flex-row flex-col md:justify-start justify-start md:items-center items-startpy-3">
          <div className="md:me-[117.12px] md:mb-0 mb-[20px] flex lg:justify-center items-center">
            <Link to="/" 
            onClick={(e)=>{window.scrollTo(0,0)}}
            >
              <img src={logo} alt="suvarna_logo"
                className="min-h-[]"
              />
            </Link>
          </div>

          <form
            onSubmit={handleSearch}
            className=" flex justify-start items-center h-[50px] flex-1 "
          >

            <div className="h-full flex items-center lg:w-[40vw] md:w-[50vw] w-[70vw] h-full ps-[24px] bg-transparent border border-white text-[#C2C2C2] rounded-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="#fff"
                style={{
                  fill: "#FFFFFF;",
                  maxWidth: "20px",
                  maxHeight: "20px",
                  // display: isFocus ? "block" : "none"
                }}
              >
                <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
              </svg>
              <input
                type="text"
                className="search-input lg:w-[40vw] md:w-[50vw] w-[70vw] h-full ps-[24px] py-[12px] bg-transparent"
                placeholder="Search products, blogs and more..."
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleFocus}
                style={{
                  outline:'none'
                }}
              />
              {!searchError == null && (
                <p role="alert" className="error text-red-500">
                  {searchError}
                </p>
              )}
            </div>

            <button
              className="bg-white w-[127px] h-[48px] rounded-[6px] text-[#2B6997] font-medium text-[16px] ms-[16px]"
              type="submit"
            >
              search
            </button>
          </form>
        </div>

        {/* footer navigations */}
        <div className="w-full h-fit sm:h-1/2 flex justify-center items-center flex-col sm:flex-row mt-[50px]">
          {/*  info */}
          <div className="md:w-2/5 sm:w-2/5 h-full flex flex-col justify-start items-start  ">
            <div className="text-[18px] font-medium text-white mb-[16px]"
              style={{
                //styleName: Sub-Header 3;
                fontFamily: 'Helvetica Neue-Medium',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '22px',
                letterSpacing: '0em',
                textAlign: 'left',
              }}
            >
              Contact Us
            </div>
            <div className="">
              {contactInfo?.map((d, index) => {
                return (
                  <div
                    style={{
                      fontFamily: 'Noto Sans-thin',
                      fontSize: '14px',
                      fontWeight: '100',
                      lineHeight: '21px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                    }}
                    key={index}
                    className="flex justify-start items-start my-[6px] "
                  >
                    <div className="min-w-[20px] h-full flex justify-start items-start me-[12px] pt-1">
                      {/*  svg- contacts-icon */}
                      {d.name === "address" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3371_3348)">
                            <path
                              d="M8 1.3335C11.3137 1.3335 14 4.01979 14 7.3335C14 9.3827 12.8827 11.0596 11.7056 12.2632C11.0598 12.9234 10.3731 13.465 9.7878 13.8744L9.50426 14.0679C9.45863 14.0983 9.41387 14.1278 9.37006 14.1563L9.11927 14.3161L8.89525 14.4529L8.61807 14.6142C8.23193 14.8322 7.76807 14.8322 7.38193 14.6142L7.10475 14.4529L6.75844 14.2391C6.71661 14.2125 6.67375 14.1849 6.62994 14.1563L6.35633 13.9739C5.74163 13.5545 4.99404 12.9784 4.29441 12.2632C3.11727 11.0596 2 9.3827 2 7.3335C2 4.01979 4.68629 1.3335 8 1.3335ZM8 5.3335C6.8954 5.3335 6 6.22893 6 7.3335C6 8.4381 6.8954 9.3335 8 9.3335C9.1046 9.3335 10 8.4381 10 7.3335C10 6.22893 9.1046 5.3335 8 5.3335Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3371_3348">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}

                      {/*  svg-phone-icon */}
                      {d.name === "phoneNumber" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3371_3356)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.0349 14.755C10.0743 14.7197 7.35381 14.3441 4.5049 11.4951C1.65598 8.64619 1.28037 5.92575 1.24503 4.96511C1.19116 3.50147 2.31236 2.07935 3.6081 1.52403C3.91214 1.39373 4.2804 1.41757 4.57152 1.62993C5.63738 2.40741 6.37381 3.5829 7.00601 4.50777C7.29161 4.92557 7.22334 5.496 6.83541 5.83181L5.53465 6.79786C5.40572 6.89359 5.36285 7.06759 5.44018 7.20833C5.73448 7.74406 6.25879 8.54126 6.85874 9.14126C7.45941 9.74186 8.29428 10.3 8.86681 10.6275C9.01528 10.7124 9.20201 10.6632 9.29588 10.5202L10.1421 9.23126C10.4665 8.79939 11.0725 8.70506 11.513 9.00993C12.4513 9.65933 13.5459 10.3825 14.3473 11.4089C14.575 11.7005 14.6089 12.0818 14.4731 12.3987C13.9152 13.7005 12.5035 14.8091 11.0349 14.755Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3371_3356">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}

                      {/*  svg-phone-icon */}
                      {d.name === "email" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3371_3364)">
                            <path
                              d="M1.37865 3.65451L7.29583 9.5717C7.66195 9.93783 8.24136 9.96071 8.63409 9.64035L8.71003 9.5717L14.6228 3.65891C14.642 3.73146 14.6552 3.80643 14.6618 3.88326L14.6668 3.99984V11.9998C14.6668 12.7028 14.1229 13.2786 13.433 13.3295L13.3335 13.3332H2.66683C1.96392 13.3332 1.38805 12.7893 1.33715 12.0993L1.3335 11.9998V3.99984C1.3335 3.92022 1.34047 3.84223 1.35385 3.76645L1.37865 3.65451ZM13.3335 2.6665C13.4142 2.6665 13.4932 2.67367 13.57 2.68741L13.6833 2.71286L8.00296 8.39317L2.32144 2.71168C2.39488 2.69203 2.47081 2.6785 2.54867 2.67167L2.66683 2.6665H13.3335Z"
                              fill="#FBFBFB"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3371_3364">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                    <div
                      className="text-white text-[14px] h-full "
                      style={{
                        fontFamily: 'Noto Sans',
                        fontSize: '14px',
                        fontWeight: '350',
                        lineHeight: '21px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}
                    >
                      {d.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* navigation */}
          <div className="sm:w-1/5 h-full flex flex-col justify-start items-center">
            <div className="text-[18px] font-medium text-white mb-[16px] ml-[-20px]"
              style={{
                fontFamily: 'Helvetica Neue-Medium',
                // fontFamily: 'Roboto',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '22px',
                letterSpacing: '0em',
                // textAlign: 'left',
                // maxWidth:'80px',
                // width:'100%',
              }}
            >
              Useful Links
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              {usefulLinks?.map((d, index) => {
                return (
                  <Link
                    key={index}
                    to={d.route}
                    className="my-[6px] text-left text-[16px] text-white"
                    style={{
                      //styleName: Body Text B1;
                      // color:'red',
                      fontFamily: "Noto Sans",
                      fontSize: "16px",
                      fontWeight: "350",
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    {d.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/*  social Media */}
          <div className="sm:w-2/5 h-full flex flex-col justify-start items-center ">
            <div className="text-[18px] font-medium text-white mb-[16px]" font-helvetica font-sans
              style={{
                fontFamily: 'Helvetica Neue-Medium',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '22px',
                letterSpacing: '0em',
                textAlign: 'left',
                maxWidth: '172px',
                width: '100%',
              }}
            >
              Stay up-to-date
            </div>
            <div
              style={{
                // backgroundColor:'red',
                maxWidth: '172px',
                width: '100%'
              }}
            >
              <div className="w-full flex justify-between items-start"
                style={{
                  // backgroundColor:'red',
                  maxWidth: '172px',
                  width: '100%'
                }}
              >

                {/* <div className="tooltip-container">
                  <img src={fb} alt="" />
                  <span className="tooltip-text">Facebook</span>
                </div>

                <div className="tooltip-container">
                  <img src={linkedin} alt="" />
                  <span className="tooltip-text">LinkedIn</span>
                </div>

                <div className="tooltip-container">
                  <img src={instagram} alt="" />
                  <span className="tooltip-text">Instagram</span>
                </div>

                <div className="tooltip-container">
                  <img src={x} alt="" />
                  <span className="tooltip-text">Twitter</span>
                </div> */}

                <div className="tooltip-container">
                  <FacebookShareButton url={url} quote={"Facebook"} className="tooltip-container">
                    <button type="button" className="mr-5">
                      <img src={fb} alt="" title="Facebook" />
                    </button>
                  </FacebookShareButton>
                </div>
                <TwitterShareButton url={url} quote={"Twitter"}>
                  <button type="button" className="mr-5" >
                    <img src={x} alt="" title="Twitter" />
                  </button>
                </TwitterShareButton>
                <LinkedinShareButton url={url} quote={"LinkedIn"}>
                  <button type="button" className="mr-5">
                    <img src={linkedin} alt="" title="LinkedIn" />
                  </button>
                </LinkedinShareButton>
                <InstapaperShareButton url={url} quote={"Instagram"}>
                  <button type="button" className="mr-5">
                    <img src={instagram} alt="" title="Instagram" />
                  </button>
                </InstapaperShareButton>
                {/* <ReactTooltip/> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          color: "wheat",
        }}
      />
      {/* footer copyrights */}
      <div
        className="w-full h-[70px] border-top border-[#929292] py-[20px] text-center flex justify-center items-center text-[#FFFFFF] font-normal text-[16px]"
        style={{
          borderTop: "1px solid #929292",
          fontFamily: "Noto Sans",
          fontSize: "16px",
          fontWeight: "300",
          lineHeight: "24px",
          letterSpacing: "0em",
          textAlign: 'center',

        }}
      >
        © 2023 Suvarna Technosoft Inc. All rights reserved.
      </div>
    </footer>
  );
};
