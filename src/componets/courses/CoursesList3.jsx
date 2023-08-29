import React, { useState, useEffect } from "react";
import "./CoursesList3.css";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";
import CardsProps from "../homes/sections/propscard2/CardsProps";
import ReactPaginate from "react-paginate";
import axios from "axios";
import img1 from "./img/course-img-7.jpg";
import img2 from "./img/course-img-8-768x491.jpg";
import img3 from "./img/course-img-9-768x491.jpg";

const itemsPerPage = 6;

const CoursesList3 = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [courses, setcourses] = useState([]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/Courses")
      .then((res) => setcourses(res.data))
      .catch((error) => {
        console.error("api isdeyi basarisiz", error);
      });
  }, [currentPage]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = courses.slice(startIndex, endIndex);

  return (
    <section className="CoursesList3">
      <NavbarLinksAlllHeader
        ClassNameProps="CoursesList3-back-fo3 d-flex position-relative"
        span=" Confirm-password"
        links=" Confirm-password"
      />
      <div className="container">
        <div className="row">
          <div className="CoursesList3-left-side col-12 col-md-9">
            <div className="CoursesList3-left-side-top"></div>
            <div className="CoursesList3-left-side-center-carts">
              <div className="row Popular-cardt ">
                {visibleItems.map((courses, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 col-xl-4 pt-3"
                  >
                    <CardsProps
                      popularimg={courses.img}
                      popularabout="Photography"
                      popularprice="120"
                      popularlinks="Amy Drufesne"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="pagination-div">
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Sub"}
                breakLabel={"..."}
                pageCount={Math.ceil(courses.length / itemsPerPage)}
                marginPagesDisplayed={10}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination "}
                activeClassName={"active"}
              />
            </div>
          </div>
          <div className="CoursesList3-right-side col-12 col-md-3">
            <div className="CoursesList3-right-side-top">
              <h1>Categories</h1>
              <span>Art & DEsign</span>
              <span>Business</span>
              <span>It & Software</span>
              <span>Languages</span>
              <span>Sports</span>
            </div>
            <div className="CoursesList3-right-side-bottom">
              <h1>Popular Courses</h1>
              <div className="CoursesList3-right-side-bottom-carts">
                <div className="carts-img-any">
                  <img src={img1} alt="" />
                </div>
                <div>
                  <h1>Statistics</h1>
                  <span>190</span>
                </div>
              </div>
              <div className="CoursesList3-right-side-bottom-carts">
                <div className="carts-img-any">
                  <img src={img2} alt="" />
                </div>
                <div>
                  <h1>Statistics</h1>
                  <span>190</span>
                </div>
              </div>
              <div className="CoursesList3-right-side-bottom-carts">
                <div className="carts-img-any">
                  <img src={img3} alt="" />
                </div>
                <div>
                  <h1>Learning CAD</h1>
                  <span>190</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesList3;
