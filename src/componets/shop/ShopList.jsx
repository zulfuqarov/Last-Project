import React from "react";
import "./ShopList.css";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";

import sekil from "./product-img-2-600x600.jpg";
const ShopList = () => {
  return (
    <section className="Shop-List">
      <NavbarLinksAlllHeader span="Shop" links="shop" />
      <section className="Shop-list-carts">
        <div className="container">
          <div className="row">
            <div className="Shop-list-carts-left   col-12  col-lg-9">
              <div className="d-flex justify-content-between Shop-list-carts-left-top">
                <span>Showing 1–9 of 18 results</span>
                <select name="" id="">
                  <option value="Default sorting">Default sorting</option>
                  <option value="Sort by popularity">Sort by popularity</option>
                  <option value="Sort by average">
                    Sort by average Rating
                  </option>
                  <option value="Sort by latest">Sort by latest</option>
                  <option value="Sort by price: low to high">
                    Sort by price: low to high
                  </option>
                  <option value="Sort by price: low to low">
                    Sort by price: low to low
                  </option>
                </select>
              </div>
              <div className="row">
                <div className="Shop-list-carts-left-bottom col-lg-4">
                  <div className="Shop-list-carts-left-bottom-img">
                    <img src={sekil} alt="" />
                    <div className="position-absolute">
                      <button>ADD TO CART</button>
                    </div>
                  </div>
                  <div className="text-center Shop-list-carts-left-bottom-about">
                    <span>Advanced Design</span>
                    <p>$12.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="Shop-list-carts-right  col-12  col-lg-3">
              <h1>Shop-list-carts-right </h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ShopList;
