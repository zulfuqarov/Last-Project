import React from "react";

import sekil55 from "../shop/product-img-2-600x600.jpg";

const NavbarLinksAlllHeader = ({ links, span }) => {
  return (
    <div className="Teacher-back-fon d-flex position-relative">
      <div className="container d-flex justify-content-between">
        <h1>{span}</h1>
        <a href="#">Home / {links}</a>
        <div className="shopping-icons">
          <div className="shopping-icons-top d-flex justify-content-between">
            <div className="shopping-icons-img">
              <img src={sekil55} alt="" />
            </div>
            <div className="shopping-icons-top-span">
              <span>ededed</span> <br />
              <span>loololol</span>
            </div>
            <div>
              <i class="fa-regular fa-circle-xmark"></i>
            </div>
          </div>
          <div className="shopping-icons-bottom">
            <div className="d-flex justify-content-between shopping-icons-bottom-span">
              <h1>ORDER TOTAL:</h1>
              <span>$12.00</span>
            </div>
            <div className="d-flex justify-content-between shopping-icons-bottom-btn">
              <button>WIEV CARD</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLinksAlllHeader;
