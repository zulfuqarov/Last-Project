import React from "react";
import "./ShopList.css";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";
import { BooksContext } from "../../App";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import ShopListCarts from "./shopcartsprops/ShopListCarts";

const itemsPerPage = 9;

const ShopList = () => {
  const context = useContext(BooksContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterValue, setFilterValue] = useState(50); // Başlangıçta 50 olarak ayarladık.

  // input change start
  const inputPriceChange = (e) => {
    setFilterValue(e.target.value);
  };
  // input change end

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {}, [currentPage]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = context.state.bookList
    .slice(startIndex, endIndex)
    .map((item) => ({
      ...item,
      qiymet: item.price,
      filterPrice: item.qiymet <= 25 ? item.price : item.price,
    }))
    .filter((item) => item.qiymet < filterValue);

  return (
    <section className="Shop-List">
      <NavbarLinksAlllHeader ClassNameProps="Teacher-back-fon d-flex position-relative" span="Shop" links="shop" />
      <section className="Shop-list-carts">
        <div className="container">
          <div className="row">
            <div className="Shop-list-carts-left   col-12  col-xl-9">
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
                {visibleItems.map((book) => (
                  <ShopListCarts AddToCartd={() => context.AddToCartd(book)} BookImg={book.img} BookName={book.name} BookFilterPrice={book.filterPrice} />
                ))}
              </div>
            </div>
            <div className="Shop-list-carts-right  col-12  col-xl-3">
              <h1>Filter </h1>
              <div className="Shop-list-carts-right-top pt-3">
                <input
                  type="range"
                  min={13}
                  max={context.state.length}
                  value={filterValue}
                  onChange={inputPriceChange}
                />
                <h1>{filterValue}$</h1>
              </div>
              <h1 className="pt-5">Products</h1>
              <div className="Shop-list-carts-right-center pt-5">
                {context.booksShopping.slice(0, 3).map((book) => (
                  <div>
                    <div className="Shop-list-carts-right-center-product">
                      <div className="Shop-list-carts-right-center-product-img">
                        <img src={book.img} alt="" />
                      </div>
                      <div className="Shop-list-carts-right-center-product-about">
                        <h1>{book.name}</h1>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <span>${book.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h1 className="pt-5">Categories</h1>
              <div className="Shop-list-carts-right-bottom  pt-5">
                <a href="#">Art & Design</a>
                <a href="#">Business</a>
                <a href="#">Development</a>
                <a href="#">It & Software</a>
                <a href="#">Languages</a>
                <a href="#">Uncategorized</a>
              </div>
              <h1 className="pt-5">Tags</h1>
              <div className="Shop-list-carts-right-tags pt-5">
                <a href="#">ART</a>
                <a href="#">BOOKS</a>
                <a href="#">COLLEGE</a>
                <a href="#">DESIGN</a> <br />
                <a href="#">EVENT</a>
                <a href="#">INTERVIEW</a>
                <a href="#">MUSIC</a> <br />
                <a href="#">SCIENCE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination-div">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Sub"}
            breakLabel={"..."}
            pageCount={Math.ceil(context.state.bookList.length / itemsPerPage)}
            marginPagesDisplayed={10}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination "}
            activeClassName={"active"}
          />
        </div>
      </section>
    </section>
  );
};

export default ShopList;
