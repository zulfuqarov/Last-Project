import React, { useState } from "react";
import "./SectionCount.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const SectionCountr = () => {
  const [scrollUp, setscrollUp] = useState(false);
  const tureScrollUp = () => {
    setscrollUp(true);
  };
  const falseScrollUp = () => {
    setscrollUp(false);
  };
  return (
    <section className="Section-countr d-flex align-items-center">
      <div className="container">
        <ScrollTrigger
          className="row"
          onEnter={tureScrollUp}
          onExit={falseScrollUp}
        >
          <div className="col-6 col-md-6 col-lg-3 text-center countr-span countr-any">
            <i class="fa-solid fa-graduation-cap"></i>
            <h1>
              {scrollUp && (
                <CountUp start={0} end={13286} duration={2} delay={0} />
              )}
            </h1>
            <span>Success Stories</span>
          </div>

          <div className="col-6 col-md-6 col-lg-3 text-center countr-span countr-any">
            <i class="fa-solid fa-id-card"></i>
            <h1>
              {scrollUp && (
                <CountUp start={0} end={678} duration={2} delay={0} />
              )}
            </h1>
            <span>Trusted Tutors</span>
          </div>

          <div className="col-6 col-md-6 col-lg-3 text-center countr-span countr-any">
            <i class="fa-solid fa-calendar-days"></i>
            <h1>
              {scrollUp && (
                <CountUp start={0} end={347} duration={2} delay={0} />
              )}
            </h1>
            <span>Scheduled Events</span>
          </div>

          <div className="col-6 col-md-6 col-lg-3 text-center countr-span countr-any">
            <i class="fa-solid fa-laptop"></i>
            <h1>
              {scrollUp && (
                <CountUp start={0} end={1912} duration={2} delay={0} />
              )}
            </h1>
            <span>Available Courses</span>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default SectionCountr;
