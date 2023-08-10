import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Teachers.css";
// img start
import Josephimg from "./imgs/teachers-1.jpg";
import Josephimzaimg from "./imgs/signature-1.png";
// img end

const itemsPerPage = 8;

const Teacher = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [teacher, setteacher] = useState([]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    axios
      .get(" http://localhost:9999/teachers")
      .then((melumat) => setteacher(melumat.data))
      .catch((error) => {
        console.error("api isdeyi basarisiz", error);
      });
  }, [currentPage]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = teacher.slice(startIndex, endIndex);

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
              mucius <br /> possim accusam. Duo minim dicit contentiones cu,
              dolor soluta ne nec, <br /> id nisl augue eos. Ad corpora
              partiendo sea, id ipsum omnium <br />
              disputationi pri, eum eu ipsum placerat. Mel et gloriatur
              temporibus
            </span>
            <div className="imza-img">
              <img src={Josephimzaimg} alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="Teacher-cards">
        <div className="container">
          <div className="row">
            {visibleItems.map((item, index) => (
              <div className="col col-md col-lg-3" key={index}>
                {
                  <div className="pt-5">
                    <div className="Teacher-card-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="Teacher-card-about">
                    <h1>{item.name}</h1>
                    <span>{item.faculty}</span>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
        <div className="pagination-div">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Sub"}
            breakLabel={"..."}
            pageCount={Math.ceil(teacher.length / itemsPerPage)}
            marginPagesDisplayed={10}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination "}
            activeClassName={"active"}
          />
        </div>
      </div>
    </section>
  );
};

export default Teacher;
