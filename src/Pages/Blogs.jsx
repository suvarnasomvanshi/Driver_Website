import React, { useEffect, useState } from "react";
import BlogCarousel from "../Components/BlogCarousel";
import SmallGreenWave from "../Components/SmallGreenWave";

import "../styles/Blogs.css";

import dateFormat, { masks } from "dateformat";
//  blog()
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGetBlogsQuery } from "../redux/features/blog/blogApi";
import { img_url } from "../utils/utils";
import Subscribe from "../Components/Subscribe/Subscribe";

const Blogs = () => {
  const { data, loading, error } = useGetBlogsQuery();
  const navigate = useNavigate();
  const [ishovered,setmousehover] = useState(false)
  const [hoverID,sethoverID] = useState(null)
  masks.hammerTime = "d mmm, yyyy";
 
  const handleEnterHover = (id) =>{
    setmousehover(true)
    sethoverID(id)
  }

  const handleLeaveHover = (id) =>{
    setmousehover(false)
    sethoverID(null)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  if (error) {
    return <div> Something went wrong</div>;
  }
  if (loading || !data) {
    return <div> Loading ... </div>;
  }

  const goToDetail =(id)=>() => {
    navigate(`/blogs/${id}`);
  };
  console.log("Blog Data",data);
  return (
    <>
      <div className="w-srceen h-auto flex flex-col justify-start items-start">
        <SmallGreenWave
          heading="Suvarna Insights"
          subheading="Explore curated content and practical tips from experts on growing your healthcare business, and more..."
        />

        <div className=" blogs mt-[120px] relative px-[50px]">
          <div className="max-w-[1320px]  flex md:flex-row flex-col md:justify-evenly justify-center  ">
            {/* left section - image + text */}
            <div className="md:w-[65%] w-full h-full flex flex-col justify-start">
              <div className="w-full flex flex-col justify-start items-center overflow-hidden ">
                <img
                  // src={img_url + data[0].image}
                  src={data[0].image}
                  alt="blog_image"
                  className="h-full min-w-full"
                  style={{
                    maxWidth:'848px',
                    maxHeight:'456px',
                    width:'100%',
                    height:'100%'
                  }}
                />
              </div>
              <div className="md:h-1/4 h-[50vh] flex flex-col justify-center items-center md:px-0 px-2 ">
                <div className="blogs_header tex-[36px] font-bold text-[#3C4043] leading-[54px] my-[22px]">
                  {data[0].title}
                </div>
                <div className="text-[16px] font-normal text-[#3C4043]"
                style={{//styleName: Body Text B1;
                  fontFamily: 'Noto Sans',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  }}
                >
                  {data[0].sub_title}
                </div>
              </div>
            </div>

            {/* Divider line */}
            <div className="h-[660px] w-[1px] mx-2 ml-[20px] border bg-[#EBEDF0]"></div>

            {/* right section - blogs section */}
            <div className=" w-full md:w-[30%] md:h-full h-auto flex flex-col justify-center items-center md:p-0 p-3 ml-[20px]" 
            style={{
              // backgroundColor:'red',
              maxWidth:'424px',
              width:'100%'
            }}
            >
              <div className="w-full flex-grow-1 flex flex-col justify-evenly items-start" 
              // style={{backgroundColor:'blue'}}
              >
                {data.slice(0, 4).map((d, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-full flex flex-col justify-center items-center mb-3 border-bottom border-[#EBEDF0] cursor-pointer`}
                      onClick={goToDetail(d.id)}
                      onMouseEnter={(e)=>{handleEnterHover(d.id)}}
                      onMouseLeave={(e)=>{handleLeaveHover(d.id)}}
                    >
                      <div className="w-full flex justify-start items-center mb-2">
                        <div className="mx-1 flex justify-center items-center other_blog_regular_text text-sm"
                        style={{//styleName: Body Text B2;
                          fontFamily: 'Noto Sans',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '21px',
                          letterSpacing: '0em',
                          textAlign: 'left',
                          color: (ishovered && hoverID === d.id) ? "#000" : ""
                          }}
                        >
                          {/* {dateFormat(d.created_at, "hammerTime")} */}
                          {dateFormat(d.created_at, "hammerTime").split(" ")[1].substring(0,3)} {dateFormat(d.created_at, "hammerTime").split(" ")[0]}
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
                      <div className="flex justify-start items-center lg:text-[20px] md:text-[16px] text-[14px] font-medium mb-[13px]"
                      style={{
                        fontFamily: 'Helvetica Neue-Medium',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '30px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color:ishovered && hoverID === d.id ? "#146DFA" :'#3C4043'
                      }}
                      >
                        {d.title.slice(0, 55) + "..."}
                      </div>
                      <div
                        className={`w-full px-1   ${
                          index == 3 ? "border-none" : "border border-[#EBEDF0]"
                        }`}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <Subscribe />
            </div>
          </div>
        </div>

        {/* blogCarousel carousel */}
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
      </div>
    </>
  );
};

export default Blogs;
