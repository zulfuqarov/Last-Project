import React from "react";
import "./SectionsParalax.css";
const SectionsParalax = () => {
  return (
    <section className="Section-paralaxe">
      <div className="Paralaxe-about media-any-paralax">
        <a href="">
          {" "}
          <i class="fa-solid fa-graduation-cap"></i> Description
        </a>
        <a href="">
          {" "}
          <i class="fa-regular fa-bookmark"></i> Syllabus
        </a>
        <a href="">
          {" "}
          <i class="fa-light fa-user-group"></i>Teachers
        </a>
      </div>
      <div className="Paralaxe-about-span media-any-paralax">
        <span>
          Mauris et diam pellentesque ex fermentum consectetur. Curabitur non{" "}
          <br />
          tortor sit amet ligula viverra commodo. Quisque luctus nunc dolor, nec{" "}
          <br />
          porttitor diam accumsan et. Duis convallis ipsum eget ligula
          scelerisque, <br /> eget consectetur mi interdum. Nullam tempor arcu
          consectetur <br /> pellentesque ultrices. Phasellus eu ipsum felis
        </span>
      </div>
    </section>
  );
};

export default SectionsParalax;
