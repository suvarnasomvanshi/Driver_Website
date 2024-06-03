import React from "react";
import timer from "../../../assets/Group.png";
import location from "../../../assets/location-pin-svgrepo-com 1.png";
import money_bag from "../../../assets/money-bag-svgrepo-com 1 (2).png";

import { Link } from "react-router-dom";
const CareersCard = ({ d, index, isExpanded, setIsExpanded, id, setId }) => {
  

  return (
    <div
      key={index}
      className={`lg:max-w-[872px] w-full my-3 px-2 py-2 bg-gray-100 flex lg:flex-row flex-col justify-between items-center rounded-[6px] ${
        isExpanded && id === d.id ? "h-fit" : "h-auto"
      }`}
    >
      <div
        className={`md:w-3/4 w-full h-full flex  flex-col justify-start items-start px-2`}
      >
        <div className='opening_list_header my-3'>{d.role}</div>
        <div className={`w-full flex justify-start items-center`}>
          {/*  details */}
          <div className='me-[24px] flex justify-center items-center '>
            <img src={money_bag} alt='details_icon' className='mx-1' />
            <div className='md:text-[16px] text-[14px] font-normal text-[#3C4043]'>
              {d.time}
            </div>
          </div>
          {/*  details */}
          <div className='me-[24px] flex justify-center items-center '>
            <img src={location} alt='details_icon' className='mx-1' />
            <div className='md:text-[16px] text-[14px] font-normal text-[#3C4043]'>
              {d.location}
            </div>
          </div>
          {/*  details */}
          <div className='me-[24px] flex justify-center items-center '>
            <img src={timer} alt='details_icon' className='mx-1' />
            <div className='md:text-[16px] text-[14px] font-normal text-[#3C4043]'>
              INR {d.package}
            </div>
          </div>
        </div>

        {isExpanded && id === d.id ? (
          <div
            className='
                  w-full flex-grow-1 justify-center items-center p-[16px]  '
          >
            {d?.additionalData?.map((elem, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-grow-1 flex-col justify-center items-start  '
                >
                  <div className='font-medium text-[16px] text-[#000]'>
                    {elem.title}
                  </div>
                  <div className='text-[#6D747A] text-[16px] font-normal'>
                    {elem.content}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>

      <div
        className={`flex-grow-1 ${
          isExpanded && d.id === id ? "h-full" : "h-[120px]"
        } flex lg:justify-center justify-start lg:items-end p-2  `}
      >
        <Link
          to={`/careers/1`}
          className='bg-[#146DFA] text-white w-[118px] h-[48px] mx-1 text-[16px] rounded-[6px] flex justify-center items-center'
        >
          Apply
        </Link>
        <button
          type='button'
          className='w-[118px] h-[48px] bg-white text-[#146DFA] rounded-[6px] text-[16px] border-[#146DFA]'
          onClick={() => {
            console.log(id, "locale-id", d.id);
            setId(d.id);
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Less Info" : "More Info"}
        </button>
      </div>
    </div>
  );
};

export default CareersCard;
