import React, { useEffect, useState } from "react";
import NavbarLinksAlllHeader from "../../navbar-all-links-header/NavbarLinksAlllHeader";
import axios from "axios";
import "./MyAccount.css";
import { Link } from "react-router-dom";

const MyAccount = () => {
 

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
            {/* <a className="d-block pb-4" href="">
              Lost your password
            </a> */}
            <Link to="/Change-Password" className="d-block pb-4">Lost your password</Link>

            <Link to="/Sign">Sign</Link>
          </div>
        </form>
      </section>
    </section>
  );
};

export default MyAccount;
