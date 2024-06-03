import React, { useEffect } from "react";

//  import
import { ClientLogos } from "../Components/Homepage/ClientLogos/ClientLogos";

import { Partners } from "../Components/Homepage/Partners/Partners";

import { Component215 } from "../Components/Homepage/icons/Component215/Component215";
import { Component217 } from "../Components/Homepage/icons/Component217/Component217";
import { Component25 } from "../Components/Homepage/icons/Component25/Component25";
import { Component27 } from "../Components/Homepage/icons/Component27/Component27";

import Carousel from "../Components/Carousel.tsx";

//  import compoenets
import BlogCarousel from "../Components/BlogCarousel.jsx";
import ClientReview from "../Components/ClientReview.jsx";
import ContactUsSection from "../Components/ContactUsSection.jsx";
import Logistic from "../Components/Logistic.jsx";
import ProductCarousel from "../Components/ProductCarousel.jsx";
import SmallBlueWave from "../Components/SmallBlueWave.jsx";
import { useGetClientLogoQuery } from "../redux/features/client/clientApi.js";
import {
  useGetHomeBannerQuery,
  useGetHomeModelsQuery,
} from "../redux/features/home/homeApi.js";
import { useGetAllProductQuery } from "../redux/features/product/productApi.js";
import { img_url } from "../utils/utils.js";
import useWindowDimensions from "../utils/windowDimension.js";
import HomeSlider from "../Components/HomeSlider/HomeSlider.jsx";
import LoadingSpinner from "../Components/common/LoadingSpiner.jsx";

export const Homepage = () => {

  const { width, height } = useWindowDimensions();
  const mobileSize = width < 768 ? true : false;
  const {
    data: banner,
    isLoading,
    isError,
    isSuccess,
  } = useGetHomeBannerQuery();

  const {
    data: models,
    isLoading: modelsLoading,
    isError: modelsError,
    isSuccess: modelsSuccess,
  } = useGetHomeModelsQuery();

  const {
    data: products,
    isLoading: productLoading,
    isError: productError,
    isSuccess: productSuccess,
  } = useGetAllProductQuery();

  const {
    data: clients,
    isLoading: clientsLoading,
    isError: clientsError,
    isSuccess: clientsSuccess,
  } = useGetClientLogoQuery();

  useEffect(() => {
    if (isSuccess && modelsSuccess && productSuccess && clientsSuccess) {
      
      window.scrollTo(0, 0);
    }
  }, [isSuccess, modelsSuccess, productSuccess, clientsSuccess]);

  if (isError || productError || modelsError || clientsError) {
    console.log("error", isError, productError, modelsError, clientsError);
    return <div>Something went wrong</div>;
  }

  if (
    isLoading ||
    !banner ||
    productLoading ||
    !products ||
    modelsLoading ||
    !models ||
    clientsLoading ||
    !clients
  ) {
    return <LoadingSpinner />
  }
  // console.log(clients?.data);
  // console.log(img_url + banner[0].video);

  let slides = banner?.map((item) => {
    return (
      <div
        className="h-screen relative z-40 text-xl flex flex-col justify-center items-center "
        //  image to be chnaged
        style={{
          // background: `url(${img_url + item?.video})`,
          background: `url(${item?.video})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white lg:text-[48px] md:text-[40px] text-[23px] font-bold mb-[16px]">
          {item.title}
        </div>
        <div className="w-1/2 text-center text-white md:text-[20px] text-[16px] mb-[82px]">
          {item.subtitle}
        </div>
        <a
          href="#product"
          className="w-[264px] h-[48px] flex justify-center items-center text-[#2B6997] text-[16px] font-bold bg-white rounded-[6px]"
        >
          EXPLORE PRODUCTS
        </a>
      </div>
    );
  });



  return (
    <div className=" flex flex-col justify-center items-center" style={{ overflowAnchor: 'none' }}>
      <div className="relative w-full h-[540px] bg-gray-600 flex justify-center items-center" style={{ overflowAnchor: 'none' }}>
        {/* <SliderV
          className="slider-v2"
          frameIcon={<Component215 className="icon-instance-node" />}
          frameIcon1={<Component27 className="icon-instance-node" />}
          frameIcon2={<Component217 className="icon-instance-node" />}
          largeButtonDivClassName="slider-4"
          largeButtonPropertyOutlineClassName="slider-5"
          override={<Component25 className="icon-instance-node" />}
          property1="green"
          sliderNewVector84Color="url(#paint0_linear_2082_1182)"
          sliderNewVectorPropertyDefaultClassName="slider-v-instance"
          sliderNewVectorPropertyDefaultClassNameOverride="slider-v2-instance"
        /> */}

        {/* <Carousel
          slides={slides}
          animationType="SLIDE"
          duration={2500}
          withNavigation={true}
        /> */}
        <HomeSlider banner={banner} />
        {/* home top section absolute card here */}

        <div
          className={`absolute z-10 left-0 top-0 ${height < 770 && width < 1370 ? `mt-[80px]` : `mt-[100px]`
            }`}
        >
          <div>
            {models.map(({ title, number, id, logo }, index) => {
              return (
                <div key={index}>
                  <div
                    className={`w-[262px] bg-[#252629] opacity-70 p-[8px] flex justify-start items-center mb-2`}
                  >
                    <img
                      className="w-[34px] h-[34px]"
                      alt="icon"
                      // src={img_url + logo}
                      src={logo}
                      title={title}
                    />
                    {/* slider mini card */}
                    <div className="ms-[12px] flex-grow-1 flex flex-col justify-center items-start cursor-pointer"
                      style={{ backgroundColor: '#252629' }}
                    >
                      <div className="font-medium md:text-[16px] text-[16px] text-white"
                        style={{
                          fontFamily: 'Helvetica Neue-Medium',
                          fontSize: '20px',
                          fontWeight: '500',
                          lineHeight: '30px',
                          letterSpacing: '0.02em',
                          textAlign: 'left',
                        }}
                      >
                        {Math.abs(Number(number)) >= 1.0e9
                          ? Math.abs(Number(number)) / 1.0e9 + "B +"
                          : // Six Zeroes for Millions
                          Math.abs(Number(number)) >= 1.0e6
                            ? Math.abs(Number(number)) / 1.0e6 + "M +"
                            : // Three Zeroes for Thousands
                            Math.abs(Number(number)) >= 1.0e3
                              ? Math.abs(Number(number)) / 1.0e3 + "K +"
                              : Math.abs(Number(number))}
                      </div>
                      <div
                        className={`font-normal md:text-[14px] text-[14px] text-white`}
                        style={{
                          fontFamily: 'Noto Sans',
                          fontSize: '16px',
                          fontWeight: '400',
                          lineHeight: '24px',
                          letterSpacing: '0em',
                          textAlign: 'left',
                        }}
                      >
                        {title}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* home top section absolute card close here */}

        <img
          className="absolute left-0 bottom-0 w-full z-[1] h-[160px] object-cover"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-5.svg"
          style={{
            zIndex: '2',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/*  product cards */}
      <div id="products">
        <ProductCarousel products={products} style={{ overflowAnchor: 'none' }}/>
      </div>

      {/*  logistic cards */}
      <Logistic models={models} style={{ overflowAnchor: 'none' }}/>

      {/*  blue small wave */}

      <SmallBlueWave
        heading="Our top clients"
        subheading="We have a legacy of successful collaboration with healthcare providers in their digital transformation journey"
      />

      <div className="w-screen h-[300px] flex justify-center items-center  relative ">
        <div className="lg:w-10/12 md:w-11/12 w-full h-full md:px-0 flex flex-col justify-center items-center relative bg-white select-none">
          <ClientLogos
            className="design-component-instance-node-2  !grid !grid-cols-4 !gap-4 !justify-center !items-center !m-auto"
            property1="variant-2"
            clients={clients.slice(0, 8)}
          />
        </div>
      </div>

      <ClientReview id="clientReview" style={{ overflowAnchor: 'none' }} />

      <Partners id="partners" text="Global strategic partners" style={{ overflowAnchor: 'none' }} />

      <BlogCarousel style={{ overflowAnchor: 'none' }} />

      <ContactUsSection style={{ overflowAnchor: 'none' }} />
    </div>
  );
};