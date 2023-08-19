import React from "react";
import NavbarLinksAlllHeader from "../../navbar-all-links-header/NavbarLinksAlllHeader";
import "./About.css";

// img start
import PagesAboutsLeftImg from "./imgs/about-teacher.jpg";
import cartsimg1 from "./imgs/about-teacher-gallery-1.jpg";
import cartsimg2 from "./imgs/about-teacher-gallery-2.jpg";
import cartsimg3 from "./imgs/about-teacher-gallery-3.jpg";
import cartsimg4 from "./imgs/about-teacher-gallery-4.jpg";
import cartsimg5 from "./imgs/about-teacher-gallery-5.jpg";
// img end
const Abouts = () => {
  return (
    <section className="Pages-Abouts">
      <NavbarLinksAlllHeader
        ClassNameProps="Teacher-back-fon-about  d-flex position-relative"
        span="About"
        links="/About"
      />
      <section className="Pages-Abouts-introdaction container">
        <div className="row">
          <div className="Pages-Abouts-left col-12 col-md-12 col-xl-6">
            <div className="Pages-Abouts-left-top">
              <h1>Joseph White</h1>
              <span>
                Lorem Ipsn gravida nibh vel velit auctor aliquetnean
                sollicitudin, lorem quis bibendum auci elit consequat ipsutis
                sem nibh id elit dicat mollis
              </span>
            </div>
            <div className="Pages-Abouts-left-center Pages-Abouts-left-any ">
              <h4>Education</h4>
              <span>
                Congue mollis felis tortor id. Sed aliquet amet sit vitae
                commodo commodo ultricies lectus. A nullam consequat sociis
                lectus erat. Suscipit ridiculus quis ante cras mauris faucibus
                nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et
                sed turpis amet nisl eros risus a eu cras fringilla. Ac porta
                adipiscing. Eros sit mauris. Odio sed
              </span>

              <ul>
                <li>
                  <i class="fa-solid fa-check"></i>We Enrich Lives Through
                  Learning.
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>Guiding the young generation
                  to success.
                </li>
                <li>
                  <i class="fa-solid fa-check"></i>Learn to Play, Converse with
                  Confidence.
                </li>
              </ul>
            </div>
            <div className="Pages-Abouts-left-bottom-top Pages-Abouts-left-any">
              <h4>Experience</h4>
              <span>
                Congue mollis felis tortor id. Sed aliquet amet sit vitae
                commodo commodo ultricies lectus. A nullam consequat sociis
                lectus erat. Suscipit ridiculus quis ante cras mauris faucibus
                nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et
                sed turpis amet nisl eros risus a eu cras fringilla. Ac porta
                adipiscing. Eros sit mauris. Odio sed
              </span>
            </div>
            <div className="Pages-Abouts-left-bottom Pages-Abouts-left-any">
              <h4>Skills</h4>
              <span>
                Congue mollis felis tortor id. Sed aliquet amet sit vitae
                commodo commodo ultricies lectus. A nullam consequat sociis
                lectus erat. Suscipit ridiculus quis ante cras mauris faucibus
                nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et
                sed.
              </span>
            </div>
          </div>
          <div className="Pages-Abouts-right col-12 col-md-12 col-xl-6">
            <img src={PagesAboutsLeftImg} alt="" />
          </div>
        </div>
      </section>
      <section className="Pages-Abouts-bottom-carts-img ">
          <div className="">
            <div className="Pages-Abouts-bottom-cart-img">
              <img src={cartsimg1} alt="" />
            </div>
          </div>
          <div className="">
            <div className="Pages-Abouts-bottom-cart-img">
              <img src={cartsimg2} alt="" />
            </div>
          </div>
          <div className="">
            <div className="Pages-Abouts-bottom-cart-img">
              <img src={cartsimg3} alt="" />
            </div>
          </div>
          <div className="">
            <div className="Pages-Abouts-bottom-cart-img">
              <img src={cartsimg4} alt="" />
            </div>
          </div>
          <div className="">
            <div className="Pages-Abouts-bottom-cart-img">
              <img src={cartsimg5} alt="" />
            </div>
          </div>
      </section>
    </section>
  );
};

export default Abouts;
