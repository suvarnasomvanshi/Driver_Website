import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const Bullet = () => {
     useEffect(() => {
       const swiper = new Swiper(".swiper", {
         modules: [Pagination],
         pagination: {
           el: ".swiper-pagination",
         },
       });
     }, []);

     return <div className="swiper-pagination" />;
};

export default Bullet;