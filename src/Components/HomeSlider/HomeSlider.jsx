import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./HeroSlider.module.css";

import useWindowDimensions from "../../utils/windowDimension";
import Image1 from "./Image1/Image1";

const HomeSlider = ({ banner }) => {
  const data1 = banner;

  const { width, height } = useWindowDimensions();
  const mobileSize = width < 768 ? true : false;


  return (
    <div className={styles.HeroContainer} 
    id="Slider_Hero"
    style={{
      // backgroundColor:'red',
      // zIndex:'0'
    }}
    >
      <Swiper
        style={{
          "--swiper-pagination-color": "blue",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-color": "#146DFA",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size":
            mobileSize === true ? "0px" : "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          paddingBottom:'100px', 
          overflow:'hidden',
          zIndex:'1',
          // backgroundColor:'red'
        }}
        modules={[Autoplay, Pagination]}
        effect={"fade"}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.HomeSwiper}
      >
        {data1.map((item, i) => (
          <SwiperSlide key={i}>
            <Image1 item={item} height={height} width={width}></Image1>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Bullet></Bullet> */}
    </div>
  );
};

export default HomeSlider;