import { React, useEffect, useRef, useState } from "react";
import closeBtn from "../../assets/icon/close-btn.svg";
import supportModalImg from "../../assets/supportModal.png";
import { useGetSupportQuery } from "../../redux/features/client/clientApi";
import phone_i from "../../assets/support/phone.svg"
const SupportPopUp = ({ setIsSupportVisible, isSupportVisible }) => {
  const { data, loading, error } = useGetSupportQuery();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [complaintPortal, setComplaintPortal] = useState("");
  // support data
  const modalRef = useRef();

  useEffect(() => {
    if (data?.length > 0) {
      console.log(data);
      const filteroutEmail = data?.filter((item) => item.like.includes("@"));
      console.log(filteroutEmail);
      setEmail(filteroutEmail[0]);

      const filteroutPhone = data?.filter((item) => item.like.includes("+"));
      setPhone(filteroutPhone[0]);
      const filteroutComplaintPortal = data?.filter((item) =>
        item.like.includes("Support")
      );
      setComplaintPortal(filteroutComplaintPortal[0]);
      console.log(filteroutComplaintPortal);
      console.log(filteroutPhone);
    }
    },[data]);

  const handleOutsideClick = (event) => {
    if (
      !event.target?.matches("#support-button") &&
      !modalRef?.current?.contains(event.target)
    ) {
      setIsSupportVisible(false);
    }
  };

  useEffect(() => {
    if (isSupportVisible) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSupportVisible]);

  if (error) {
    return <div>Something went wrong</div>;
  }
  if (loading || !data) {
    return;
  }
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center support support-backdrop"
      style={{ zIndex: 999999 }}
      id="support-modal"
    >
      <div
        className="w-[376px] h-[388px] flex flex-col justify-start items-center bg-white p-4 support-card"
        ref={modalRef}
      >
        <div
          className="p-2 w-full flex justify-center items-center relative"
            style={{
              fontWeight: "900",
            }}
        >
          <span className="support-header"
            style={{
              fontFamily:'Helvetica Neue-Medium',
              fontSize: '20px',
              fontWeight: '500',
              lineHeight: '30px',
              letterSpacing: '0.02em',
              textAlign: 'left',
              // color:'red'
            }}
          >
            Need support? We’re here
          </span>

          <button
            type="button"
            className="end-0 absolute px-2"
            onClick={() => {
              setIsSupportVisible(false);
            }}
          >
            {/*  close-btn */}

            <img src={closeBtn} alt="" />
          </button>
        </div>

        <div className="w-full flex flex-col flex-1 flex-grow-1 justify-start items-center">
          <div className="flex flex-1 flex-grow-1">
            {/*  support vector */}
            <img
              src={supportModalImg}
              alt=""
              style={{
                maxWidth: "144px",
                maxHeight: "144px",
                border: "none",
              }}
            />
          </div>
          <hr className="w-full border-t-2 border-[#EBEDF0]" />

          <div className="w-full h-1/2  flex justify-around items-center">
            {/*  Email */}
            <div className="w-1/3 h-full flex flex-col justify-center items-center">
              <div
                className="w-[64px] h-[64px] rounded-full flex justify-center items-center border border-[#EAEFF2] "
                style={{
                  cursor: "pointer",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                {/* */}
                <a href={`mailto:${email.like}`}>
                  {" "}
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2795_9658)">
                      <path d="M24 0.5H0V24.5H24V0.5Z" fill="white" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.96802 4.5H18.032C18.4706 4.49999 18.8491 4.49998 19.1624 4.52135C19.4922 4.54386 19.8221 4.59336 20.1481 4.72836C20.8831 5.03284 21.4672 5.61687 21.7716 6.35195C21.9066 6.67788 21.9561 7.00779 21.9787 7.33762C22 7.65088 22 8.02936 22 8.46801V16.532C22 16.9706 22 17.3491 21.9787 17.6624C21.9561 17.9922 21.9066 18.3221 21.7716 18.6481C21.4672 19.3831 20.8831 19.9672 20.1481 20.2716C19.8221 20.4066 19.4922 20.4561 19.1624 20.4787C18.8491 20.5 18.4706 20.5 18.032 20.5H5.96801C5.52936 20.5 5.15088 20.5 4.83762 20.4787C4.50779 20.4561 4.17788 20.4066 3.85195 20.2716C3.11687 19.9672 2.53284 19.3831 2.22836 18.6481C2.09336 18.3221 2.04386 17.9922 2.02135 17.6624C1.99998 17.3491 1.99999 16.9706 2 16.532V8.46802C1.99999 8.02937 1.99998 7.65088 2.02135 7.33762C2.04386 7.00779 2.09336 6.67788 2.22836 6.35195C2.53284 5.61687 3.11687 5.03284 3.85195 4.72836C4.17788 4.59336 4.50779 4.54386 4.83762 4.52135C5.15088 4.49998 5.52937 4.49999 5.96802 4.5ZM4.31745 6.77777C4.68114 6.36214 5.3129 6.32002 5.72854 6.6837L11.3415 11.595C11.7185 11.9249 12.2815 11.9249 12.6585 11.595L18.2715 6.6837C18.6871 6.32002 19.3189 6.36214 19.6825 6.77777C20.0462 7.19341 20.0041 7.82517 19.5885 8.18885L13.9755 13.1002C12.8444 14.0899 11.1556 14.0899 10.0245 13.1002L4.41153 8.18885C3.99589 7.82517 3.95377 7.19341 4.31745 6.77777Z"
                        fill="#146DFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2795_9658">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <span className="h-10 support-options-text w-3/4 text-[#3C4043] text-center">
                Email
              </span>
            </div>

            {/*  call phone number */}
            <div className="w-1/3 h-full flex flex-col justify-center items-center ">
              <div
                className="w-[64px] h-[64px] rounded-full flex justify-center items-center border border-[#EAEFF2] "
                style={{
                  cursor: "pointer",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                <a href={`tel:${phone?.like}`}>
                  {" "}
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.0599 6.50187L20.2999 5.26187C20.5899 4.97187 20.5899 4.49187 20.2999 4.20188C20.0099 3.91188 19.5299 3.91188 19.2399 4.20188L17.9999 5.44187L16.7599 4.20188C16.4699 3.91188 15.9899 3.91188 15.6999 4.20188C15.4099 4.49187 15.4099 4.97187 15.6999 5.26187L16.9399 6.50187L15.6999 7.74186C15.4099 8.03187 15.4099 8.51188 15.6999 8.80188C15.8499 8.95188 16.0399 9.02188 16.2299 9.02188C16.4199 9.02188 16.6099 8.95188 16.7599 8.80188L17.9999 7.56187L19.2399 8.80188C19.3899 8.95188 19.5799 9.02188 19.7699 9.02188C19.9599 9.02188 20.1499 8.95188 20.2999 8.80188C20.5899 8.51188 20.5899 8.03187 20.2999 7.74186L19.0599 6.50187Z"
                      fill="#146DFA"
                    />
                    <path
                      d="M11.05 15.45L9.2 17.3C8.81 17.69 8.19 17.69 7.79 17.31C7.68 17.2 7.57 17.1 7.46 16.99C6.43 15.95 5.5 14.86 4.67 13.72C3.85 12.58 3.19 11.44 2.71 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C10.83 13.82 10.94 13.92 11.04 14.02C11.44 14.41 11.45 15.05 11.05 15.45Z"
                      fill="#146DFA"
                    />
                    <path
                      d="M21.9696 18.8291C21.9696 19.1091 21.9196 19.3991 21.8196 19.6791C21.7896 19.7591 21.7596 19.8391 21.7196 19.9191C21.5496 20.2791 21.3296 20.6191 21.0396 20.9391C20.5496 21.4791 20.0096 21.8691 19.3996 22.1191C19.3896 22.1191 19.3796 22.1291 19.3696 22.1291C18.7796 22.3691 18.1396 22.4991 17.4496 22.4991C16.4296 22.4991 15.3396 22.2591 14.1896 21.7691C13.0396 21.2791 11.8896 20.6191 10.7496 19.7891C10.3596 19.4991 9.96961 19.2091 9.59961 18.8991L12.8696 15.6291C13.1496 15.8391 13.3996 15.9991 13.6096 16.1091C13.6596 16.1291 13.7196 16.1591 13.7896 16.1891C13.8696 16.2191 13.9496 16.2291 14.0396 16.2291C14.2096 16.2291 14.3396 16.1691 14.4496 16.0591L15.2096 15.3091C15.4596 15.0591 15.6996 14.8691 15.9296 14.7491C16.1596 14.6091 16.3896 14.5391 16.6396 14.5391C16.8296 14.5391 17.0296 14.5791 17.2496 14.6691C17.4696 14.7591 17.6996 14.8891 17.9496 15.0591L21.2596 17.4091C21.5196 17.5891 21.6996 17.7991 21.8096 18.0491C21.9096 18.2991 21.9696 18.5491 21.9696 18.8291Z"
                      fill="#146DFA"
                    />
                  </svg>
                </a>
              </div>
              <a
                href={`tel:${phone?.like}`}
                className="h-10 support-options-text w-3/4 text-[#3C4043] text-center"
              >
                Call +91-8372919752
              </a>
            </div>

            {/*  complaint portal */}
            <div className="w-1/3 h-full flex flex-col justify-center items-center ">
              <div
                className="w-[64px] h-[64px] rounded-full flex justify-center items-center border border-[#EAEFF2] "
                style={{
                  cursor: "pointer",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.26148 20.3558C3.22289 18.6411 2.625 16.6312 2.625 14.4832C2.625 8.21436 7.71436 3.125 13.9832 3.125C20.2519 3.125 25.3413 8.21436 25.3413 14.4832C25.3413 20.7519 20.2519 25.8413 13.9832 25.8413C12.3258 25.8413 10.7511 25.4851 9.33086 24.8463L2.625 25.8413L4.26148 20.3558Z"
                    fill="#146DFA"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.3145 20.4692L1.78675 25.5915C1.701 25.8776 1.7675 26.1882 1.9635 26.414C2.1595 26.6406 2.45788 26.7509 2.75363 26.7071L9.21113 25.749C10.6768 26.3711 12.2894 26.7168 13.9834 26.7168C20.7349 26.7168 26.2168 21.2349 26.2168 14.4834C26.2168 7.73188 20.7349 2.25 13.9834 2.25C7.23187 2.25 1.75 7.73188 1.75 14.4834C1.75 16.6569 2.31788 18.6991 3.3145 20.4692ZM5.0995 20.6057C5.17038 20.3695 5.138 20.114 5.00938 19.9023C4.05125 18.3203 3.5 16.4653 3.5 14.4834C3.5 8.697 8.197 4 13.9834 4C19.7689 4 24.4668 8.697 24.4668 14.4834C24.4668 20.2689 19.7689 24.9668 13.9834 24.9668C12.4539 24.9668 11.0005 24.6386 9.68975 24.0489C9.5375 23.9797 9.36775 23.9561 9.20238 23.9806L3.85613 24.7743L5.0995 20.6057ZM14 18C14.483 18 14.875 18.392 14.875 18.875C14.875 19.358 14.483 19.75 14 19.75C13.517 19.75 13.125 19.358 13.125 18.875C13.125 18.392 13.517 18 14 18ZM12.5 9.5L13.125 16.25C13.125 16.733 13.517 17.125 14 17.125C14.483 17.125 14.875 16.733 14.875 16.25L15.5 9.5C15.5 9.017 14.483 8.5 14 8.5C13.517 8.5 12.5 9.017 12.5 9.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="h-10 support-options-text w-3/4 text-[#3C4043] text-center">
                Complaint Portal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPopUp;
