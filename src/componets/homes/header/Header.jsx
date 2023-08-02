import React from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./Header.css";


const Header = () => {
  return (
    <div className="nebi">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="swiper-back-fon">
         
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
