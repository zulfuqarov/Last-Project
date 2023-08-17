import React from "react";
import "./ProductSingle.css";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";
import { useContext } from "react";
import { BooksContext } from "../../App";

const ProductSingle = () => {
  const context = useContext(BooksContext);

  return (
    <div className="Product-Single">
      <NavbarLinksAlllHeader
        span="Shop"
        links="Home  /  Shop  /  Business  /  Art Of Seo"
      />
      <section className="Product-Singl-carts container">
        <div className="row">
          <div className="Product-Singl-carts-left  col-lg-6">
            {context.booksShopping.slice(0, 1).map((book) => (
              <img src={book.img} alt="" />
            ))}
          </div>
          <div className="Product-Singl-carts-right col-lg-6">
            {context.booksShopping.slice(0, 1).map((book) => (
              <div className="Product-Singl-carts-right-about">
                <h1>{book.name}</h1>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span>${book.price}</span>
                <p>
                  Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auci elit consequat ipsutis
                  sem nibh id elit.
                </p>
                <p>Category: Business</p>
                <p>Tags: Art, Design, Interview</p>
                <div className="Product-Singl-carts-right-counter">
                    <h1>0</h1>
                    <p>+</p>
                    <p>-</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSingle;
