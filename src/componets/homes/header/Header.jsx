import React from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// props start
import PropsAbouts from "../Props-btn/PropBtn";
// props end

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// aos start


import "./Header.css";

const Header = () => {

  return (
    <div className="">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="swiper-back-fon swiper-back-fon-any">
          <PropsAbouts
            DocumetTitleh1="Graduate Admissions"
            DocumetTitleh4="The perfect way to create a stunning online presentation"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-back-fon2 swiper-back-fon-any">
          <PropsAbouts
            DocumetTitleh1="A Unique Experience"
            DocumetTitleh4="The perfect way to create a stunning online presentation"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-back-fon3 swiper-back-fon-any">
          <PropsAbouts
            DocumetTitleh1="Lates Advancements"
            DocumetTitleh4="The perfect way to create a stunning online presentation"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-back-fon4 swiper-back-fon-any">
          <PropsAbouts
            DocumetTitleh1="Premium Scholarships"
            DocumetTitleh4="The perfect way to create a stunning online presentation"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-back-fon5 swiper-back-fon-any">
          <PropsAbouts
            DocumetTitleh1="Your Stepping Stone"
            DocumetTitleh4="The perfect way to create a stunning online presentation"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
