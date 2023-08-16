import {} from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./componets/resetCss/Reset.css";
import Home from "./pages/Home";
import Pagesteacher from "./pages/Pagesteacher";
import Navbar from "./componets/homes/header/Navbar";
import Footer from "./componets/homes/header/Footer";
import Shop from "./pages/Shop";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import React, { createContext } from "react";

export const BooksContext = createContext();

function App() {
  const [booksShopping, setbookShopping] = useState([]);

  const [state, setstate] = useState({
    bookList: [],
    cart: [],
    totalcount: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/ShopList")
      .then((melumta) => {
        setbookShopping(melumta.data);
        setstate((melumat) => ({
          ...melumat,
          bookList: melumta.data,
        }));
      })
      .catch((error) => {
        console.error("api isdeyi basarisiz", error);
      });
  }, []);

  const AddToCartd = (book) =>
    setstate({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, counts: cartItem.counts + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, counts: 1 }],
      totalcount: state.totalcount + 1,
    });

  const RemoveCartd = (id, counts) =>
    setstate({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
      totalcount: state.totalcount - counts,
    });

  return (
    <>
      <BooksContext.Provider value={{ state: state, AddToCartd, RemoveCartd}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Teachers" element={<Pagesteacher />} />
            <Route path="Shop-List" element={<Shop />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BooksContext.Provider>
    </>
  );
}

export default App;
