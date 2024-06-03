import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import KeyModules from "../Components/KeyModules/KeyModules";
import { ProductsPre } from "../Components/ProductsPre";
import LoadingSpinner from "../Components/common/LoadingSpiner";
// import vector_products from "../VectorDMS.png";

// conflict below
import module_image_even from "../assets/Product_Module_Image (1).png";
import module_image_odd from "../assets/Product_Module_Image.png";
import pd_big_bg from "../assets/pd_big_bg.png";
import pd_md_bg from "../assets/pd_md_bg.png";
import pd_sm_bg from "../assets/pd_sm_bg.png";
// import pd_sm_bg from "../assets/pd_sm_bgCopy.png";

// conflicts end here
import { useGetSingleProductQuery } from "../redux/features/product/productApi";
import useWindowDimensions from "../utils/windowDimension";

const Products = () => {
  const [laptop, setLaptop] = React.useState(false);
  var { type } = useParams();
  const { width, height } = useWindowDimensions();
  const [even, setEven] = React.useState(false);
  const [possitionedData, setPossitionedData] = React.useState([]);
  const url = useParams();
  const { data, loading, error } = useGetSingleProductQuery(url.type);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    if (width <= 136 && width >= 1024 && height <= 769) {
      setLaptop(true);
    } else {
      setLaptop(false);
    }
  }, [width, height]);

  // sort products as per position id order
  useEffect(() => {
    if (data?.sub_products?.length > 0) {
      // Create a copy of the sub_products array
      const sortedData = [...data.sub_products];

      // Sort the copied array based on position_id
      sortedData.sort(
        (a, b) => parseInt(a.position_id) - parseInt(b.position_id)
      );

      // Update the state with sorted data
      setProducts(sortedData);
    }
  }, [data]);

  // Ensure products state is updated before proceeding


  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  if (loading || !data || products.length === 0) {
    return <LoadingSpinner />;
  }
  console.log("products", products);

  // function to detect even and odd

  return (
    <div className="relative w-screen flex flex-col justify-start items-start ">
      <ProductsPre data={data} />
      <div
        className={`w-full min-h-fit relative flex justify-center items-center overflow-hidden`}
        style={{
          backgroundImage: `url(${data.length > 6
              ? pd_big_bg
              : data.length < 6 && data.length > 1
                ? pd_md_bg
                : pd_sm_bg
            })`,
          backgroundRepeat: "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // backgroundColor:'#000000ff'
        }}
      >
        <div className="min-h-fit lg:w-full md:px-[60px] flex flex-col items-center mt-[100px] z-30 pb-20">
          {products?.map((d, index) => {
            return (
              <div
                key={index}
                className={`w-[100%] h-[480px] flex items-center my-[32px] ${index === 1 ||
                    index === 3 ||
                    index === 5 ||
                    index === 7 ||
                    index === 9 ||
                    index === 11 ||
                    index === 13
                    ? "justify-end"
                    : "justify-start"
                  }`}
                style={{
                  // backgroundColor:'red'
                }}
              >
                <div
                  className="md:w-[1096px] h-[480px] w-full h-fit flex justify-center items-center relative bg-white"
                  style={{
                    "box-shadow": "0px 4px 24px 2px rgba(0, 0, 0, 0.15)",
                    maxHeight: "480px",
                    height: "100%",
                  }}
                >
                  {/* left side text */}
                  <div className="md:w-2/3 flex flex-col justify-center items-center pl-[10px]"
                    style={{
                      // backgroundColor:'red',
                      height: '318px'
                    }}
                  >
                    {/* main heading */}
                    <div className="text-[#2B6997] font-bold lg:text-[36px] md:text-[28px] text-[22px] text-left w-11/12 mb-10"
                      style={{
                        //styleName: Header H1;
                        fontFamily: 'Helvetica Neue-Bold',
                        fontSize: '36px',
                        fontWeight: '700',
                        lineHeight: '54px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                      }}
                    >
                      {d.title}
                    </div>
                    {/* points under heading */}
                    <div className="sub-points w-11/12 flex flex-col justify-start items-between mb-1">
                      {d?.sub_product_points?.map((elem, indx) => {
                        return (
                          <div
                            key={indx}
                            className="w-11/12 flex justify-start items-start mb-1"
                            style={{
                              fontFamily: "Noto Sans",
                              fontSize: "16px",
                              fontWeight: "400",
                              lineHeight: "24px",
                              letterSpacing: "0em",
                              textAlign: "left",
                              color: "#3C4043",
                              marginBottom: "2px",
                            }}
                          >
                            <div className="md:mr-3 mr-1 w-[20px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                              >
                                <path
                                  d="M8.6 15.0219L15.65 7.97187L14.25 6.57187L8.6 12.2219L5.75 9.37187L4.35 10.7719L8.6 15.0219ZM10 20.4219C8.61667 20.4219 7.31667 20.1592 6.1 19.6339C4.88333 19.1085 3.825 18.3962 2.925 17.4969C2.025 16.5969 1.31267 15.5385 0.788 14.3219C0.263333 13.1052 0.000666667 11.8052 0 10.4219C0 9.03854 0.262667 7.73854 0.788 6.52187C1.31333 5.30521 2.02567 4.24687 2.925 3.34687C3.825 2.44687 4.88333 1.73454 6.1 1.20987C7.31667 0.685208 8.61667 0.422542 10 0.421875C11.3833 0.421875 12.6833 0.684542 13.9 1.20987C15.1167 1.73521 16.175 2.44754 17.075 3.34687C17.975 4.24687 18.6877 5.30521 19.213 6.52187C19.7383 7.73854 20.0007 9.03854 20 10.4219C20 11.8052 19.7373 13.1052 19.212 14.3219C18.6867 15.5385 17.9743 16.5969 17.075 17.4969C16.175 18.3969 15.1167 19.1095 13.9 19.6349C12.6833 20.1602 11.3833 20.4225 10 20.4219Z"
                                  fill="#67C380"
                                />
                              </svg>
                            </div>
                            <div
                              className="md:text-[16px] text-[14px]"
                              style={{
                                fontFamily: "Noto Sans",
                                fontSize: "16px",
                                fontWeight: "500",
                                lineHeight: "24px",
                                letterSpacing: "0em",
                                textAlign: "left",
                                color: "#3C4043",
                              }}
                            >
                              {elem.title}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* right side image */}
                  <div className="w-1/3 h-full flex justify-start items-center relative">
                    {d.id === 1 || d.id === 3 || d.id === 5 || d.id === 7 ? (
                      <img
                        src={module_image_even}
                        alt="evenImage"
                        style={{ zIndex: "2" }}
                      />
                    ) : (
                      <img
                        src={module_image_odd}
                        alt="oddImage"
                        style={{ zIndex: "2" }}
                      />
                    )}
                    <div
                      className="absolute top-0 end-0"
                      style={{
                        zIndex: "1",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="220"
                        height="221"
                        viewBox="0 0 220 221"
                        fill="none"
                      >
                        <path
                          d="M89.0458 58.6174L16.402 31.9475C6.54912 28.3302 0 18.9492 0 8.4533C0 -5.36902 11.2052 -16.5742 25.0275 -16.5742H183.788C210.967 -16.5742 233 5.45856 233 32.6374V203.877C233 221.868 208.163 226.637 201.5 209.926L166.361 130.939C151.428 97.3702 123.536 71.2799 89.0458 58.6174Z"
                          fill="#EEF9EF"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* vector bg */}
        <div></div>
      </div>
      <KeyModules keys={data.keys} />

      <div className=" w-screen py-10 flex flex-col justify-center items-center bg-[#F9F9F9]">
        <div className="text-center md:text-[20px] text-[16px] text-[#3C4043] mb-[36px]">
          Have a question? We’d love to hear from you.
        </div>
        <Link
          to={"/contactus"}
          className="bg-[#146DFA] text-white h-[44px] w-[117px] flex justify-center items-center rounded-[6px]"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Products;
