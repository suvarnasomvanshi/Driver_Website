import "../styles/UniqueJob.css";

import JobApplyForm from "../Components/Careers/JobApplyForm2.jsx";
import React from "react";
import SmallBlueWave from "../Components/SmallBlueWave";
import resume from "../assets/Resume-amico 1.png";
import resume2 from "../assets/CareersPage/apply-people.svg"
import { useGetSingleJobsQuery } from "../redux/features/careers/careers.js";
import { useParams } from "react-router-dom";

// import JobApplyForm from "../Components/Careers/JobApplyForm.jsx";
// import "./style.css";

export const UniqueJob = () => {
  const { id } = useParams();

  const { data } = useGetSingleJobsQuery(id);
  const parseList = (list) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(list, 'text/html');
    const listItems = Array.from(doc.querySelectorAll('li')).map(li => li.textContent.trim());
    return listItems;
  }

  const parseHTML = (string) => {
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

  return (
    <div className=" mx-auto flex flex-col  items-center">
      <SmallBlueWave
        carrers={true}
        package={data?.salary_range}
        role={data?.title}
        time={data?.job_type}
        location={data?.location}
      />

      <div className=" md:w-11/12 w-full flex justify-center items-center mt-[120px]">
        <div className="max-w-3/4 flex-col justify-center items-start ">
          <div className="mb-[46px]">
            <div className="role-head1 lg:text-[28px] md:text-[24px] text-[20px] text-[#08090A] font-medium">
              About The Role
            </div>
            <div className="role-desc1 text-[#3C4043] font-normal md:text-[16px] text-[14px]"

            >
              {data ? (
                // <div dangerouslySetInnerHTML={{ __html: data.about_role }} />
                <div
                  style={{
                    fontFamily: 'Noto Sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '29px',
                    letterSpacing: '0em',
                    textAlign: 'justify',
                    color: '#3C4043'
                  }}
                > {parseHTML(data.about_role)}</div>
              ) : (
                <p
                  style={{
                    fontFamily: 'Noto Sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '29px',
                    letterSpacing: '0em',
                    textAlign: 'justify',
                    color: '#3C4043'
                  }}
                >
                  Are you passionate about healthcare technology and dedicated
                  to providing exceptional technical support? Join our dynamic
                  team as an IT Support Engineer at [Healthcare Software
                  Solutions Company]. As a pivotal member of our IT department,
                  you will play a crucial role in ensuring the seamless
                  operation of our cutting-edge healthcare software solutions.
                </p>
              )}
            </div>
          </div>

          <div className="mb-[46px]">
            <div className="role-head2 lg:text-[28px] md:text-[24px] text-[20px] text-[#08090A] font-medium"
              style={{
                //styleName: Header H3;
                fontFamily: 'Helvetica Neue-Medium',
                fontSize: '28px',
                fontWeight: '500',
                lineHeight: '42px',
                letterSpacing: '0em',
                textAlign: 'left',
              }}
            >
              Key Responsibilities
            </div>
            <div className="role-desc2 text-[#3C4043] font-normal md:text-[16px] text-[14px] pl-[10px]">
              <ul
                style={{
                  fontFamily: 'Noto Sans',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  textAlign: 'justify',
                  color: '#3C4043',
                  // color:'red'
                }}
              >
                {parseList(data?.requirement).map((item, index) => {
                  return <li className="mb-[10px]"
                  style={{
                    // listStyleType:'circle',
                  }}
                  >
                    <span style={{color:'#3C4043'}}>{`\u2022`}</span>
                    <span className="list-head"
                      style={{
                        fontFamily: 'Noto Sans',
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#3C4043',
                        marginLeft:'10px'
                      }}
                    >
                      {item.substring(0, item.indexOf(':') + 1)}
                    </span>
                    <span className="list-desc"
                      style={{
                        fontFamily: 'Noto Sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#3C4043'
                      }}
                    >
                      {item.substring(item.indexOf(':') + 1)}
                    </span>
                  </li>
                })}
                {/* <div className="prose" dangerouslySetInnerHTML={{ __html: data?.requirement }}
                  style={{
                    fontFamily: 'Noto Sans-Regular',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '24px',
                    letterSpacing: '0em',
                    textAlign: 'justify',
                    color: '#3C4043'
                  }}
                /> */}
                {/* <div className="prose" dangerouslySetInnerHTML={{ __html: data?.requirement }} /> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="min-w-[500px] flex justify-center items-center">
          <img src={resume2} className="w-[400px] h-[400px]" alt="resume" />
        </div>
      </div>
      {/* Applied job from */}

      <div className="divider-line w-[1320px] h-[1px] mt-[40px]" style={{ backgroundColor: '#EBEDF0' }}></div>

      <div className=" md:w-11/12 w-full flex justify-center items-center mt-[60px]">
        <JobApplyForm data={data} />
      </div>
    </div>
  );
};
