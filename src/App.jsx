import {} from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./componets/resetCss/Reset.css";
import Home from "./pages/Home";
import Pagesteacher from "./pages/Pagesteacher";
import Navbar from "./componets/homes/header/Navbar";
import Footer from "./componets/homes/header/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teachers" element={<Pagesteacher />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
