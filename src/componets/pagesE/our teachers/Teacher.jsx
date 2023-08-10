import React from "react";
import "./Teachers.css";

import Josephimg from './imgs/teachers-1.jpg'
import Josephimzaimg from './imgs/signature-1.png'
const Teacher = () => {
  return (
    <section className="Teacher">
      <div className="Teacher-back-fon d-flex">
        <div className="container d-flex justify-content-between">
          <h1>Our Teachers</h1>
          <a href="#">Home / Our Teachers</a>
        </div>
      </div>
      <div className="container">
        <section className="section-joseph row">
          <div className="joseph-img-left col-12 col-lg-6">
            <img src={Josephimg} alt="" />
          </div>
          <div className="joseph-right col-12 col-lg-6">
            <h1>Joseph White</h1>
            <span>
              Exerci deserunt ei qui, nec ceteros quaerendum et, <br /> appareat
              abhorreant no. Mel minim novum invenire no
            </span>
            <span>
              Ad est fugit senserit contentiones. Sumo apeirian his at, ei nam
              mucius <br /> possim accusam. Duo minim dicit contentiones cu, dolor
              soluta ne nec, <br /> id nisl augue eos. Ad corpora partiendo sea, id
              ipsum omnium <br />disputationi pri, eum eu ipsum placerat. Mel et
              gloriatur temporibus
            </span>
            <div className="imza-img">
              <img src={Josephimzaimg} alt="" />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Teacher;
