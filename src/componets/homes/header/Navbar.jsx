import React, { useEffect, useState } from "react";
// img start
import Logo from "./img/logo-dark.png";
import corusesimg1 from "./img/course-img-1.jpg";
import corusesimg2 from "./img/course-img-2.jpg";
import corusesimg3 from "./img/course-img-6.jpg";
// img end
import "./Navbar.css";
const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("#888");
  // navbar scroll start
  const handleScroll = () => {
    // Scroll olayının gerçekleştiği noktayı alın
    const scrollY = window.scrollY;

    // Scroll değerine göre navbar rengini belirleyin
    if (scrollY > 50) {
      setNavbarColor("white");
    } else {
      setNavbarColor("#888");
    }
  };

  useEffect(() => {
    // Scroll olayını dinleyin
    window.addEventListener("scroll", handleScroll);

    // Komponent çıkışında scroll olayını kaldırın
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // navbar scroll end
  // ----------------
  // overlay menu start
  const [menuOpen, setmenuOpen] = useState(false);
  const OpenCloseClick = () => {
    setmenuOpen(!menuOpen);
  };
  
  // overlay menu end
  return (
    <header className="Navbar" style={{ backgroundColor: navbarColor }}>
      <div className="container ">
        <div className="row">
          <div className="navbar-logo col-md-6 col-lg-4">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-links col-md-6  col-lg-7">
            <ul className="navbar-links-ul d-flex justify-content-between">
              <li className="any-hover">
                <a href="">HOME</a>
                <ul className="Home-bottom any">
                  <li>
                    <a href="">University</a>
                  </li>
                  <li>
                    <a href="">Kindergarten</a>
                  </li>
                  <li>
                    <a href="">Language School</a>
                  </li>
                  <li>
                    <a href="">Playroom</a>
                  </li>
                  <li>
                    <a href="">Online Courses</a>
                  </li>
                  <li>
                    <a href="">College</a>
                  </li>
                  <li>
                    <a href="">Elementary School</a>
                  </li>
                  <li>
                    <a href="">Coming Soon</a>
                  </li>
                  <li>
                    <a href="">Ballet School</a>
                  </li>
                  <li>
                    <a href="">Landing</a>
                  </li>
                </ul>
              </li>
              <li className="any-hover position-static ">
                <a href="">COURSES</a>

                <ul className="Courses-bottom any">
                  <li className="Courses-bottom-left">
                    <ul>
                      <li>
                        <a href="">
                          <h1>FEATURES</h1>
                        </a>
                      </li>
                      <li>
                        <a href="">Courses List 3 Columns</a>
                      </li>
                      <li>
                        <a href="">Courses List 4 Columns</a>
                      </li>
                      <li>
                        <a href="">Courses Single</a>
                      </li>
                      <li>
                        <a href="">Courses Simple Single</a>
                      </li>
                      <li>
                        <a href="">User Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li className="Courses-bottom-right d-flex">
                    <div>
                      <div className="Courses-bottom-right-top">
                        <img src={corusesimg1} alt="" />
                      </div>
                      <div className="Courses-bottom-right-bottom">
                        <a href="">Photography</a>
                        <div className="bg-span-color">
                          <span>120</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="Courses-bottom-right-top">
                        <img src={corusesimg2} alt="" />
                      </div>
                      <div className="Courses-bottom-right-bottom">
                        <a href="">CAD Drawing</a>
                        <div className="bg-span-color">
                          <span>160</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="Courses-bottom-right-top">
                        <img src={corusesimg3} alt="" />
                      </div>
                      <div className="Courses-bottom-right-bottom">
                        <a href="">Development</a>
                        <div className="bg-span-color">
                          <span>65</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="any-hover">
                <a href="">EVENTS</a>
                <ul className="Events-bottom any">
                  <li>
                    <a href="">Events Calendar</a>
                  </li>
                  <li>
                    <a href="">Events List</a>
                  </li>
                  <li>
                    <a href="">Event Single</a>
                  </li>
                </ul>
              </li>
              <li className="any-hover">
                <a href="">PAGES</a>
                <ul className="Pages-bottom any">
                  <li>
                    <a href="">Our Teachers</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">About Me</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">FAQ Page</a>
                  </li>
                  <li className="Forum-hover position-static">
                    <a href="">
                      Forum <i class="fa-solid fa-angle-right"></i>
                    </a>
                    <ul className="Form-bottom ">
                      <li>
                        <a href="">Form List</a>
                      </li>
                      <li>
                        <a href="">Forum Topic</a>
                      </li>
                    </ul>
                  </li>
                  <li className="Gallery-hover">
                    <a href="">
                      Gallery <i class="fa-solid fa-angle-right"></i>
                    </a>
                    <ul className="Gallery-bottom">
                      <li>
                        <a href="">Standard two Columns</a>
                      </li>
                      <li>
                        <a href="">Standard Three Columns</a>
                      </li>
                      <li>
                        <a href="">Gallery Wide Space</a>
                      </li>
                      <li>
                        <a href="">Big Slider</a>
                      </li>
                      <li>
                        <a href="">Small Slider</a>
                      </li>
                      <li>
                        <a href="">Big Images</a>
                      </li>
                      <li>
                        <a href="">Masonry</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">404 Page</a>
                  </li>
                </ul>
              </li>
              <li className="any-hover">
                <a href="">SHOP</a>
                <ul className="Shop-bottom any">
                  <li>
                    <a href="">Shop List</a>
                  </li>
                  <li>
                    <a href="">Product Single</a>
                  </li>
                  <li className="Layouts-hover">
                    <a href="">Layouts</a>{" "}
                    <i class="fa-solid fa-angle-right"></i>
                    <ul className="Layouts-bottom">
                      <li>
                        <a href="">Three Column Grid</a>
                      </li>
                      <li>
                        <a href="">Four Column Grid</a>
                      </li>
                      <li>
                        <a href="">Five Columns Wide</a>
                      </li>
                    </ul>
                  </li>
                  <li className="Pages-hover">
                    <a href="">Pages</a> <i class="fa-solid fa-angle-right"></i>
                    <ul className="Pages-bottom2">
                      <li>
                        <a href="">My Account</a>
                      </li>
                      <li>
                        <a href="">Carts</a>
                      </li>
                      <li>
                        <a href="">Checkout</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="any-hover">
                <a href="">BLOG</a>
                <ul className="Blog-bottom any">
                  <li>
                    <a href="">Standart List</a>
                  </li>
                  <li>
                    <a href="">Masonry List</a>
                  </li>
                  <li className="Post-hover ">
                    <i class="fa-solid fa-angle-left"></i>
                    <a href="">Post Types</a>

                    <ul className="Post-bottom">
                      <li>
                        <a href="">Standard Post</a>
                      </li>
                      <li>
                        <a href="">Link Post</a>
                      </li>
                      <li>
                        <a href="">Gallery Post</a>
                      </li>
                      <li>
                        <a href="">Quote Post</a>
                      </li>
                      <li>
                        <a href="">Video Post</a>
                      </li>
                      <li>
                        <a href="">Audio Post</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="any-hover position-static">
                <a href="">ELEMENTS</a>
                <ul className="Elements-bottom any row">
                  <div className="col-lg-3 Elements-bottom-child-elemnts-any">
                    <h1>COURSES SHORTCODES</h1>
                    <a href="">Course List</a>
                    <a href="">Course Slider</a>
                    <a href="">Course Table</a>
                    <a href="">Course Features</a>
                    <a href="">Instructor List</a>
                    <a href="">Instructor Slider</a>
                    <a href="">Advanced Course Search</a>
                    <a href="">Linked Image List</a>
                  </div>
                  <div className="col-lg-3 Elements-bottom-child-elemnts-any">
                    <h1>CLASSIC</h1>
                    <a href="">Accordions & Toggles</a>
                    <a href="">Tabs</a>
                    <a href="">Buttons</a>
                    <a href="">Calls to Action</a>
                    <a href="">Blog Lists</a>
                    <a href="">Contact Forms</a>
                    <a href="">Separators</a>
                    <a href="">Testimonials</a>
                    <a href="">Typography</a>
                  </div>
                  <div className="col-lg-3 Elements-bottom-child-elemnts-any">
                    <h1>INFOGRAPICH</h1>
                    <a href="">Counters</a>
                    <a href="">Countdown</a>
                    <a href="">Pie Charts</a>
                    <a href="">Google Maps</a>
                    <a href="">Process</a>
                    <a href="">Progress Bars</a>
                    <a href="">Pricing Tables</a>
                    <a href="">Interactive Icon Showcase</a>
                    <a href="">Icons with Text</a>
                  </div>
                  <div className="col-lg-3 Elements-bottom-child-elemnts-any">
                    <h1>PRESENTATION</h1>
                    <a href="">Boxes</a>
                    <a href="">Banners</a>
                    <a href="">Team</a>
                    <a href="">Clients</a>
                    <a href="">Twitter List</a>
                    <a href="">Product List</a>
                    <a href="">Event List</a>
                    <a href="">Image Gallery</a>
                    <a href="">Video Buttons</a>
                  </div>
                </ul>
              </li>
              <li className="any-hover">
                <a href="">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
              <li className="any-hover">
                <a href="">
                  <i class="fa-solid fa-bars"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="Bars-ions-link col-md-6 col-lg-7">
            <i onClick={OpenCloseClick} class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      
        <div className={`overlay ${menuOpen ? "overlay-active" : ""}`}>
          <a  className="closebtn"><i onClick={OpenCloseClick} class="fa-solid fa-bars"></i></a>
          <div className="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
      
    </header>
  );
};

export default Navbar;
