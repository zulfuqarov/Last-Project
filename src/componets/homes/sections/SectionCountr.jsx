import React from "react";
import "./SectionCount.css";
const SectionCountr = () => {
  return (
    <section className="Section-countr countr-any">
      <div className="d-flex justify-content-around">
        <i class="fa-solid fa-graduation-cap"></i>
        <i class="fa-solid fa-id-card"></i>
        <i class="fa-solid fa-calendar-days"></i>
        <i class="fa-solid fa-laptop"></i>
      </div>
      <div className="d-flex justify-content-around countr-any">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </div>
      <div className="d-flex justify-content-around countr-span">
        <span>Success Stories</span>
        <span>Trusted Tutors</span>
        <span>Scheduled Events</span>
        <span>Available Courses</span>
      </div>
    </section>
  );
};

export default SectionCountr;
