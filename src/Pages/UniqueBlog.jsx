import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import PopUpShare from "../Components/PopUpShare/PopUpShare";
import PopUpShare from "../Components/PopUpShare";
import "../styles/Blogs.css";
import parse from 'html-react-parser'

import BlogCarousel from "../Components/BlogCarousel";
// import "../styles/SupportModalStyle.css";

//  blog
import dateFormat, { masks } from "dateformat";
import toast, { useToaster } from "react-hot-toast";
// import fb_blue from "../assets/fb_blue.svg";
import link_blue from "../assets/icon/link_blue.svg";
import linkedin_blue from "../assets/icon/linkedin_blue.svg";
import twitter_blue from "../assets/icon/twitter_blue.svg";
import user_icon from "../assets/user_icon.svg";
import {
  useGetBlogDetailQuery,
  useGetBlogsQuery,
} from "../redux/features/blog/blogApi";
import { front_url, img_url } from "../utils/utils";

import BlogShare from "../Components/BlogShare/BlogShare";
import Subscribe from "../Components/Subscribe/Subscribe";
import copyIcon from "../assets/icon/copyIcon.svg";
import fbIcon from "../assets/blogs/fb-blue.svg";
import linkedin from "../assets/icon/linkedin.svg";
import twitter from "../assets/icon/twitter.svg";
import blankFb from "../assets/blogs/blank-fb.svg"
import SubscribeSingle from "../Components/Subscribe/SubscribeSingle";

const months = {
  "Jan,": "January",
  "Feb,": "February",
  "Mar,": "March",
  "Apr,": "April",
  "May,": "May",
  "Jun,": "June",
  "Jul,": "July",
  "Aug,": "August",
  "Sep,": "September",
  "Oct,": "October",
  "Nov,": "November",
  "Dec,": "December"
}


const UniqueBlog = () => {
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
  const navigate = useNavigate();
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
  
  const handleCopy = () => () => {
    setCopied(true);
    toast("Copied");
  };

  const handlePopup = () => {
    console.log("PopUp here :", isPopupVsible)
    setpopupVisible(false)
    console.log("PopUp here :", isPopupVsible)
    alert(isPopupVsible)
  }

  const handleEnterHover = (id) => {
    setmousehover(true)
    sethoverID(id)
  }

  const handleLeaveHover = (id) => {
    setmousehover(false)
    sethoverID(null)
  }

  const parseHtml = (HTMLString) => {
    const new_html = `<div style="max-width: 920px; width: 100%; color: #3C4043;">${HTMLString}</div>`
    console.log(new_html)
    return new_html
  }

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

  useEffect(() => {
    const contentID = document.getElementById("blog_content");
    if (data?.content) {
      // console.log(data?.content);
      // console.log(data)

      contentID.innerHTML = data?.content;
      var LI_tags = contentID.querySelectorAll("li")
      // console.log(LI_tags)
      // adding bullet
      LI_tags.forEach(function (li) {
        li.style.listStyleImage = 'url("data:image/svg+xml;charset=utf-8,<svg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%233c4043\' viewBox=\'0 0 8 8\' width=\'8\' height=\'8\'><circle cx=\'4\' cy=\'4\' r=\'3\'/></svg>")';
      });
    }
  }, [data?.content]);

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


  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);
  useEffect(() => {
    if (!data || loading || !data[0]) {
      return;
    }
    setBlog(data[0]);
  }, [data, loading]);



  if (error || blogs_error) {
    console.log(error, blogs_error);
    return <div>Something went wrong</div>;
  }
  if (loading || blogs_loading || !data || !blogs) {
    return <div>Loading...</div>;
  }

  const goToDetail = (id) => () => {
    navigate(`/blogs/${id}`);
  };

  // console.log("details", data);
  // console.log(img_url + data[0]?.image);
  // console.log(blog?.content);
  return (
    <>
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
      <div className="w-screen flex flex-col">
        <div className=" flex flex-col px-5 md:px-[60px]">
          {/* same div as below */}
          <div className="  flex mt-10 blogs">
            {/* div for img, cat.. and rhs content */}
            <div className="flex md:flex-row flex-col justify-evenly">
              {/* div for category, title and suvarna team */}
              <div className="md:w-[65%] w-full h-full flex flex-col justify-center items-center">
                {/* category of the blog */}
                <div className="w-full flex mb-[14px]">
                  <div className="rounded-full bg-[#146DFA] bg-opacity-10 px-3 py-[6px] text-[#146DFA] text-sm font-normal">
                    {data?.category}
                  </div>
                </div>

                <div className="flex-grow-1 flex flex-col justify-center items-center">
                  {/* title of the blog */}
                  <div className="blogs_header tex-[36px] font-bold text-[#3C4043] leading-[54px] mb-[24px]"
                  >
                    {data?.title}
                  </div>
                  {/* suvarna team */}
                  <div className="blogs_regular_text w-full flex justify-start items-center mb-[30px]">
                    <img
                      src={user_icon}
                      alt="user_icon"
                      className="w-[36px] h-[36px] mr-[12px]"
                    />
                    <div className="text-[#08090A] mr-[12px] text-[16]"
                      style={{
                        //styleName: Body Text B1;
                        fontFamily: 'Noto Sans',
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: '24px',
                        letterSpacing: '0.02em',
                        textAlign: 'left',
                        color: '#08090A',
                        // color:'red'
                      }}
                    >
                      Suvarna Team
                    </div>
                    <div className=" text-[#6D747A] text-[16px] font-normal"
                      style={{
                        //styleName: Body Text B1;
                        fontFamily: 'Noto Sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#6D747A'
                      }}
                    >
                      {`${dateFormat(data?.created_at, "hammerTime").split(" ")[0]} ${months[dateFormat(data?.created_at, "hammerTime").split(" ")[1]]} ${dateFormat(data?.created_at, "hammerTime").split(" ")[2]}`}
                    </div>
                  </div>
                </div>

                <div className="w-full h-3/4 flex flex-col items-center overflow-hidden mb-[24px]">
                  <img
                    // src={img_url + data?.image}
                    src={data?.image}
                    alt="blog_image"
                    className="h-full min-w-full"
                    style={{
                      height: '100%',
                      width: '100%',
                      maxWidth: '848px',
                      maxHeight: '456px',
                    }}
                  />
                  <div className="description flex pt-[30px]"
                  style={{
                    fontFamily: 'Noto Sans',
                    fontSize: '21px',
                    fontWeight: '400',
                    lineHeight: '38px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color:'#3C4043'
                  }}
                  >
                    {data?.sub_title}
                  </div>
                </div>
              </div>
              {/* divider */}
              <div className="h-[856px] w-[1px] mx-2 border bg-[#EBEDF0]"></div>
              {/* rhs of the page */}
              <div className="md:w-[30%] w-full h-full flex flex-col items-center ">
                <div className="w-full h-32 flex flex-col justify-evenly items-start bg-[#EBEDF0] px-[24px] py-[24px]">
                  <div className=""
                    style={{
                      fontFamily: 'Helvetica Neue-Medium',
                      fontSize: "20px",
                      fontWeight: "400",
                      lineHeight: "30px",
                      letterSpacing: "0.02em",
                      textAlign: "left",
                      color: '#3C4043',
                    marginBottom:'30px'
                    }}
                  >Share this article:</div>
                  <div className="flex justify-start items-center">
                    <BlogShare
                      url={url}
                      title={data?.title}
                      handleCopy={handleCopy}
                      twitter={twitter}
                      linkedin={linkedin}
                      fbIcon={blankFb}
                      copyIcon={copyIcon}
                    />
                  </div>
                </div>
                <div
                  className={`px-1 border border-[#EBEDF0] flex justify-center items-center w-full  my-6 cursor-pointer`}
                ></div>

                <Subscribe />
                <div
                  className={`px-1 border border-[#EBEDF0] flex justify-center items-center w-full  my-6 cursor-pointer`}
                ></div>

                <div className="md:w-full w-2/3 related-article "
                  style={{
                    fontFamily: 'Helvetica Neue-Medium',
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "30px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: '#08090A'
                  }}
                >
                  Related articles
                </div>

                <div className="w-full flex-grow-1 flex flex-col justify-evenly md:items-start items-center">
                  {blogs?.slice(0, 3).map((d, index) => {
                    return (
                      <div
                        key={index}
                        className={`md:w-full w-2/3 h-[129px] flex flex-col justify-center items-center mb-3 border-bottom border-[#EBEDF0] cursor-pointer`}
                        onClick={goToDetail(d.id)}
                        onMouseEnter={(e) => { handleEnterHover(d.id) }}
                        onMouseLeave={(e) => { handleLeaveHover(d.id) }}
                      >
                        <div className="w-full flex justify-start items-center my-2">
                          <div className="mx-1 flex justify-center items-center other_blog_regular_text"
                            style={{
                              fontFamily: 'Noto Sans',
                              fontSize: '14px',
                              fontWeight: '400',
                              lineHeight: '21px',
                              letterSpacing: '0em',
                              textAlign: 'left',
                              color: (ishovered && hoverID === d.id) ? "#000" : ""
                            }}
                          >
                            {/* {dateFormat(blogs?.created_at, "hammerTime")} */}
                            {dateFormat(d.created_at, "hammerTime").split(" ")[1].substring(0, 3)} {dateFormat(d.created_at, "hammerTime").split(" ")[0]}
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="5"
                            className="w-[5px] h-[5px] mx-2"
                            viewBox="0 0 4 5"
                            fill="none"
                          >
                            <circle cx="2" cy="2.5" r="2" fill="#6D747A" />
                          </svg>
                          <div className="mx-1 flex w-40   other_blog_regular_text text-sm"
                            style={{//styleName: Body Text B2;
                              fontFamily: 'Noto Sans',
                              fontSize: '14px',
                              fontWeight: '400',
                              lineHeight: '21px',
                              letterSpacing: '0em',
                              textAlign: 'left',
                              color: ishovered && hoverID === d.id ? "#000" : ""
                            }}
                          >
                            {d.category}
                          </div>
                        </div>
                        <div className="flex justify-start items-center lg:text-[20px] md:text-[16px] text-[14px]"
                          style={{
                            fontFamily: 'Helvetica Neue-Medium',
                            fontSize: '20px',
                            fontWeight: '500',
                            lineHeight: '30px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                            color: ishovered && hoverID === d.id ? "#146DFA" : '#3C4043',
                            // color: '#3C4043'
                          }}
                        >
                          {d.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="lg:w-10/12 md:w-11/12 w-full h-full flex justify-start items-center">
              <div className="md:w-[65%] w-full h-full flex flex-col justify-center items-start ms-3"
                style={{
                  maxWidth: '810px',
                  width: '100%'
                }}>
                <div
                  id="blog_content"
                  className="prose"
                  style={{
                    maxWidth: '810px',
                    width: '100%',
                    // color:'#3C40443'
                  }}
                // dangerouslySetInnerHTML={{ __html: parseHtml(data?.content) }}
                ></div>
                {/* {parseHtml(data?.content)} */}

                <div className="h-[1px] w-[856px] mx-2 border bg-[#EBEDF0] mt-[20px] mb-[10px]"></div>
                <div className=" h-32 flex justify-start items-start py-[24px]"
                  onClick={(e) => { setpopupVisible(true) }}
                  style={{
                    //styleName: Sub-header SH2;
                    fontFamily: 'Helvetica Neue-Medium',
                    fontSize: '20px',
                    fontWeight: '400',
                    lineHeight: '30px',
                    letterSpacing: '0.02em',
                    textAlign: 'left',
                    color: '#3C4043',
                  }}
                >
                  Share this article:
                  <div className="mx-3 flex justify-start items-center" onClick={(e) => { setpopupVisible(true) }}>
                    <button type="button" className="mx-2" onClick={(e) => { setpopupVisible(true) }}>
                      <img src={fbIcon} alt="" title="Facebook" />
                    </button>

                    <button type="button" className="mx-2">
                      <img src={twitter_blue} alt="" title="Twitter" />
                    </button>

                    <button type="button" className="mx-2">
                      <img src={linkedin_blue} alt="" title="Linkedin" />
                    </button>

                    <button type="button" className="mx-2">
                      <img src={link_blue} alt="" title="Link" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen md:h-[335px] flex justify-center items-center gradient-div"
          style={{
            background: 'linear-gradient(145.18deg, rgba(57, 208, 94, 0.3) 8.97%, rgba(70, 144, 199, 0.3) 63.5%)',
          }}
        >
          <div className="lg:w-7/12 md:w-11/12 w-full flex md:flex-row flex-col justify-between items-center">
            <div className="md:min-w-1/2 flex flex-col justify-center md:items-start items-center text-left gradient-div-header  md:py-0 py-4">
              <div className="md:w-[424px] flex flex-col justify-center text-[36px] font-bold items-center text-left">
                <div className=" text-[#08090A]"
                  style={{
                    fontFamily: 'Helvetica Neue-Bold',
                    fontSize: '36px',
                    // fontWeight: '400',
                    lineHeight: '54px',
                    letterSpacing: '0em',
                  }}
                >
                  Get our latest insights right in your inbox,
                </div>
                <div className=" text-left w-full text-[#146DFA]"
                  style={{
                    fontFamily: 'Helvetica Neue-Bold',
                    fontSize: '36px',
                    // fontWeight: '400',
                    lineHeight: '54px',
                    letterSpacing: '0em',
                  }}
                >
                  completely free!
                </div>
              </div>
            </div>

            <div className="md:w-[392px]  flex flex-col justify-center items-center px-2">
              <SubscribeSingle></SubscribeSingle>
            </div>
          </div>
        </div>
      </div>
      <BlogCarousel
        title={
          <div className="text-[36px] font-bold text-[#3C4043] leading-[54px] mt-[24px]"
            style={{
              fontFamily: 'Helvetica Neue-Bold',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '54px',
              letterSpacing: '0em',
              textAlign: 'left',
            }}
          >
            Recent articles
          </div>
        }
      />
    </>
  );
};

export default UniqueBlog;