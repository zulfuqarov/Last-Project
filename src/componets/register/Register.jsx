import React from "react";
import "./Register.css";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";
import Sign from "../homes/sections/propssign/SignProps";
const Register = () => {
  return (
    <section className="Register-section container">
        <NavbarLinksAlllHeader  ClassNameProps="Teacher-back-fon d-flex position-relative"
        span="Sign"
        links="Sign"/>
      <Sign/>
    </section>
  );
};

export default Register;
