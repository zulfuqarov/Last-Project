import React from "react";
import "./SectionsWelcome.css";

// img import start
import Welcomeimg from "./img/h3-img.jpg";
import Latesimg1 from "./img/blog-featured-9-550x550.jpg";
import Latesimg2 from "./img/blog-featured-1-1-550x550.jpg";
// img import end

const SectionsWelcome = () => {
  return (
    <div className="container">
      <section className="Section-Welcome row">
        <div className="welcome welcome-any col-12 col-md-12 col-xl-6">
          <h1>Welcome</h1>

          <span>
            Etiam porttitor risus massa nec condiment gravida nibh vel velit
            auctor aliquet. Aenean sollicitudinlorem quis bibendum
          </span>

          <div className="welcome-img">
            <img src={Welcomeimg} alt="" />
          </div>
        </div>

        <div className="latest welcome-any col-12 col-md-12 col-xl-6">
          <h1>Latest news</h1>

          <span>
            Etiam porttitor risus massa nec condiment gravida nibh vel velit
            auctor aliquet. Aenean sollicitudinlorem quis bibendum
          </span>
          <div className="latest-flex">
            <div className="d-flex latest-any ">
              <div className="latest-img">
                <img src={Latesimg1} alt="" />
              </div>

              <div>
                <h1>Helping Students Is the Key</h1>
                <span>
                  Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auci{" "}
                </span>{" "}
                <br />
                <small>July 20, 2017</small>
              </div>
            </div>

            <div className="d-flex latest-any ">
              <div className="latest-img">
                <img src={Latesimg2} alt="" />
              </div>

              <div>
                <h1>Bring the Tutoring Home</h1>
                <span>
                  Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auci{" "}
                </span>{" "}
                <br />
                <small>July 20, 2017</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionsWelcome;
