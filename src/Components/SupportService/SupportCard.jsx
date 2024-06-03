import React from "react";
import { img_url } from "../../utils/utils";
import callIcon from "../../assets/Modified_icons/call_icon.svg";
import chatIcon from "../../assets/Modified_icons/chat_icon.svg";
import mailIcon from "../../assets/Modified_icons/mail_icon.svg";
import supportIcon from "../../assets/Modified_icons/support_icon.svg";

const SupportCard = ({ item, setIsSupportVisible }) => {
  return (
    <div className="px-[24px] py-[36px] w-[312px] h-[400px] rounded-lg border-2 border-solid border-[#F1F7F9] ">
      {/* <img src={img_url + item?.image} alt="icon-img" /> */}
      {/* <img src={callIcon} alt="icon-img" /> */}
      {item?.like.includes("Support") ? (
          <img src={supportIcon} alt="icon-img" title="Support Portal"/>
        ) : item?.like.includes("@") ? (
          <img src={mailIcon} alt="icon-img" title="Mail Us" />
        ) : item?.like.includes("+") ? (
          <img src={callIcon} alt="icon-img" title="Call Us"/>
        ) : (
          <img src={chatIcon} alt="icon-img" title="Chat with Us"/>
        )}
      <p className="text-[24px] text-[#08090A] font-semibold mt-[16px]"
      style={{
      // fontFamily: 'Helvetica Neue',
      fontSize: '24px',
      lineHeight: '29px',
      letterSpacing: '0.01em',
      textAlign: 'left',
      }}
      >
        {item?.title}
      </p>
      <p className="text-[16px] text-[#6D747A] font-medium mt-[24px]">
        {item?.description === 'Coming soon...' ? "" : `${item?.description}` }
        {/* {item?.description} */}
      </p>
      <p className="text-[16px] text-[#6D747A] font-medium mt-[14px]" style={{width:'fit-content'}}>
        {/* {item?.title} */}
        {item?.like.includes("Support") ? (
          <></>
        ) : item?.like.includes("@") ? (
          <>
          Reach us at
          </>
        ) : item?.like.includes("+") ? (
          <span style={{
            width:'fit-content'
          }}>Call us on</span>
        ) : (
          <></>
        )}
      </p>

      {/* -------------- */}
      <div className="d-flex items-center">
        {item?.like.includes("Support") ? (
          <button
            type="button"
            className="text-[16px] text-[#146DFA] font-semibold"
            onClick={() => {
              setIsSupportVisible(true);
            }}
          >
            {/*  close-btn */}
            {item?.like}
          </button>
        ) : item?.like.includes("@") ? (
          <a
            href={`mailto:${item?.like}`}
            className="text-[16px] text-[#146DFA] font-semibold "
          >
            {item?.like}
          </a>
        ) : item?.like.includes("+") ? (
          <a
            href={`tel:${item?.like}`}
            className="text-[16px] text-[#146DFA] font-semibold "
          >
            {item?.like}
          </a>
        ) : (
          <p className="text-[16px] text-[#146DFA] font-semibold ">
            {item?.like}
          </p>
        )}

        
        <p className="text-[16px] text-[#146DFA] font-semibold ">
          {item?.number}
        </p>
      </div>
    </div>
  );
};

export default SupportCard;
