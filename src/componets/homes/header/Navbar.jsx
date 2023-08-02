import React, { useEffect, useState } from "react";
// img start
import Logo from "./img/logo-dark.png";
import corusesimg1 from "./img/course-img-1.jpg";
import corusesimg2 from "./img/course-img-2.jpg";
import corusesimg3 from "./img/course-img-6.jpg";
// img end
import "./Navbar.css";
const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("rgba(0, 0, 0, 0.25)");
  // navbar scroll start
  const handleScroll = () => {
    // Scroll olayının gerçekleştiği noktayı alın
    const scrollY = window.scrollY;

    // Scroll değerine göre navbar rengini belirleyin
    if (scrollY > 50) {
      setNavbarColor("white");
    } else {
      setNavbarColor("rgba(0, 0, 0, 0.25)");
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
  // -----------------
  // action click start
  const [action, setaction] = useState(false);
  const homeActionClick = () => {
    setaction(!action);
  };
  const [CoursesAction, setCoursesAction] = useState(false);
  const coursesActionClick = () => {
    setCoursesAction(!CoursesAction);
  };
  const [EventsAction, setEventsAction] = useState(false);
  const EventsActionClick = () => {
    setEventsAction(!EventsAction);
  };
  const [pagesAction, setpagesAction] = useState(false);
  const pagesActionClick = () => {
    setpagesAction(!pagesAction);
  };
  const [ShopAction, setShopAction] = useState(false);
  const shopActionClick = () => {
    setShopAction(!ShopAction);
  };
  const [BlogAction, setBlogAction] = useState(false);
  const BlogActionClick = () => {
    setBlogAction(!BlogAction);
  };
  const [ElementsAction, setElementsAction] = useState(false);
  const ElementsActionClick = () => {
    setElementsAction(!ElementsAction);
  };
  // bottom acartion start
  const [FormAction, setFormAction] = useState(false);
  const FormActionsClick = () => {
    setFormAction(!FormAction);
  };
  const [gallerAction, setgalleryAction] = useState(false);
  const galleryActionsClick = () => {
    setgalleryAction(!gallerAction);
  };
  const [layotsAction, setlayotsAction] = useState(false);
  const layotsActionsClick = () => {
    setlayotsAction(!layotsAction);
  };
  const [pagestAction, setpagestAction] = useState(false);
  const pagestActionClick = () => {
    setpagestAction(!pagestAction);
  };
  const [postTypseAction, setpostTypseAction] = useState(false);
  const postTypseActionClick = () => {
    setpostTypseAction(!postTypseAction);
  };
  const [shortCodesAction, setshortCodesAction] = useState(false);
  const shortCodesActionClick = () => {
    setshortCodesAction(!shortCodesAction);
  };
  const [classicAction, setclassicAction] = useState(false);
  const classicActionClick = () => {
    setclassicAction(!classicAction);
  };
  const [infographicAction, setinfographicAction] = useState(false);
  const infographicActionClick = () => {
    setinfographicAction(!infographicAction);
  };

  // bottom acartion end

  // action click end
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
                    <a href="#">
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
      
    {/* overlay menu accardions start */}
      <div className={`overlay ${menuOpen ? "overlay-active" : ""}`}>
        <a className="closebtn">
          <i onClick={OpenCloseClick} className="fa-solid fa-x"></i>
        </a>
        <div className="overlay-content">
          <ul>
            <li>
              <a onClick={homeActionClick} href="#">
                HOME <i className="fa-solid fa-angle-right"></i>
              </a>
              <ul
                className={`mobile-nav-any ${
                  action ? " mobile-nav-any-actiove" : ""
                }`}
              >
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
                  <a href="">Ballent School</a>
                </li>
                <li>
                  <a href="">Landing</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={coursesActionClick} href="#">
                COURSES <i className="fa-solid fa-angle-right"></i>
              </a>
              <ul
                className={`mobile-nav-any ${
                  CoursesAction ? " mobile-nav-any-actiove" : ""
                }`}
              >
                <li>
                  <a href="">Courses List 3 Columns</a>
                </li>
                <li>
                  <a href="">Courses List 4 Coluumns</a>
                </li>
                <li>
                  <a href="">Course Single</a>
                </li>
                <li>
                  <a href="">Course Simple Single</a>
                </li>
                <li>
                  <a href="">User Dashboard</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={EventsActionClick} href="#">
                EVENTS <i className="fa-solid fa-angle-right"></i>
                </a>
                <ul
                  className={`mobile-nav-any ${
                    EventsAction ? " mobile-nav-any-actiove" : ""
                  }`}
                >
                  <li>
                    <a href="">Events Calendar</a>
                  </li>
                  <li>
                    <a href="">Events List</a>
                  </li>
                  <li>
                    <a href="">Events Single</a>
                  </li>
                </ul>
            </li>
            <li>
              <a onClick={pagesActionClick} href="#">
                PAGES <i className="fa-solid fa-angle-right"></i>
              </a>
              <ul
                className={`mobile-nav-any ${
                  pagesAction ? " mobile-nav-any-actiove" : ""
                }`}
              >
                <li>
                  <a href="">our Teachers</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">About me</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">FAQ Page</a>
                </li>
                <li>
                  <a onClick={FormActionsClick} href="#">
                    Forum
                  </a>{" "}
                  <i class="fa-solid fa-caret-right"></i>
                  <ul
                    className={`mobile-nav-any ${
                      FormAction ? " mobile-nav-any-actiove" : ""
                    }`}
                  >
                    <li>
                      <a href="">Forum-list</a>
                    </li>
                    <li>
                      <a href="">Forum Topic</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a onClick={galleryActionsClick} href="#">
                    Gallery
                  </a>{" "}
                  <i class="fa-solid fa-caret-right"></i>
                  <ul
                    className={`mobile-nav-any ${
                      gallerAction ? "mobile-nav-any-actiove" : ""
                    }`}
                  >
                    <li>
                      <a href="">Standard Two Columns</a>
                    </li>
                    <li>
                      <a href="">Standard Three Columns</a>
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
            <li>
              <a onClick={shopActionClick} href="#">
                SHOP <i className="fa-solid fa-angle-right"> </i>
              </a>
                <ul
                  className={`mobile-nav-any ${
                    ShopAction ? " mobile-nav-any-actiove" : ""
                  }`}
                >
                  <li>
                    <a href="">shop List</a>
                  </li>
                  <li>
                    <a href="">Product Single</a>
                  </li>
                  <li>
                    <a onClick={layotsActionsClick} href="#">Layouts</a>{" "}
                    <i class="fa-solid fa-caret-right"></i>
                    <ul className={`mobile-nav-any ${
                    layotsAction ? " mobile-nav-any-actiove" : ""
                  }`}>
                      <li>
                        <a href="">Three Columns Grid</a>
                      </li>
                      <li>
                        <a href="">Four Columns Grid</a>
                      </li>
                      <li>
                        <a href="">Five Columns Wide</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a onClick={pagestActionClick} href="#">Pages</a> <i class="fa-solid fa-caret-right"></i>
                    <ul className={`mobile-nav-any ${
                    pagestAction ? " mobile-nav-any-actiove" : ""
                  }`}>
                      <li>
                        <a href="">My Account</a>
                      </li>
                      <li>
                        <a href="">Cart</a>
                      </li>
                      <li>
                        <a href="">Checkout</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              
            </li>
            <li>
              <a onClick={BlogActionClick} href="#">
                BLOG <i className="fa-solid fa-angle-right"></i>
              </a>
              <ul
                className={`mobile-nav-any ${
                  BlogAction ? " mobile-nav-any-actiove" : ""
                }`}
              >
                <li>
                  <a href="">Standard List</a>
                </li>
                <li>
                  <a href="">Masonry List</a>
                </li>
                <li>
                  <a onClick={postTypseActionClick} href="#">Post Types</a>{" "}
                  <i class="fa-solid fa-caret-right"></i>
                  <ul
                  className={`mobile-nav-any ${
                    postTypseAction ? "mobile-nav-any-actiove" : ""
                  }`}
                  >
                    <li>
                      <a href="">Standard Post</a>
                    </li>
                    <li>
                      <a href="">Gallery Post</a>
                    </li>
                    <li>
                      <a href="">Link Post</a>
                    </li>
                    <li>
                      <a href="">Quote Post</a>
                    </li>
                    <li>
                      <a href="">Video Psot</a>
                    </li>
                    <li>
                      <a href="">audio Post</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={ElementsActionClick} href="#">
                ELEMENTS <i className="fa-solid fa-angle-right"></i>
              </a>
              <ul
                className={`mobile-nav-any ${
                  ElementsAction ? " mobile-nav-any-actiove" : ""
                }`}
              >
                <li>
                  <a onClick={shortCodesActionClick} href="#">Course Shortcodes</a>{" "}
                  <i class="fa-solid fa-caret-right"></i>
                  <ul
                  className={`mobile-nav-any ${
                    shortCodesAction ? " mobile-nav-any-actiove" : ""
                  }`}
                  >
                    <li>
                      <a href="">Course List</a>
                    </li>
                    <li>
                      <a href="">Course Slider</a>
                    </li>
                    <li>
                      <a href="">Course Table</a>
                    </li>
                    <li>
                      <a href="">Course Features</a>
                    </li>
                    <li>
                      <a href="">Instructor Slider</a>
                    </li>
                    <li>
                      <a href="">Instructor List</a>
                    </li>
                    <li>
                      <a href="">Advanced Course Search</a>
                    </li>
                    <li>
                      <a href="">Linked Image List</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a onClick={classicActionClick} href="#">Classic</a> <i class="fa-solid fa-caret-right"></i>
                  <ul className={`mobile-nav-any ${
                    classicAction ? " mobile-nav-any-actiove" : ""
                  }`}>
                    <li>
                      <a href="">Accordions & Toggles</a>
                    </li>
                    <li>
                      <a href="">Tabs</a>
                    </li>
                    <li>
                      <a href="">Buttons</a>
                    </li>
                    <li>
                      <a href="">Calls to Action</a>
                    </li>
                    <li>
                      <a href="">Blog Lists</a>
                    </li>
                    <li>
                      <a href="">Contact Forms</a>
                    </li>
                    <li>
                      <a href="">Separtors</a>
                    </li>
                    <li>
                      <a href="">Testiomnials</a>
                    </li>
                    <li>
                      <a href="">Typography</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a onClick={infographicActionClick} href="#">Infograpich</a>{" "}
                  <i class="fa-solid fa-caret-right"></i>
                  <ul
                  className={`mobile-nav-any ${
                    infographicAction ? " mobile-nav-any-actiove" : ""
                  }`}
                  >
                    <li>
                      <a href="">Counters</a>
                    </li>
                    <li>
                      <a href="">Countdown</a>
                    </li>
                    <li>
                      <a href="">Pie Charts</a>
                    </li>
                    <li>
                      <a href="">Google Maps</a>
                    </li>
                    <li>
                      <a href="">Process</a>
                    </li>
                    <li>
                      <a href="">Progress Bars</a>
                    </li>
                    <li>
                      <a href="">Pricing Tables</a>
                    </li>
                    <li>
                      <a href="">Interactive Icon Showcase</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    {/* overlay menu accardions end */}
    </header>
  );
};

export default Navbar;
