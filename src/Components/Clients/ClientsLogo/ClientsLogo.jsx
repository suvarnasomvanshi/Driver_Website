import React from 'react';

const ClientsLogo = ({
    memoizedClientsReview,
    reviewIndex,
    scrollTo,
    scrollableReviewRef,
    LeftIcon,
    RightIcon,
    
}) => {
    return (
      <div
        className="w-screen h-screen flex justify-center items-center bg-white relative"
        id="testimonial"
      >
        <div className="lg:w-10/12 md:w-11/12 w-full md:h-full min-h-full flex md:flex-row flex-col justify-start items-center relative bg-white">
          <div className="md:w-1/3 w-full md:h-5/6  text-black flex justify-start items-start">
            <div className="md:w-3/4 w-full px-2 lg:text-[48px] md:text-[40px] text-[32px] font-medium">
              Here’s what clients have to say
            </div>
          </div>

          <div className="md:w-2/3 w-full h-5/6 flex flex-col justify-end items-end ">
            <div className="w-full flex flex-grow-1 flex-row justify-end items-center">
              <div
                className="md:w-[860px] w-[500px] h-[700px] flex md:justify-start md:items-start justify-start items-start overflow-x-scroll overflow-y-hidden scroll-smooth removeScrollDefaultStyling md:px-0 px-2"
                id="testimonials"
                ref={scrollableReviewRef}
              >
                <div className="w-[3408px] h-[700px] flex justify-start items-start scroll-smooth removeScrollDefaultStyling">
                  {memoizedClientsReview?.map((d, index) => {
                    return (
                      <div
                        key={index}
                        className="h-[611px] rounded-xl m-2 min-w-[426px] overflow-hidden relative "
                      >
                        <div className="h-[50%] w-full flex justify-center items-center relative overflow-hidden bg-[#F1F6F9] ">
                          <img
                            src={d.client_profile}
                            alt="profile"
                            className="h-full w-auto relative"
                          />
                          <img
                            src={d.logo}
                            alt="logo"
                            className="absolute bottom-0 end-0 z-10 m-4"
                          />
                        </div>
                        <div className="h-[50%] w-full flex flex-col justify-center items-start pt-[26px] px-1">
                          <div className="w-full flex justify-start items-start relative">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="w-[24px] h-[24px]"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_2637_22361)">
                                <path
                                  d="M6.64424 3.29933C7.3053 2.80354 8.24311 2.9375 8.7389 3.59855C9.23473 4.25961 9.10067 5.19742 8.43968 5.69323C6.09969 7.44824 4.75764 9.15457 3.99167 10.6451C4.40915 10.5379 4.84675 10.4809 5.29766 10.4809C8.18979 10.4809 10.5343 12.8255 10.5343 15.7176C10.5343 18.6097 8.18979 20.9542 5.29766 20.9542C2.43448 20.9542 0.107983 18.6564 0.0617064 15.8042C-0.0732497 14.51 -0.0535452 12.6009 0.821126 10.3967C1.71501 8.14416 3.46097 5.68681 6.64424 3.29933ZM20.1099 3.29933C20.7709 2.80354 21.7087 2.9375 22.2046 3.59855C22.7004 4.25961 22.5664 5.19742 21.9053 5.69323C19.5653 7.44824 18.2234 9.15457 17.4573 10.6451C17.8748 10.5379 18.3124 10.4809 18.7633 10.4809C21.6555 10.4809 24 12.8255 24 15.7176C24 18.6097 21.6555 20.9542 18.7633 20.9542C15.9001 20.9542 13.5737 18.6564 13.5274 15.8042C13.3925 14.51 13.4121 12.6009 14.2868 10.3967C15.1807 8.14416 16.9266 5.68681 20.1099 3.29933Z"
                                  fill="#6D747A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2637_22361">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="text-[#3C4043] h-1/2 lg:text-[16px] md:text-[16px] text-[14px] mb-4 mt-3">
                            {d.client_review}
                          </div>
                          <div className="client-name">{d.client_name}</div>
                          <div className="client-org-location">
                            {d.organization_name} {d.location}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:w-[862px] w-full flex justify-between items-center mx-2 md:px-0 px-2">
              <button
                type="button"
                onClick={(e) => {
                  scrollTo("left", 850, scrollableReviewRef);
                }}
              >
                <LeftIcon />
              </button>
              <div className="sub-header-4  md:block hidden" id="pageIndicator">
                {reviewIndex}/4
              </div>
              <button
                type="button"
                onClick={(e) => {
                  scrollTo("right", 850, scrollableReviewRef);
                }}
              >
                <RightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ClientsLogo;