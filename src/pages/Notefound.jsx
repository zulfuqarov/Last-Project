import React from "react";
import error404img from "../assets/404.png";
import { Link } from "react-router-dom";

const Notefound = () => {
  return (
    <section className="Notefound container">
      <div className="Notefound-center">
        <h1>404</h1>
        <p>Page not found</p>
        <span>
          Oop! The page you are looking for does not exist. It might have been
          moved or deleted
        </span>
        <button className="Notefound-btn">
          <Link to="/">BACK TO HOMEPAGE</Link>
        </button>
      </div>
    </section>
  );
};

export default Notefound;
