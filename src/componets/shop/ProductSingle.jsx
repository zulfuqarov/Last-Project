import React, { useState } from "react";
import "./ProductSingle.css";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";
import { useContext } from "react";
import { BooksContext } from "../../App";
import ShopListCarts from "./shopcartsprops/ShopListCarts";

// img start
import showdiv3img from "./img/858b71dbec77b00dbeb8288ab963f4d2.jpeg";
// img end
const ProductSingle = () => {
  const context = useContext(BooksContext);

  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const ShowDivClick1 = () => {
    setShowDiv1(!showDiv1);
    setShowDiv2(false);
    setShowDiv3(false);
  };
  const ShowDivClick2 = () => {
    setShowDiv2(!showDiv2);
    setShowDiv1(false);
    setShowDiv3(false);
  };
  const ShowDivClick3 = () => {
    setShowDiv3(!showDiv3);
    setShowDiv1(false);
    setShowDiv2(false);
  };

  return (
    <div className="Product-Single">
      <NavbarLinksAlllHeader
        span="Shop"
        links="Home  /  Shop  /  Business  /  Art Of Seo"
      />
      <section className="Product-Singl-carts container">
        <div className="row">
          <div className="Product-Singl-carts-left  col-lg-6">
            {context.booksShopping.slice(4, 5).map((book) => (
              <img src={book.img} alt="" />
            ))}
          </div>
          <div className="Product-Singl-carts-right col-lg-6">
            {context.booksShopping.slice(4, 5).map((book) => (
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
                  <h1>{context.state.totalcount}</h1>
                  <div className="Product-Singl-carts-right-counter-p ">
                    <p
                      onClick={() => {
                        context.Upcount(book);
                      }}
                    >
                      +
                    </p>
                    <p
                      onClick={() => {
                        context.Downcount(book);
                      }}
                    >
                      -
                    </p>
                  </div>
                  <div className="Product-Singl-carts-right-counter-button">
                    <button
                      onClick={() => {
                        context.AddToCartd(book);
                      }}
                    >
                      add to cartd
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <div className="Product-Singl-btn ">
          <button onClick={ShowDivClick1}>
            <i className="px-3 fs-5 fa-solid fa-id-card"></i>Description
          </button>
          <button onClick={ShowDivClick2}>
            <i className=" px-3 fs-5 fa-regular fa-star"></i>Addiitional
            Information
          </button>
          <button onClick={ShowDivClick3}>
            <i className="px-3 fs-5 fa-regular fa-star"></i>Reviws (1){" "}
          </button>
        </div>
        <div className="Product-Singl-btn-showdiv-bottom">
          {showDiv1 && (
            <div className="showdiv1">
              <span>
                Vis ex scriptorem mediocritatem. Paulo interesset et his, et vis
                modo unum <br /> periculis. Wisi appareat vel eu, no ius unum
                vituperata. Duo et purto doming, no <br /> summo iusto ponderum
                usu minim vidisse.
              </span>
            </div>
          )}
          {showDiv2 && (
            <div className="showdiv2">
              <h1>Weight:</h1> <span>1.2 kg</span> <br />
              <h1>Dimensions:</h1> <span>45 × 12 × 45 cm</span> <br />
              <h1>Material:</h1> <span>Hardcover</span>
            </div>
          )}
          {showDiv3 && (
            <div className="showdiv3">
              <h1>1 review for Art Of Seo</h1>
              <div className="d-flex">
                <div>
                  <img src={showdiv3img} alt="" />
                </div>
                <div className="Art-Of-Seo px-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i> <br />
                  <p>Jane Doe</p>
                  <span>
                    – July 14, 2017 <br /> Lorem ipsum dolor sit amet, qui et
                    tota fuisset. Case invenire assueverit <br /> ad his, eirmod
                    pertinax scriptorem eu sed. Pro cu nonumy prompta <br />{" "}
                    petentium, id everti intellegat mei.
                  </span>
                </div>
              </div>
              <div className="Art-Of-Seo-bottom">
                <span>
                  Add a review <br /> Your email address will not be published.
                  Required fields are marked * <br /> Your rating * <br />
                </span>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i> <br />
                <span>Your review *</span>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="Product-Single-bottom-carts container">
        <div className="row">
          {context.booksShopping.slice(4, 7).map((book) => (
            <ShopListCarts
              AddToCartd={() => context.AddToCartd(book)}
              BookImg={book.img}
              BookName={book.name}
              BookFilterPrice={book.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductSingle;
