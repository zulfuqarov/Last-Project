import React, { useState } from "react";
import "./ProductSingle.css";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";
import { useContext } from "react";
import { BooksContext } from "../../App";

const ProductSingle = () => {
  const context = useContext(BooksContext);

  // const [showDiv1, setShowDiv1] = useContext(false)
  // const [showDiv2, setShowDiv2] = useContext(false)
  // const [showDiv3, setShowDiv4] = useContext(false)


  // const [showDiv1, setShowDiv1] = useState(false);
  // const [showDiv2, setShowDiv2] = useState(false);
  // const [showDiv3, setShowDiv3] = useState(false);

  // const toggleDiv1 = () => {
  //   setShowDiv1(!showDiv1);
  //   // Diğer divleri kapat
  //   setShowDiv2(false);
  //   setShowDiv3(false);
  // };

  // const toggleDiv2 = () => {
  //   setShowDiv2(!showDiv2);
  //   // Diğer divleri kapat
  //   setShowDiv1(false);
  //   setShowDiv3(false);
  // };

  // const toggleDiv3 = () => {
  //   setShowDiv3(!showDiv3);
  //   // Diğer divleri kapat
  //   setShowDiv1(false);
  //   setShowDiv2(false);
  // };

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
             <button><i className="px-3 fs-5 fa-solid fa-id-card"></i>Description</button>         
             <button><i className=" px-3 fs-5 fa-regular fa-star"></i>Addiitional Information</button>         
             <button><i className="px-3 fs-5 fa-regular fa-star"></i>Reviws (1) </button>     




          {/* <button onClick={toggleDiv1}>Button 1</button>

          <button onClick={toggleDiv2}>Button 2</button>

          <button onClick={toggleDiv3}>Button 3</button>

          {showDiv1 && <div >Div 1 content</div>}
          {showDiv2 && <div>Div 2 content</div>}
          {showDiv3 && <div>Div 3 content</div>} */}
        </div>
      </section>
    </div>
  );
};

export default ProductSingle;
