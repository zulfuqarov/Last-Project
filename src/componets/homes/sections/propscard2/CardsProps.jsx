import React from "react";

const CardsProps = ({
  popularimg,
  popularabout,
  popularlinks,
  popularprice,
  PopularCardtClass,
  PopularCardtImgClass,
  PopularCardtAboutClass,
  PopularCardtAboutTopClass,
  PopularCardtAboutBottomClass,
  PopularCardtAboutBottomSpanClass,
}) => {
  return (
    <div className={`Popular-cardt ${PopularCardtClass}`}>
      <div className={`Popular-img ${PopularCardtImgClass}`}>
        <div className="Popular-icons">
          <i className="fa-regular fa-heart"></i>
        </div>
        <img src={popularimg} alt="" />
      </div>
      <div className={`Popular-about pt-4 ${PopularCardtAboutClass}`}>
        <div className={`d-flex   about-top ${PopularCardtAboutTopClass}`}>
          <h1>{popularabout}</h1>
          <span>{popularprice}</span>
        </div>
        <div
          className={`d-flex justify-content-left  about-bottom ${PopularCardtAboutBottomClass}`}
        >
          <a href="">{popularlinks}</a>
        </div>
        <span
          className={`Popular-about-bottom-span ${PopularCardtAboutBottomSpanClass}`}
        >
          Blandit accumsan ei vis, maiorum epicurel at mei nibh viderer
        </span>
        <div className="about-bottom-last ">
          <span>
            <i class="fa-solid fa-user-group"></i>1
          </span>
          <span>
            <i class="fa-regular fa-clock"></i>2 hours
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardsProps;
