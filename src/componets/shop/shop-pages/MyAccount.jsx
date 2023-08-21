import React, { useState } from "react";
import NavbarLinksAlllHeader from "../../navbar-all-links-header/NavbarLinksAlllHeader";
import axios from "axios";

import "./MyAccount.css";

const MyAccount = () => {


    const [navbarlinks,setnavbarlink] = useState('http://localhost:5173/')










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
  const [repasswordInput, setRepasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function CheckPasswordCorrect(password1, repassword2) {
    if (password1 === repassword2) {
      setPasswordError("");
      ShowSucces(passwordInput);
      ShowSucces(repasswordInput);
    } else {
      setPasswordError("Passwords do not match");
      ShowError(repasswordInput, "Passwords do not match");
    }
  }
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPasswordInput(newPassword);
    CheckPasswordCorrect(newPassword, repasswordInput);
  };

  const handleRepasswordChange = (e) => {
    const newRepassword = e.target.value;
    setRepasswordInput(newRepassword);
    CheckPasswordCorrect(passwordInput, newRepassword);
  };
  // password validaion end

  function CheckRequired(inputlar) {
    inputlar.forEach(function (birInput) {
      if (birInput.value === "") {
        ShowError(birInput, "The field is required.");
      }
    });
  }

  // submit confirm start
  async function handleFormSubmit(e) {
    e.preventDefault();

    const inputlar = [
      document.getElementById("email"),
      document.getElementById("password"),
      document.getElementById("repassword"),
    ];
    const isAnyInvalid = inputlar.every((input) =>
      input.classList.contains("is-valid")
    );

    if (isAnyInvalid) {
      alert("Email sms ugurla gonderildi");
      try {
        const response = await axios.get(
          `http://localhost:3001/send-email?to=${emailInput}&htmltext=${passwordInput}&links=${navbarlinks}`
        );

        if (response.status === 200) {
          console.log("E-posta gönderildi.");
          // Burada e-posta gönderildiğine dair bir bildirim veya görsel geri bildirim sağlayabilirsiniz.
        } else {
          console.log("E-posta gönderilemedi.");
        }
      } catch (error) {
        console.error("Bir hata oluştu:", error);
      }
      return;
    } else if (!isAnyInvalid) {
      alert("xahis edilir duzgun daxil olasiz");
    }

    CheckRequired(inputlar);
    CheckLength(nameInput);
    CheckEmail(emailInput);
    CheckPasswordCorrect(passwordInput, repasswordInput);
  }

  return (
    <section className="My-Account">
      <NavbarLinksAlllHeader
        ClassNameProps="Teacher-back-fon d-flex position-relative"
        span="My Account"
        links="My account"
      />
      <section className="Section-Login container">
        <form id="form" className="sign-Form-div">
          <h1 className="text-left fs-1 text pb-5">Login</h1>
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
                passwordError ? "is-invalid" : passwordInput ? "is-valid" : ""
              }`}
              id="password"
              value={passwordInput}
              onChange={handlePasswordChange}
            />
          </div>
          <div class="form-group pb-5">
            <label className="pb-2" htmlFor="">
              Repassword *
            </label>
            <input
              placeholder="Enter repassword"
              type="password"
              className={`form-control ${
                passwordError ? "is-invalid" : repasswordInput ? "is-valid" : ""
              }`}
              id="repassword"
              value={repasswordInput}
              onChange={handleRepasswordChange}
            />
            <div className={passwordError ? "invalid-feedback" : ""}>
              {passwordError}
            </div>
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
            <a className="d-block" href="">
              Lost your password
            </a>
          </div>
        </form>
      </section>
    </section>
  );
};

export default MyAccount;
