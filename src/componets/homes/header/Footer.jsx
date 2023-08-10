import React from "react";
import "./Footer.css";
import footermaoimg from "../sections/img/footer-map-2.png";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <dir className="row">
          <div className="Footer-any col-12 col-md-6 col-lg-3">
            <h1>Educate</h1>
            <span>
              Providing Life Changing Experiences Through Education. Class That
              Fit Your Busy Life. Closer to Home
            </span>
            <p>1-677-124-44227</p>
            <p>Mon -Sat 8.00-18.00</p>
          </div>
          <div className="Footer-any col-12 col-md-6 col-lg-3">
            <h1>Latest News</h1>

            <a href="">
              Graduate Admissions <br />
              <span>by Craig Murphy</span>
            </a>

            <a href="">
              Continuing Education <br />
              <span>by Craig Murphy</span>
            </a>

            <a href="">
              Current Students <br />
              <span>by Craig Murphy</span>
            </a>
          </div>
          <div className="Footer-any col-12 col-md-6 col-lg-3">
            <h1>Useful Links</h1>
            <a href="">Popular Courses</a>
            <a href="">Forums</a>
            <a href="">Our Teachers</a>
            <a href="">Upcoming Events</a>
            <a href="">Contact Us</a>
          </div>
          <div className="Footer-any col-12 col-md-6 col-lg-3">
            <h1>Flexible learning</h1>
            <div className="footer-map-img">
              <img src={footermaoimg} alt="" />
            </div>
          </div>
        </dir>
      </div>
      <div className="footer-end">
        <div className="footer-end-span">
          <span>© 2017 QODE INTERACTIVE, ALL RIGHTS RESERVED</span>
        </div>
        <div className="footer-end-social-media">
          <a href="">CALL +44 300 303 0266</a>
          <a href="">FOLLOW US</a>
          <a href="">
            {" "}
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            {" "}
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="">
            {" "}
            <i class="fa-brands fa-pinterest"></i>
          </a>
          <a href="">
            {" "}
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
