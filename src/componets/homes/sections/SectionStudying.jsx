import React from "react";
import "./SectionStudying.css";

// img start
import Studyingimg1 from "./img/h3-image-2.jpg";
import Studyingimg2 from "./img/h3-image-3.jpg";
import Studyingimg3 from "./img/h3-image-4.jpg";
// img end

const SectionStudying = () => {
  return (
    <section className="Studying">
      <div className="container">
        <div className="text-center Studying-div row">
          <h1 className="col-12">Studying at Educator</h1>
          <span className="col-12">
            Etiam porttitor risus massa nec condiment gravida nibh vel velit
            auctor aliquet. Aenean <br /> sollicitudinlorem quis bibendum auci
            elit consequat ipsutis sem nibh id elitduis sed
          </span>
        </div>
        <div className="Studying-carts">
          <div className="row Studying-carts-media">
            <div className="Studying-cart col-12 col-xl-4">
              <div className="Studying-cart-img">
                <img src={Studyingimg1} alt="" />
              </div>
              <h1>Graduate admissions</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </span>
              <button>
                READ MORE <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>

            <div className="Studying-cart col-12 col-xl-4">
              <div className="Studying-cart-img">
                <img src={Studyingimg2} alt="" />
              </div>
              <h1>Graduate admissions</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </span>
              <button>
                READ MORE <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>

            <div className="Studying-cart col-12 col-xl-4">
              <div className="Studying-cart-img">
                <img src={Studyingimg3} alt="" />
              </div>
              <h1>Graduate admissions</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </span>
              <button>
                READ MORE <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionStudying;
