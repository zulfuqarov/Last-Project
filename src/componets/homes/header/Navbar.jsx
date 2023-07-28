import React, { useEffect, useState } from "react";
import Logo from "./img/logo-dark.png";
import "./Navbar.css";
const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("#888");

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
  return (
    <header className="Navbar" style={{ backgroundColor: navbarColor }}>
      <div className="container">
        <div className="row">
          <div className="navbar-logo col-lg-5">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-links col-lg-7">
            <ul className="navbar-links-ul d-flex justify-content-between">
              <li><a href="">HOME</a></li>
              <li><a href="">COURSES</a></li>
              <li><a href="">EVENTS</a></li>
              <li><a href="">PAGES</a></li>
              <li><a href="">SHOP</a></li>
              <li><a href="">BLOG</a></li>
              <li><a href="">ELEMENTS</a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
