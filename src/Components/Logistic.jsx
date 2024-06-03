import React, { useState } from "react";
import "../styles/Metricstyle.css";

const Logistic = ({models}) => {
    
  const [isMouseOverLogistic, setIsMouseOverLogistic] = useState(false);
  const [Hoverid, setId] = useState(0);
  console.log(models);
  return (
    <div className="w-screen mt-[30px] relative flex flex-col justify-center items-center">
      <div className="text-center mb-[10px]">
        <div className="md:text-[36px] text-[30px] text-[#08090A] font-bold mb-[16px] text-[#3C4043]">
          23+ years of excellence
        </div>
        <p className="w-screen text-center md:text-[24px] text-[20px] font-normal text-[#6D747A]">
          in delivering innovative solutions to 1000+ healthcare providers
        </p>
      </div>
      <div className="lg:w-10/12 md:w-11/12 w-full flex items-center justify-center select-none">
        <div className="w-[968px] md:h-[476px] flex flex-row flex-wrap justify-evenly items-center">
          {/*  1st card */}
          {models.map(({ title, number, id }, index) => (
            <div
              className="md:w-[352px] w-[46vw] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2 hover:text-[#146DFA]"
              onMouseOver={() => {
                setIsMouseOverLogistic(true);
                setId(id);
              }}
              onMouseLeave={() => {
                setIsMouseOverLogistic(false);
                setId(0);
              }}
            >
              <div className="w-full flex flex-col justify-center items-start mb-[36px]">
                <div
                  className={`font-medium md:text-[64px] text-[48px] text-[#001E41]"
                  `}
                  style={{
                    fontFamily: 'Helvetica Neue-Medium',
                    fontSize: '64px',
                    fontWeight: '500',
                    lineHeight: '96px',
                    letterSpacing: '0.02em',
                    textAlign: 'left',
                    color:isMouseOverLogistic && Hoverid==id ? '#146DFA' :'#001E41',
                    backgroundColor: isMouseOverLogistic && Hoverid==id ?  'background: linear-gradient(90.95deg, rgba(53, 149, 76, 0.1) 19.78%, rgba(82, 111, 133, 0.1) 78.88%);' : "",
                    transition:'0.2s linear'
                  }}
                >
                  {Math.abs(Number(number)) >= 1.0e6
                    ? Math.round(Math.abs(Number(number))) / 1.0e6 + "M +"
                    : number+'+'}
                </div>
                <div className="md:text-[20px] text-[16px] font-normal text-[#6D747A]"
                style={{
                  //styleName: Metric_Descriptor_2;
                  fontFamily: 'Noto Sans',
                  fontSize: '20px',
                  fontWeight: '400',
                  lineHeight: '30px',
                  letterSpacing: '0.01em',
                  textAlign: 'left',
                }}
                >
                  {title}
                </div>
              </div>
              {index === 0 && (
                <svg
                  width="352"
                  height="6"
                  viewBox="0 0 352 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="352" height="5" fill="#67C380" />
                </svg>
              )}
              {index === 1 && (
                <svg
                  width="352"
                  height="6"
                  viewBox="0 0 352 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="352" height="5" fill="#FF7878" />
                </svg>
              )}
              {index === 2 && (
                <svg
                  width="352"
                  height="6"
                  viewBox="0 0 352 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="352" height="5" fill="#391E66" />
                </svg>
              )}
              {index === 3 && (
                <svg
                  width="352"
                  height="6"
                  viewBox="0 0 352 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="352" height="5" fill="#2CA49C" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logistic;
