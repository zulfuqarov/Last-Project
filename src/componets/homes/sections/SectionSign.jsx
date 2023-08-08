import React from "react";
import Sign from './propssign/SignProps'

import "./SectionSign.css";

// img start
import singimg1 from "./img/h3-icon-1.png";
import singimg2 from "./img/h3-icon-2.png";
import singimg3 from "./img/h3-icon-3.png";
import singimg4 from "./img/h3-icon-4.png";
// img end

const SectionSign = () => {
  return (
    <section className="Sections-sign">
      <div className="container">
        <div className="row">
          <div className=" sign-cards col-12 col-lg-4">
            <div className="sign-card-top">
              <div className="sign-card-top-img">
                <img src={singimg2} alt="" />
                <span>E-Learning</span>
              </div>
              <div className="sign-card-top-span">
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
            <div className="sign-card-bootom">
              <div className="sign-card-top-img">
                <img src={singimg3} alt="" />
                <span>Technology</span>
              </div>
              <div className="sign-card-top-span">
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>

          <div className=" sign-cards col-12 col-lg-4">
          <div className="sign-card-top">
              <div className="sign-card-top-img">
                <img src={singimg1} alt="" />
                <span>Tuition</span>
              </div>
              <div className="sign-card-top-span">
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
            <div className="sign-card-bootom">
              <div className="sign-card-top-img">
                <img src={singimg4} alt="" />
                <span>Alumni</span>
              </div>
              <div className="sign-card-top-span">
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>

          <div className=" sign-Form col-12 col-lg-4">
            <Sign/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSign;
