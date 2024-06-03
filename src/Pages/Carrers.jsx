import "../styles/Carrers.css";

import React,{ useState } from "react";

import { Link } from "react-router-dom";
import Error from "../Components/common/Error";
import LoadingSpinner from "../Components/common/LoadingSpiner";
import Balance from "../assets/CareersPage/Balance.svg";
import Career from "../assets/CareersPage/Career.svg";
import dollarBag from "../assets/CareersPage/dollarbag.svg";
import intro_vector from "../assets/CareersPage/introVector.svg";
import jobSearch from "../assets/CareersPage/jobSearch.svg";
import location from "../assets/CareersPage/location.svg";
import officeBag from "../assets/CareersPage/normalBag.svg";
import rupeeBag from "../assets/CareersPage/rupeeIcon.svg";
import polygon from "../assets/Ellipse 301.png";
import { useGetJobsQuery } from "../redux/features/careers/careers";

export const Carrers = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [id, setId] = useState(0);
  const { data, isLoading, isError, error } = useGetJobsQuery();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   return () => {
  //     return null;
  //   };
  // }, []);

  const parseHTML = (string) =>{
    const HTMLString = string;
    // domparser initialiazation
    const parser = new DOMParser();
    // psrsing
    const doc = parser.parseFromString(HTMLString, 'text/html');
    // store into the variable
    const textContent = doc.body.textContent || "";
    // Log the extracted text content to the console
    return textContent
  }

  const handleExpansion = (d_id) =>{
    if(id === 0){ //if everything close
      setId(d_id)
      setIsExpanded(true)
    }
    if(id === d_id){
      setId(0)
      setIsExpanded(!isExpanded)
    } //closing the expansion only
    else{ // close and then open
      setId(d_id)
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Error message={"error for fatching job data"} />;
  }
  return (
    <div className="Carrers flex flex-col justify-start items-center relative">
      {/*  header */}
      <div className="w-full h-[600px] flex  justify-center relative mt-2">
        <div className="md:w-10/12 w-11/12 flex flex-col lg:mt-10 gap-1 relative z-10 text-white">
          {/* heading and subheading */}
          <div>
            <div className="heading lg:text-[48px] md:text-[40px] text-[32px] font-bold lg:w-full"
            style={{
              //styleName: Header H0;
              fontFamily: 'Helvetica Neue-Bold',
              fontSize: '48px',
              fontWeight: '700',
              lineHeight: '72px',
              letterSpacing: '0em',
              textAlign: 'left',
            }}
            >
              Work with us. Build the future of healthcare.
            </div>
            <div className="sub-heading lg:text-[32px] md:text-[28px] text-[24px] font-medium">
              We’re hiring. Come pursue an exciting & fulfilling career with us.
            </div>
          </div>
          {/* text below subheading */}
          <div className="text lg:w-2/3 md:w-full w-full text-left"
          style={{
            fontFamily: 'Noto Sans',
            fontSize: '20px',
            fontWeight: '200',
            lineHeight: '30px',
            letterSpacing: '0.01em',
            textAlign: 'left',
            // color:'red'
          }}
          >
            <p className="lg:text-[20px] md:text-[16px] text-[14px] my-3 text-justify"
            style={{
            fontFamily: 'Noto Sans',
            fontSize: '20px',
            fontWeight: '200',
            lineHeight: '30px',
            letterSpacing: '0.01em',
            textAlign: 'left',
          }}
            >
              We are a team of 250+ committed employees who share our passion
              for digital transformation at all healthcare touchpoints. We
              believe our employees are our most valuable asset and we provide
              opportunities to build a rewarding career.
            </p>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] my-3 text-justify"
            style={{
            fontFamily: 'Noto Sans',
            fontSize: '20px',
            fontWeight: '200',
            lineHeight: '30px',
            letterSpacing: '0.01em',
            textAlign: 'left',
          }}
            >
              We are constantly looking for the right people to help us deliver
              cutting-edge products and solutions that can change the way
              healthcare is delivered.
            </p>
            <p className="lg:text-[20px] md:text-[16px] text-[14px] my-3 text-justify"
            style={{
            fontFamily: 'Noto Sans',
            fontSize: '20px',
            fontWeight: '100',
            lineHeight: '30px',
            letterSpacing: '0.01em',
            textAlign: 'left',
          }}
            >
              If you are up for the challenge of being a part of the team that
              will develop the next generation of products, scroll down to view
              our current openings.
            </p>
          </div>
          <a href="#opening" className="header-button !mt-5"
          style={{
            //styleName: Button Text;
            fontFamily: 'Helvetica Neue-Medium',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
          >
            View Openings
          </a>
        </div>
        {/* Frame ends here */}

        <div className="header-polygon w-full h-full absolute top-0">
          <img src={polygon} alt="polygon" className="w-full h-[600px]" />
        </div>
      </div>

      {/* body */}
      <div className="w-full bg-white flex flex-col justify-start items-center mb-6">
        {/*  intro why join */}
        <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col lg:flex-row justify-center items-center gap-5 my-[120px]">
          {/* left side content */}
          <div className="lg:w-1/3  w-full flex justify-center items-center">
            <img
              src={intro_vector}
              alt="intro_vector"
              className="w-full max-w-md"
            />
          </div>

          {/*right side content */}
          <div className="lg:w-2/3  w-full flex flex-col justify-center items-start gap-3 px-10 mt-6 lg:mt-0">
            <h2 className="why-join lg:text-[32px] md:text-[28px] text-[24px] font-bold text-[#2B6997]">
              Why join Suvarna?
            </h2>
            <p className="why-desc lg:text-[20px] md:text-[16px] text-[14px] font-normal text-[#6D747A] mb-4">
              {/* We’re consistently looking for the right people to join our team.
              If you join us, here’s what you can expect, and more... */}
              We’re consistently looking for the right people to join our team. If you join us, here’s what you can expect, and more...
            </p>

            {/* list 1 */}
            <div className="mb-4  flex gap-[12px]">
              <div className="h-full flex justify-start items-start me-2 py-2">
                <img src={dollarBag} alt="list-icon" />
              </div>
              <div className="lg:text-[20px] md:text-[16px] text-[14px] font-normal ">
                <div className="intro-list-header"
                style={{
                  fontFamily: 'Helvetica Neue-Medium',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '30px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}
                >Benefits</div>

                <p className="text-[#6D747A] intro-list-subt text-justify" style={{textAlign:'justify'}}>
                  Competitive salaries, Financial rewards for high performance,
                  Health insurance, Life Insurance
                </p>
              </div>
            </div>

            {/* list 2 */}
            <div className="mb-4 flex gap-[12px]">
              <div className="h-full flex justify-start items-start me-2 py-2">
                <img src={Career} alt="list-icon" />
              </div>
              <div className="lg:text-[20px] md:text-[16px] text-[14px] font-normal">
                <div className="intro-list-header"
                style={{
                  fontFamily: 'Helvetica Neue-Medium',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '30px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}
                >Career</div>

                <p className="text-[#6D747A]" style={{textAlign:'justify'}}>
                  Training, work with advanced technologies, innovation
                  opportunities
                </p>
              </div>
            </div>

            {/* list 3 */}
            <div className="mb-4  flex gap-[12px] ">
              <div className="h-full flex justify-start items-start me-2 py-2">
                <img src={Balance} alt="list-icon" />
              </div>
              <div className="lg:text-[20px] md:text-[16px] text-[14px] font-normal">
                <div className="intro-list-header"
                style={{
                  fontFamily: 'Helvetica Neue-Medium',
                  fontSize: '20px',
                  fontWeight: '500',
                  lineHeight: '30px',
                  letterSpacing: '0.02em',
                  textAlign: 'left',
                }}
                >Balance</div>
                <p className="text-[#6D747A] ">
                  <p className="text-[#6D747A]" style={{textAlign:'justify'}}>
                    We understand what’s important to you and provide
                    flexibility that works with your life.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  opening */}
        <div
          className="lg:w-11/12  w-full flex flex-col justify-center items-start mb-[120px] px-10 "
          id="opening"
        >
          {/* section heading here */}
          <h1 className="opening-header font-bold lg:text-[48px] md:text-[40px] text-[32px] text-[#3C4043] pl-[5px] mb-[20px]">
            Our current openings
          </h1>
          {/* section heading close here */}

          <div className="w-full h-full flex flex-col-reverse xl:flex-row flex-grow-1 gap-5 pl-0">
            {/* left side card  content here */}
            <div className="lg:w-2/3  flex-grow-1 h-full flex flex-col gap-4 ">
              {data?.map((d, index) => {
                return (
                  <div
                    style={{
                      border: `${isExpanded && id === d.id ? "1px solid #146DFA" : ""
                        }`,
                    }}
                    key={index}
                    className={`opening-box lg:max-w-[872px] w-full flex  flex-col md:flex-row md:justify-between rounded-[6px] gap-5 p-2 m-2  `}
                  >
                    {/* jobs */}
                    <div className="max-w-[544px] w-full flex flex-col justify-start items-start px-2">
                      <h2 className="opening_list_header my-3" 
                      style={{
                        //styleName: Sub-Header 2;
                        fontFamily: 'Helvetica Neue-Medium',
                        fontSize: '20px',
                        fontWeight: '500',
                        lineHeight: '30px',
                        letterSpacing: '0.02em',
                        textAlign: 'center',
                        paddingLeft:'3px'
                      }}
                      >{d?.title}</h2>
                      <div
                        className={`w-full flex flex-wrap items-center pl-0`}
                      >
                        {/*  details - Job type */}
                        <div className="flex justify-center items-center mr-[15px]">
                          <img
                            src={officeBag}
                            alt="details_icon"
                            className="mx-1"
                            title="Duration"
                          />
                          <p className="md:text-[16px] text-[14px] font-normal text-[#3C4043]" style={{fontFamily:'Noto sans',fontWeight:'400'}}>
                            {d?.job_type ?? "N/A"}
                          </p>
                        </div>

                        {/*  details - Location */}
                        <div className=" flex justify-center items-center mr-[15px]">
                          <img
                            src={location}
                            alt="details_icon"
                            className="mx-1"
                            title="Location"
                          />
                          <p className="md:text-[16px] text-[14px] font-normal text-[#3C4043]" style={{fontFamily:'Noto sans',fontWeight:'400'}}>
                            {d.location ?? "N/A"}
                          </p>
                        </div>

                        {/*  details - salary */}
                        <div className="flex justify-center items-center ">
                          <img
                            src={rupeeBag}
                            alt="details_icon"
                            className="mx-1"
                            title="Salary"
                          />
                          <p className="md:text-[16px] text-[14px] font-normal text-[#3C4043]" style={{fontFamily:'Noto sans',fontWeight:'400'}}>
                          {d.salary_range ?? "N/A"}
                          </p>
                        </div>
                      </div>

                      {isExpanded && id === d.id ? (
                        <div
                          className="details w-full justify-center items-center pt-[16px] pl-[5px]"
                        >
                          <div className="flex flex-grow-1 flex-col justify-center items-start gap-3">
                            <div>
                              <div className="heading-t text-[16px] text-[#000]"
                              style={{
                                //styleName: Sub-Header 4;
                                fontFamily: 'Helvetica Neue-Medium',
                                fontSize: '16px',
                                fontWeight: '500',
                                lineHeight: '24px',
                                letterSpacing: '0.02em',
                              }}
                              >
                                Qualification
                              </div>
                              <div className="heading-st text-[#6D747A] text-[16px] font-normal">
                                {/* {d.qualification} */}
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: d.qualification,
                                  }}
                                  style={{
                                    //styleName: Body Text B1;
                                    fontFamily: 'Noto Sans',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '24px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    color:'#6D747A'
                                  }}
                                ></div>
                              </div>
                            </div>

                            {/* salary */}
                            <div>
                              <div className="heading-t font-medium text-[16px] text-[#000]">
                                Salary Range
                              </div>
                              <div className="heading-st text-[#6D747A] text-[16px] font-normal"
                              style={{
                                //styleName: Body Text B1;
                                fontFamily: 'Noto Sans',
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                                color:'#6D747A'
                              }}
                              >
                                {d?.salary_range ?? "N?A"}
                              </div>
                            </div>
                            <div>
                              <div className="heading-t font-medium text-[16px] text-[#000]">
                                Skills
                              </div>
                              <div className="heading-st text-[#6D747A] text-[16px] font-normal"
                              style={{
                                //styleName: Body Text B1;
                                fontFamily: 'Noto Sans',
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                                color:'#6D747A'
                              }}
                              >
                                {d?.skills ?? "N?A"}
                              </div>
                            </div>

                            {/* description */}
                            <div>
                              <div className="heading-t font-medium text-[16px] text-[#000]">
                                Description
                              </div>
                              <div className="heading-st text-[#6D747A] text-[16px] font-normal"
                              style={{
                                //styleName: Body Text B1;
                                fontFamily: 'Noto Sans',
                                fontSize: '16px',
                                fontWeight: '400',
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'justify',
                                color:'#6D747A'
                              }}
                              >
                              {/* {d?.job_description} */}
                                {/* <div */}
                                {/* <div className="prose"
                                  dangerouslySetInnerHTML={{
                                    __html: d?.job_description,
                                  }}
                                >
                                </div> */}
                                {parseHTML(d?.job_description)}
                                {/* {d?.job_description} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* button */}
                    <div className=" flex flex-col justify-end">
                      <div
                        className={`flex-grow-1 gap-[12px] flex lg:justify-center justify-start lg:items-end p-2   `}
                      >
                        <Link
                          to={`/careers/${d?.id}`}
                          className="apply-button bg-[#146DFA] text-white w-[118px] h-[48px] mx-1 text-[16px]  rounded-[6px] flex justify-center items-center"
                          style={{
                            gap: '36px',
                          }}
                        >
                          Apply
                        </Link>
                        <button
                          type="button"
                          className="moreInfo-button w-[118px] h-[48px] bg-white text-[#146DFA] rounded-[6px] text-[16px] border border-[#146DFA]"
                          onClick={(e)=>{handleExpansion(d.id)}}>
                          {isExpanded && id === d.id ? "Less Info" : "More Info"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={`flex flex-grow-1  ${isExpanded
                ? "justify-start items-start"
                : "justify-start items-start"
                } `}
            >
              <figure className="max-w-[400px] w-full min-h-[400px] lg:mt-10">
                <img src={jobSearch} className="w-full h-full" alt="job_hunt" />
              </figure>
            </div>
            {/* right side content */}
          </div>
        </div>
      </div>
    </div>
  );
};
