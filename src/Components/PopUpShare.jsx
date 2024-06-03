import { React, useRef, useEffect, useState } from "react";
import toast, { useToaster } from "react-hot-toast";
import closeBtn from "../assets/icon/close-btn.svg";
import supportImg from "../assets/support.png";
import shareModalImg from "../assets/blogs/pop-up.svg"
import BlogShare from "./BlogShare/BlogShare";
import copyIcon from "../assets/icon/copyIcon.svg";
import fbIcon from "../assets/blogs/fb-blue.svg";
import linkedin from "../assets/icon/linkedin.svg";
import twitter from "../assets/icon/twitter.svg";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";
import link_blue from "../assets/icon/link_blue.svg";
import linkedin_blue from "../assets/icon/linkedin_blue.svg";
import twitter_blue from "../assets/icon/twitter_blue.svg";

const PopUpShare = ({ setpopupVisible, isPopupVsible, url, data }) => {
  // document.addEventListener('click',function(event){
  //   if (!event.target.matches("#support-button") && event.target.matches("#support-modal")) {
  //     console.log(event.target)
  //     setpopupVisible(false)
  //   }
  // })
  const [copied, setCopied] = useState(false);

  const modalRef = useRef();

  const handleCopy = () => () => {
    setCopied(true);
    toast("Copied");
  };

  // const handleOutsideClick = (event) => {
  //   if (
  //     !event.target.matches("#support-button") &&
  //     !modalRef.current.contains(event.target)
  //   ) {
  //     setpopupVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isPopupVsible) {
  //     document.addEventListener("click", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [isPopupVsible]);

  const handleOutsideClick = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target)
    ) {
      setpopupVisible(false);
    }
  };

  // useEffect(() => {
  //   if (isPopupVsible) {
  //     document.addEventListener("click", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [isPopupVsible]);

  console.log("Inside modal")
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center support support-backdrop"
      style={{ zIndex: 999999 }}
      id="support-modal"
    >
      <div className="w-[376px] h-[388px] flex flex-col justify-start items-center bg-white p-4 support-card" ref={modalRef}>
        <div className="p-2 w-full flex justify-center items-center relative"
          ref={modalRef}
          style={{
            fontWeight: '900',
          }}
        >
          <span className="support-header font-medium"
          style={{
            //styleName: Sub-Header 2;
            fontFamily: 'Helvetica Neue-Medium',
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '30px',
            letterSpacing: '0.02em',
            textAlign: 'center',

          }}
          >
            Share via
          </span>

          <button
            type="button"
            className="end-0 absolute px-2"
            onClick={() => {
              setpopupVisible(false);
            }}
          >
            {/*  close-btn */}

            <img src={closeBtn} alt="" />
          </button>
        </div>

        <div className="w-full flex flex-col flex-1 flex-grow-1 justify-start items-center">
          <div className="flex flex-1 flex-grow-1">
            {/*  support vector */}
            <img src={shareModalImg} alt=""
              style={{
                maxWidth: '144px',
                maxHeight: '144px',
                border: 'none'
              }}
            />
          </div>
          <hr className="w-full border-t-2 border-[#EBEDF0]" />

          <div className="w-full h-1/2  flex justify-between items-center">
            <FacebookShareButton url={url} quote={data?.title}>
              <div className=""
              style={{color:'#3C4043'}}
              >
                <div className="flex flex-col justify-center items-center"
                  style={{
                    border: '1px solid #EAEFF2',
                    height: '64px',
                    width: '64px',
                    borderRadius: '50%',
                    justifyContent: 'center'
                  }}
                >
                  <button type="button" className="mx-2" >
                    <img src={fbIcon} alt="" />
                  </button>
                </div>
                <span className="flex justify-center text-[#3C4043]" style={{color:'#3C4043'}}>Facebook</span>
              </div>
            </FacebookShareButton>
            <TwitterShareButton url={url} quote={data?.title}>
            <div className="" 
              style={{color:'#3C4043'}}
            >
                <div className="flex flex-col justify-center items-center"
                  style={{
                    border: '1px solid #EAEFF2',
                    height: '64px',
                    width: '64px',
                    borderRadius: '50%',
                    justifyContent: 'center'
                  }}
                >
                  <button type="button" className="mx-2" >
                    <img src={twitter_blue} alt="" />
                  </button>
                </div>
                <span className="flex justify-center">X</span>
              </div>
            </TwitterShareButton>
            <LinkedinShareButton url={url} quote={data?.title}>
            <div className="flex-col items-between"
              style={{
                color:'#3C4043',
                maxHeight:'94px',
                maxWidth:'72px',
                height:'100%',
                width:'100%'
              }}
            >
                <div className="flex flex-col justify-center items-center"
                  style={{
                    border: '1px solid #EAEFF2',
                    height: '64px',
                    width: '64px',
                    borderRadius: '50%',
                    justifyContent: 'center'
                  }}
                >
                  <button type="button" className="mx-2" >
                    <img src={linkedin_blue} alt="" />
                  </button>
                </div>
                <span className="flex justify-center">Linkedin</span>
              </div>
            </LinkedinShareButton>
            <CopyToClipboard text={url} onCopy={handleCopy()}>
            <div className=""
              style={{color:'#3C4043'}}
            >
                <div className="flex flex-col justify-center items-center"
                  style={{
                    border: '1px solid #EAEFF2',
                    height: '64px',
                    width: '64px',
                    borderRadius: '50%',
                    justifyContent: 'center'
                  }}
                >
                  <button type="button" className="mx-2" >
                    <img src={link_blue} alt="" />
                  </button>
                </div>
                <span className="flex justify-center">Link</span>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpShare;