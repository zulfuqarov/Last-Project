import React, { useContext, useEffect } from "react";
import "./Checkout.css";
import NavbarLinksAlllHeader from "../../navbar-all-links-header/NavbarLinksAlllHeader";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BooksContext } from "../../../App";

const Checkout = () => {
  // usecontext start
  const context = useContext(BooksContext);
  // usecontext end

  const totalPriceBooks = context.state.cart
    .reduce((total, book) => (total = total + book.price * book.counts), 0)
    .toFixed(2);
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
  // name validation start
  const [nameInput, setnameInput] = useState("");
  const [nameError, setnameError] = useState("");

  function CheckLength(name) {
    if (name.length < 4) {
      setnameError(" MUST BE FROM AT LEAST 4 LETTERS");
      ShowError(nameInput, "NAME MUST BE FROM AT LEAST 4 LETTERS");
    } else if (name.length >= 20) {
      setnameError("name cannot be greater than 20 letters");
      ShowError(nameInput, "name cannot be greater than 20 letters");
    } else {
      setnameError("");
      ShowSucces(nameInput);
    }
  }

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setnameInput(newName);
    CheckLength(newName);
  };
  // name validation end
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
      document.getElementById("username"),
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
    CheckLength(nameInput);
    CheckEmail(emailInput);
    CheckPasswordCorrect(passwordInput);
  }
  // submit confirm end

  // company data start
  const [SeatchCompany, setSearchCompany] = useState("");
  const SearchCopmany = (e) => {
    setSearchCompany(e.target.value);
  };
  const [company, setcompany] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/Company")
      .then((response) => setcompany(response.data))
      .catch((error) => {
        console.error("api isdeyi basarisiz", error);
      });
  }, []);
  // copany data end

  // Cheackout-section-bootom2 accardion start
  const [radioAccardion1, setradioAccardion] = useState(false);
  const radioAccardion1Click = () => {
    setradioAccardion(!radioAccardion1);
    setradioAccardio2(false);
    setradioAccardio3(false);
  };
  const [radioAccardion2, setradioAccardio2] = useState(false);
  const radioAccardion2Click = () => {
    setradioAccardio2(!radioAccardion2);
    setradioAccardion(false);
    setradioAccardio3(false);
  };
  const [radioAccardion3, setradioAccardio3] = useState(false);
  const radioAccardion3Click = () => {
    setradioAccardio3(!radioAccardion3);
    setradioAccardion(false);
    setradioAccardio2(false)
  };

  // Cheackout-section-bootom2 accardion end
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
            <h1 className="pb-5">Billing details</h1>
            <div className="d-flex justify-content-between">
              <div className="form-group pb-4  w-50">
                <label className="pb-2 " htmlFor="">
                  First Name
                </label>
                <input
                  placeholder="First Name"
                  type="text"
                  className={`form-control ${
                    nameError ? "is-invalid" : nameInput ? "is-valid" : ""
                  }`}
                  id="username"
                  value={nameInput}
                  onChange={handleNameChange}
                />
                <div className="invalid-feedback">{nameError}</div>
              </div>
              <div className="form-group  pb-4 w-50">
                <label className="pb-2 " htmlFor="">
                  Last name *
                </label>
                <input
                  placeholder="Last name *
                  "
                  type="text"
                  className={`form-control ${
                    nameError ? "is-invalid" : nameInput ? "is-valid" : ""
                  }`}
                  id="username"
                  value={nameInput}
                  onChange={handleNameChange}
                />
                <div className="invalid-feedback">{nameError}</div>
              </div>
            </div>
            <div className="form-group pb-4">
              <label className="pb-2 " htmlFor="">
                Company name (optional)
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="form-control"
              />
            </div>
            <div className="form-group pb-4">
              <label className="pb-2 d-block" htmlFor="">
                Country / Region *
              </label>
              <input
                type="message"
                onChange={SearchCopmany}
                value={SeatchCompany}
                placeholder="Search company"
                className="form-control mb-3"
              />
              <select class="form-select" aria-label="Default select example">
                {company &&
                  company
                    .filter((OneCompany) => {
                      return SeatchCompany.toLocaleLowerCase() === ""
                        ? OneCompany
                        : OneCompany.compony
                            .toLocaleLowerCase()
                            .includes(SeatchCompany);
                    })
                    .map((OneCompany) => (
                      <option key={OneCompany.id} selected>
                        {OneCompany.compony}
                      </option>
                    ))}

                {/* <option selected>Azerbaijan</option> */}
              </select>
            </div>
            <div className="form-group pb-4">
              <label htmlFor="">Street address *</label>
              <input
                type="message"
                placeholder="House nuber and street name"
                className="form-control mt-2 mb-3"
              />
              <input
                type="message"
                placeholder="Apart suite, unit,etc (optioanl)"
                className="form-control"
              />
            </div>
            <div className="form-group pb-4">
              <label className="pb-2" htmlFor="">
                Town / City *
              </label>
              <input
                type="message"
                placeholder="Apart suite, unit,etc (optioanl)"
                className="form-control"
              />
            </div>
            <div className="form-group pb-4">
              <label className="pb-2" htmlFor="">
                Postcode / ZIP *
              </label>
              <input
                type="message"
                placeholder="Apart suite, unit,etc (optioanl)"
                className="form-control"
              />
            </div>
            <div className="form-group pb-4">
              <label htmlFor="">Phone *</label>
              <input
                type="message"
                placeholder="Apart suite, unit,etc (optioanl)"
                className="form-control"
              />
            </div>
            <div className="form-group pb-4">
              <label className="pb-2" htmlFor="">
                Email address *
              </label>
              <input
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
            <div className="pb-4">
              <input type="checkbox" />
              <span className="p-4">Create an account?</span>
            </div>
          </div>
          <div className="Cheackout-section-right col-12 col-md-6">
            <h1 className="pb-5">Additional information</h1>
            <div className="form-group pb-4">
              <label className="pb-2" htmlFor="">
                {" "}
                Order notes (optioanal)
              </label>
              <textarea
                placeholder="Notes about your order,e g special notes for delivery"
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
        </section>
        <section className="Cheackout-section-bottom">
          <h1>Your order</h1>
          <div className="Cheackout-section-bottom-any d-flex justify-content-between">
            <h4>Product </h4>
            <h4>Subtotal</h4>
          </div>
          {context.state.cart.map((book) => (
            <div className="">
              <div className="Cheackout-section-bottom-any d-flex justify-content-between">
                <span>
                  {book.name} x{book.counts}
                </span>
                <span>${(book.price * book.counts).toFixed(2)}</span>
              </div>
            </div>
          ))}
          <div className="Cheackout-section-bottom-any d-flex justify-content-between">
            <p>Sub total</p>
            <p>{totalPriceBooks}</p>
          </div>
          <div className="Cheackout-section-bottom-any d-flex justify-content-between">
            <p>Total</p>
            <p>{totalPriceBooks}</p>
          </div>
        </section>
        <section className="Cheackout-section-bootom2">
          <input onClick={radioAccardion1Click} type="radio" name="radio" />
          <span>Direct bank transfer</span>
          <div
            className={`Cheackout-section-bootom2-radio-accardion
          ${
            radioAccardion1
              ? "Cheackout-section-bootom2-radio-accardion-active"
              : ""
          }
          `}
          >
            <p>
              Make your payment directyl our bank account. Please use your Order
              ID as the payment reference. Your order will not be shipped until
              the funds have cleared in our account
            </p>
          </div>

          <input onClick={radioAccardion2Click} type="radio" name="radio" />
          <span>Direct bank transfer</span>
          <div
            className={`Cheackout-section-bootom2-radio-accardion
          ${
            radioAccardion2
              ? "Cheackout-section-bootom2-radio-accardion-active"
              : ""
          }
          `}
          >
            <p>
              Please send a check to Store Name, Store Street, Store Town, Store
              State / County, Store Postcode.
            </p>
          </div>

          <input onClick={radioAccardion3Click} type="radio" name="radio" />
          <span>Direct bank transfer</span>
          <div className={`Cheackout-section-bootom2-radio-accardion
          ${radioAccardion3 ? "Cheackout-section-bootom2-radio-accardion-active" : ""}`}>
            <p>Pay with cash upon delivery.</p>
          </div>

          <div className="Cheackout-section-bootom2-btn">
            <button className="">Place Order</button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Checkout;
