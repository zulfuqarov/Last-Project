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
import ShopProc from "./pages/ShopProc";
import ThreeColumnGrid from "./componets/shop/Layouts/ThreeColumnGrid";
import Abouts from "./componets/pagesE/about/Abouts";
import MyAccount from "./componets/shop/shop-pages/MyAccount";
import Register from "./componets/register/Register";
import LostPassword from "./componets/Fixpassword/LostPassword";
import ConfirmPassword from "./componets/Fixpassword/Changepassword";
import Checkout from "./componets/shop/shop-pages/Checkout";
import Notefound from "./pages/Notefound";
import CoursesList3 from "./componets/courses/CoursesList3";
import ScrollTop from "../scrolltop/ScrollTop";

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

  const Upcount = (book) =>
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

  const Downcount = (book) =>
    setstate({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, counts: Math.max(cartItem.counts - 1, 0) }
              : cartItem
          )
        : [...state.cart, { ...book, counts: 1 }],
      totalcount: Math.max(state.totalcount - 1, 0),
    });

  return (
    <>
      <BooksContext.Provider
        value={{
          state: state,
          AddToCartd,
          RemoveCartd,
          Upcount,
          Downcount,
          booksShopping,
        }}
      >
        <BrowserRouter>
          <ScrollTop />
          <Navbar />
          <Routes>
            <Route path="/*" element={<Notefound />} />
            <Route path="/error" element={<Notefound />} />
            <Route path="/" element={<Home />} />
            <Route path="/courses-list-3-column" element={<CoursesList3 />} />
            <Route path="/Teachers" element={<Pagesteacher />} />
            <Route path="Shop-List" element={<Shop />} />
            <Route path="Product-single" element={<ShopProc />} />
            <Route path="Three-Column-Grid" element={<ThreeColumnGrid />} />
            <Route path="About" element={<Abouts />} />
            <Route path="MY-Account" element={<MyAccount />} />
            <Route path="/Sign" element={<Register />} />
            <Route path="/Change-Password" element={<LostPassword />} />
            <Route path="/Confirm-Password" element={<ConfirmPassword />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </BooksContext.Provider>
    </>
  );
}

export default App;
