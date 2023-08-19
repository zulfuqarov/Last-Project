import React from "react";



const NavbarLinksAlllHeader = ({ links, span,ClassNameProps }) => {
  return (
    <div className={ClassNameProps}>
      <div className="container d-flex justify-content-between">
        <h1>{span}</h1>
        <a href="#">Home / {links}</a>
      </div>
    </div>
  );
};

export default NavbarLinksAlllHeader;
