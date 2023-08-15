import React from "react";



const NavbarLinksAlllHeader = ({ links, span }) => {
  return (
    <div className="Teacher-back-fon d-flex position-relative">
      <div className="container d-flex justify-content-between">
        <h1>{span}</h1>
        <a href="#">Home / {links}</a>
      </div>
    </div>
  );
};

export default NavbarLinksAlllHeader;
