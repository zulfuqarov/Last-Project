import React, { useEffect } from "react";
import AOS from "aos";
// img ipor start
import headerLogos from '../../homes/header/img/header-logos.png'
// img ipor end
const PropBtn = ({ DocumetTitleh1,DocumetTitleh4 }) => {
    
    useEffect(() => {
        AOS.init();
      }, []); 
  
    return (
    <div  className="header-center">
      <div data-aos="zoom-out-up" className="header-imgs">
        <img src={headerLogos} alt="" />
      </div>
      <div  className="header-abouts">
        <h1 data-aos="zoom-out-up">{DocumetTitleh1}</h1>
        <h4 data-aos="zoom-out-up">{DocumetTitleh4}</h4>
        <button data-aos="zoom-out-up" className="header-abouts-btn">Read More</button>
      </div>
    </div>
  );
};

export default PropBtn;
