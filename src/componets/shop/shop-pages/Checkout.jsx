import React from "react";
import "./Checkout.css";
import NavbarLinksAlllHeader from "../../navbar-all-links-header/NavbarLinksAlllHeader";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Checkout = () => {
  // accardions start
  const [Checkout, setCheckout] = useState(false);

  const ClickCheackoutActive = () => {
    setCheckout(!Checkout);
  };

  const [Cheackout2, setCheckout2] = useState(false);

  const ClickCheckoutActive2 = () => {
    setCheckout2(!Cheackout2);
  };
  // accardions end

  // validaions succes and error start
  function ShowError(input, message = "xeta bash verdi") {
    input.className += " is-invalid";
    const divEl = input.nextElementSibling;
    divEl.innerText = message;
    divEl.className = "invalid-feedback";
  }

  function ShowSucces(input) {
    input.className = "form-control is-valid";
  }
  // validaions succes and error end

  // èmail validation start
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  function CheckEmail(email) {
    const regularExpresions =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regularExpresions.test(email.trim())) {
      setEmailError("");
      ShowSucces(emailInput);
    } else {
      setEmailError("Please enter a valid email address");
      ShowError(emailInput, "Please enter a valid email address");
    }
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmailInput(newEmail);
    CheckEmail(newEmail);
  };
  // email validation end

  const [passwordInput, setPasswordInput] = useState("");

  const [passwordError, setPasswordError] = useState("");

  function CheckPasswordCorrect(password1) {
    if (password1) {
      setPasswordError("");
      ShowSucces(passwordInput);
    } else {
      setPasswordError("Passwords do not match");
      ShowError(passwordInput, "Passwords do not match");
    }
  }
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPasswordInput(newPassword);
    CheckPasswordCorrect(newPassword);
  };

  function CheckRequired(inputlar) {
    inputlar.forEach(function (birInput) {
      if (birInput.value === "") {
        ShowError(birInput, "The field is required.");
      }
    });
  }

  // loacl storage start
  const SignLocalEmail = localStorage.getItem("E-mail");
  const SignLocalpassword = localStorage.getItem("password");
  const SignLocalEmailParse = JSON.parse(SignLocalEmail) || [];
  const SignLocalpasswordParse = JSON.parse(SignLocalpassword) || [];

  // loacl storage end

  // submit confirm start
  async function handleFormSubmit(e) {
    e.preventDefault();

    const inputlar = [
      document.getElementById("email"),
      document.getElementById("password"),
    ];
    const isAnyInvalid = inputlar.every((input) =>
      input.classList.contains("is-valid")
    );

    if (isAnyInvalid) {
      if (
        SignLocalEmailParse.includes(emailInput) &&
        SignLocalpasswordParse.includes(passwordInput)
      ) {
        alert("girish ugurla tamamlandi email sms gonderildi");
        try {
          const response = await axios.get(
            `http://localhost:3001/send-email?to=${emailInput}`
          );

          if (response.status === 200) {
            console.log("E-posta gönderildi.");
          } else {
            console.log("E-posta gönderilemedi.");
          }
        } catch (error) {
          console.error("Bir hata oluştu:", error);
        }
      } else {
        alert("email,password or wrong");
      }

      return;
    } else if (!isAnyInvalid) {
      alert("xahis edilir duzgun daxil olasiz");
    }

    CheckRequired(inputlar);
    CheckEmail(emailInput);
    CheckPasswordCorrect(passwordInput);
  }

  return (
    <section className="Cheackout-section">
      <NavbarLinksAlllHeader
        ClassNameProps="Teacher-back-fon d-flex position-relative"
        span="Checkout"
        links="Checkout"
      />
      <div className="container">
        <div className="Cheackout-accardion1">
          <div className="Cheackout-top">
            <span>Returning customer?</span>
            <a onClick={ClickCheackoutActive} href="#">
              Click here to login
            </a>
          </div>
          <div
            className={`Cheackout-bottom
          ${Checkout ? "Cheackout-bottom-active" : ""}
          `}
          >
            <span>
              If you have shopped with us before, please enter your details
              below. If you are a new customer, please proceed to the Billing
              section.
            </span>

            <form id="form" className="sign-Form-div pt-4">
              <div className="form-group pb-4">
                <label className="pb-2" htmlFor="">
                  Username or email address *
                </label>
                <input
                  placeholder="Enter email"
                  type="email"
                  className={`form-control ${
                    emailError ? "is-invalid" : emailInput ? "is-valid" : ""
                  }`}
                  id="email"
                  value={emailInput}
                  onChange={handleEmailChange}
                />
                <div className="invalid-feedback">{emailError}</div>
              </div>
              <div class="form-group pb-5">
                <label className="pb-2" htmlFor="">
                  Password *
                </label>
                <input
                  placeholder="Enter password"
                  type="password"
                  className={`form-control ${
                    passwordError
                      ? "is-invalid"
                      : passwordInput
                      ? "is-valid"
                      : ""
                  }`}
                  id="password"
                  value={passwordInput}
                  onChange={handlePasswordChange}
                />
                <div className="invalid-feedback">{passwordError}</div>
              </div>
              <div className="Section-Login-remember">
                <input type="checkbox" />
                <span className="pe-3 ps-3">Remember me</span>
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="btn btn-primary Section-Login-btn d-inline-block"
                >
                  LOGIN IN
                </button>

                <Link to="/Change-Password" className="d-block pb-4">
                  Lost your password
                </Link>

                <Link to="/Sign">Sign</Link>
              </div>
            </form>
          </div>
        </div>

        <div className="Cheackout-accardion2">
          <div className="Cheackout-top">
            <span>Have a coupon?</span>
            <a onClick={ClickCheckoutActive2} href="#">
              Click here to enter your code
            </a>
          </div>
          <div
            className={`Cheackout-bottom 
           ${Cheackout2 ? "Cheackout-bottom-active2" : ""}
          `}
          >
            <div className="form-group pb-4">
              <label className="pb-2" htmlFor="">
                If you have a coupon code, please apply it bellow.
              </label>
              <input
                placeholder="Coupon code"
                type="text"
                className={`form-control ${
                  emailError ? "is-invalid" : emailInput ? "is-valid" : ""
                }`}
                id="email"
                value={emailInput}
                onChange={handleEmailChange}
              />
              <div className="invalid-feedback">{emailError}</div>
            </div>
          </div>
        </div>

        <section className="Cheackout-section-center row">
          <div className="Cheackout-section-left col-12 col-md-6">
            <h1>Billing details</h1>
            <div>
              {/* <div className="form-group pb-4">
                <label className="pb-2" htmlFor="">
                  If you have a coupon code, please apply it bellow.
                </label>
                <input
                  placeholder="Coupon code"
                  type="text"
                  className={`form-control ${
                    emailError ? "is-invalid" : emailInput ? "is-valid" : ""
                  }`}
                  id="email"
                  value={emailInput}
                  onChange={handleEmailChange}
                />
                <div className="invalid-feedback">{emailError}</div>
              </div>
              <div className="form-group pb-4">
                <label className="pb-2" htmlFor="">
                  If you have a coupon code, please apply it bellow.
                </label>
                <input
                  placeholder="Coupon code"
                  type="text"
                  className={`form-control ${
                    emailError ? "is-invalid" : emailInput ? "is-valid" : ""
                  }`}
                  id="email"
                  value={emailInput}
                  onChange={handleEmailChange}
                />
                <div className="invalid-feedback">{emailError}</div>
              </div> */}
            </div>
          </div>
          <div className="Cheackout-section-right col-12 col-md-6">
            <h1>Additional information</h1>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Checkout;
