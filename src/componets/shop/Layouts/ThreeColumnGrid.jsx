import React, { useContext } from "react";
import "./ThreeColumnGrid.css";
import NavbarLinksAlllHeader from "../../navbar-all-links-header/NavbarLinksAlllHeader";
import ShopListCarts from "../shopcartsprops/ShopListCarts";
import { BooksContext } from "../../../App";

const ThreeColumnGrid = () => {
  const context = useContext(BooksContext);

  return (
    <section className="ThreeColumnGrid">
      <NavbarLinksAlllHeader
        span="Three Column Grid"
        links="Home / Three Column Grid"
      />
      <div className="container">
        <div className="row">
          {context.state.bookList.map((book) => (
            <ShopListCarts
              AddToCartd={() => context.AddToCartd(book)}
              BookImg={book.img}
              BookName={book.name}
              BookFilterPrice={book.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnGrid;
