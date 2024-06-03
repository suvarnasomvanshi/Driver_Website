import "../styles/integration.css";

import React, { useState } from "react";

import { IntegrationAppcard } from "../Components/Integrations/IntegrationAppcard/IntegrationAppcard";
import SmallGreenWave from "../Components/SmallGreenWave";
import { useGetIntegrationQuery } from "../redux/features/product/productApi";

export const Integration = () => {
  const { data: intData, loading, error } = useGetIntegrationQuery();
  const [isSticky, setIsSticky] = useState(false);
  const [category, setCategory] = useState("All");
  const [filteredData, setFilteredData] = useState([]);



  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     const secondDiv = document.getElementById("stickToTopRef"); // Replace with your actual ID
  //     const secondDivOffset = secondDiv.offsetTop;

  //     if (offset > secondDivOffset) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // useEffect(() => {
  //   if (category !== 'All' && category!=='') {
  //     const selectedData = data.filter((item) => item.integration_category === category);
  //     setFilteredData(selectedData)
  //   }
  // },[data,category]);
  if (error) {
    return <div>Something went wrong</div>;
  }
  if (loading || !intData) {
    return <div>Loading</div>;
  }
  const { data } = intData;

  console.log(data);
  return (
    <>
      <div className="max-w-screen flex flex-col justify-center items-start">
        <SmallGreenWave
          heading="Supercharge your business with integrations."
          subheading="Integrate with your favourite third-party apps & medical devices for seamless operations & patient care."
        />

        <div
          className={`w-screen flex flex-col justify-center items-center my-[120px] ${isSticky ? "sticky top-0" : ""
            }`}
            style={{
              backgroundColor: '#F9F9F9',
              // border: '10px solid black'
            }}
        >
          <div
            className={`lg:w-11/12 md:w-11/12 w-full relative flex justify-between items-start p-4 pt-[30px]`}
            id="stickToTopRef"
            // style={{backgroundColor:'red'}}
          >
            <div className="w-full h-full flex md:flex-row flex-col md:justify-between justify-between items-start relative overflow-y-scroll overflow-x-hidden removeDefaultScrollStyle"
            >
              {/*  filter by category */}
              <div
                className={`min-w-[312px] h-[483px] flex flex-col justify-center items-center md:sticky top-0 mt-[30px]`}
              >
                <div className="text-[18px] text-[#6D747A] font-medium text-left w-full justify-start items-center mb-[16px] p-2"
                  style={{
                    fontFamily: 'Helvetica Neue-Medium',
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '27px',
                    letterSpacing: '0.02em',
                    textAlign: 'left',
                  }}
                >
                  FILTER BY CATEGORY
                </div>

                <div className="w-full h-full flex flex-col justify-center items-start list-unstyled">
                  <li className={`w-full  list-style-none`} style={{ listStyleType: 'none' }}>
                    <a
                      href={`#` + "Accounting/ERP/CRM"}
                      className={`text-decoration-none w-full h-full flex justify-start items-center p-2   text-[16px] mb-[10px] ${category === "All"
                          ? "bg-[#EBEDF0] rounded-[5px] font-medium text-black"
                          : "font-normal text-[#3C4043]"
                        }`}
                      onClick={() => {
                        setCategory("All");
                      }}
                      style={{
                        fontWeight: category === "All" ? "550" : "400"
                      }}
                    >
                      All
                    </a>
                  </li>

                  {data?.map((d, index) => {
                    return (
                      <li key={index} className={`w-full  list-style-none`} style={{
                        listStyleType: 'none',
                        fontFamily: 'Noto Sans-Medium',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}>
                        <a
                          href={`#` + d.category_name}
                          className={`text-decoration-none w-full h-full flex justify-start items-center p-2   text-[16px] mb-[10px] ${category === d.category_name
                              ? "bg-[#EBEDF0] rounded-[5px] font-medium text-black"
                              : "font-normal text-[#3C4043]"
                            }`}
                          onClick={() => {
                            setCategory(d.category_name);
                          }}
                          style={{
                            fontWeight: category === d.category_name ? "550" : "400"
                          }}
                        >
                          {d.category_name}
                        </a>
                      </li>
                    );
                  })}
                </div>
              </div>

              {/* cards  */}
              <div className="h-auto flex flex-grow-1 flex-col justify-start items-center ml-[50px]"
                // style={{backgroundColor:'red'}}
              >
                {data?.map((item, i) => (
                  <div
                    className="w-12/12 flex flex-col justify-center items-start"
                    id={item.category_name}
                    key={i}
                  >
                    <div className="text-[28px] text-[#2B6997] font-medium mb-4"
                      style={{
                        fontFamily: 'Helvetica Neue-Medium',
                        fontSize: '28px',
                        fontWeight: '500',
                        lineHeight: '42px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}
                    >
                      {item?.category_name}
                    </div>
                    <div className="w-full flex flex-grow flex-wrap justify-start items-start ">
                      {/* <IntegrationAppcard property1={data.title} /> */}
                      {item.integration_set.map((int, i) => (
                        <IntegrationAppcard data={int} key={i} />
                      ))}

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
