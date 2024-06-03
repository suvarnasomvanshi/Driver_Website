import React from "react";
import smallBlueWave from "../assets/smallBlueWave.png";

const SmallBlueWave = (props) => {
  return (
    <>
      {props.carrers ? (
        <div className="w-[100vw] h-[300px] mx-auto flex justify-center items-center relative  z-10">
          <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center select-none ">
            <img
              src={smallBlueWave}
              className="h-full absolute top-0 left-0 select-none"
              alt="vector"
            />
          </div>
          <div className="lg:w-10/12 md:w-11/12 relative w-full h-full flex flex-col justify-center items-center z-50 lg:mb-[40px] md:mb-[80px] mb-[120px] gap-2">
            <div className="w-full lg:text-[48px] md:text-[40px] text-[32px] font-bold text-center flex justify-center items-center text-white"
              style={{
                fontFamily: 'Helvetica Neue-Bold',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '72px',
                letterSpacing: '0em',
                textAlign: 'center',
              }}
            >
              {props.role}
            </div>
            <div className="lg:w-10/12 md:w-11/12 w-full lg:text-[24px] md:text-[18px] text-[14px] font-normal text-center flex justify-center items-center text-white ">
              <div className="max-w-[500px] w-full flex justify-around items-center text-white"
              style={{
                fontFamily: 'Helvetica Neue-Medium',
                fontSize: '20px',
                fontWeight: '400',
                lineHeight: '30px',
                letterSpacing: '0.02em',
                textAlign: 'center',
              }}
              >
                <div className=" flex w-full items-center gap-3 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.27259 4.13189 7.25637 5.15147 7.25179 6.02566C5.22954 6.09171 4.01536 6.32778 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34314 22 6.22876 22 9.99998 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9846 6.32778 18.7705 6.09171 16.7482 6.02566C16.7436 5.15147 16.7274 4.13189 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.2479 6.00188C15.2434 5.15523 15.229 4.24407 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.771 4.24407 8.75661 5.15523 8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="md:text-[16px] text-[14px] font-normal ms-1">
                    {props.time}
                  </p>
                </div>

                <div className=" flex w-full items-center gap-3 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 0C7.02975 0 3 4.02975 3 9C3 10.9571 3.64163 12.753 4.70813 14.2238C4.72725 14.259 4.73025 14.2984 4.752 14.3321L10.752 23.3321C11.0303 23.7495 11.499 24 12 24C12.501 24 12.9697 23.7495 13.248 23.3321L19.248 14.3321C19.2701 14.2984 19.2727 14.259 19.2919 14.2238C20.3584 12.753 21 10.9571 21 9C21 4.02975 16.9703 0 12 0ZM12 12C10.3432 12 9 10.6567 9 9C9 7.34325 10.3432 6 12 6C13.6567 6 15 7.34325 15 9C15 10.6567 13.6567 12 12 12Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="md:text-[16px]  text-[14px] font-normal ms-1">
                    {props.location}
                  </p>
                </div>

                <div className="flex w-full items-center gap-3 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="24"
                      viewBox="0 0 18 24"
                      fill="none"
                    >
                      <path
                        d="M14.0261 1.98544C13.9814 2.28187 13.7906 2.59852 13.4414 2.88277C12.2964 3.8085 11.9147 4.57181 11.8173 4.81139C11.797 4.86417 11.7889 4.89258 11.7889 4.89258H6.21014C6.21014 4.89258 6.20203 4.86417 6.18173 4.81139C6.08428 4.57181 5.70262 3.8085 4.55766 2.88277C4.54547 2.87466 4.53736 2.8665 4.52925 2.85839C3.23808 1.77834 4.26534 0.320766 6.21019 0.864797C6.30356 0.889172 6.38883 0.909469 6.46598 0.921656C7.50942 1.07597 7.23741 0 8.99953 0C10.8957 0 10.4369 1.24242 11.7889 0.864844C12.1625 0.759281 12.4995 0.730875 12.7959 0.75525C13.6444 0.832359 14.1316 1.37236 14.0261 1.98544Z"
                        fill="white"
                      />
                      <path
                        d="M17.7697 15.2309C17.7697 20.0747 13.8434 24.001 8.99962 24.001C7.74098 24.001 6.54318 23.7371 5.46313 23.2539C3.46551 22.3769 1.8577 20.769 0.976586 18.7714C0.497477 17.6873 0.229492 16.4896 0.229492 15.2309C0.229492 10.6632 4.64296 7.17544 5.99905 5.93709C6.08024 5.86805 6.15337 5.79905 6.21018 5.74219H11.7889C11.8458 5.79905 11.9189 5.86805 12 5.93709C13.3562 7.17544 17.7697 10.6631 17.7697 15.2309Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="md:text-[16px] text-[14px] font-normal">
                    {props.package}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100vw] h-[500px] mx-auto flex justify-center items-center relative mt-[60px] z-10"
          style={{
            height: (props.heading === "Terms of Use" || props.heading === "Privacy Policy") ? "600px" : "500px",
          }}
        >
          <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center select-none "
            style={{
              height: (props.heading === "Terms of Use" || props.heading === "Privacy Policy") ? "600px" : "500px",
            }}
          >
            <img
              src={smallBlueWave}
              className="h-full absolute top-0 left-0 select-none"
              alt="vector"
              style={{
                // height: props.heading === "How our story began" ? "550px" : "500px"
                height: (props.heading === "Terms of Use" || props.heading === "Privacy Policy") ? "300px" : (props.heading === "How our story began" ? "550px" : "500px"),
              }}
            />
          </div>

          <div className="lg:w-10/12 md:w-11/12 relative w-full h-full flex flex-col justify-center items-center z-50 lg:mb-[40px] md:mb-[80px] mb-[110px]">
            <div className="w-full lg:text-[48px] md:text-[40px] text-[32px] font-bold text-center flex justify-center items-center text-white" id="heading_abt"
              style={{
                // fontFamily:'Helvetica Neue-Medium'
                marginTop: (props.heading === "Terms of Use" || props.heading === "Privacy Policy") ? "-300px" : "",
              }}
            >
              {props.heading}
            </div>
            <div className="lg:w-10/12 md:w-11/12 w-full lg::text-[24px] md:text-[18px] text-[14px] font-normal text-center flex justify-center items-center text-white" id="subheading_abt"
              style={{
                fontFamily: 'Noto Sans',
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '36px',
                letterSpacing: '0.01em',
                textAlign: 'justify',
                width: props.heading === "Key Modules" ? "800px" : "1066px",
              }}
            >
              {props.subheading}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmallBlueWave;