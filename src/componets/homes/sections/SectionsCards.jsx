import React from "react";
import "./SectionsCards.css";
import CardsProps from "./propscard2/CardsProps";
import PopularCardsimg1 from "./img/course-img-2.jpg";
import PopularCardsimg2 from "./img/course-img-3.jpg";
import PopularCardsimg3 from "./img/course-img-4.jpg";
import PopularCardsimg4 from "./img/course-img-5.jpg";
const SectionsCards = () => {
  return (
    <section className=" container Sections-Cards">
      <div className=" text-center Sections-Popular">
        <h1>Popular Courses</h1>
        <span>
          Etiam porttitor risus massa nec condiment gravida nibh vel velit
          auctor aliquet. Aenean <br /> sollicitudinlorem quis bibendum auci
          elit consequat ipsutis sem nibh id elitduis sed
        </span>
      </div>
      <div className="row Popular-cardt">
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          {" "}
          <CardsProps
            popularimg={PopularCardsimg1}
            popularabout="Photography"
            popularprice="120"
            popularlinks="Amy Drufesne"
            
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          {" "}
          <CardsProps
            popularimg={PopularCardsimg2}
            popularabout="Statistics"
            popularprice="190"
            popularlinks="Martina Moore"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          {" "}
          <CardsProps
            popularimg={PopularCardsimg3}
            popularabout="Learning CAD"
            popularprice="190"
            popularlinks="Martina Moore"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
          {" "}
          <CardsProps
            popularimg={PopularCardsimg4}
            popularabout="Sports Stats"
            popularprice="160"
            popularlinks="Taylor Fink"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionsCards;
