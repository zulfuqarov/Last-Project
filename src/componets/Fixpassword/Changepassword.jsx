import React, { useState, useEffect } from "react";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";

const Changepassword = () => {
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

  // password validaion start
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
      document.getElementById("password"),
      document.getElementById("repassword"),
    ];
    const isAnyInvalid = inputlar.every((input) =>
      input.classList.contains("is-valid")
    );

    if (isAnyInvalid) {
      alert("password ugurla deyisdirildi");

      const LocalConfirmPassword = JSON.parse(localStorage.getItem("password"));
      LocalConfirmPassword.push(passwordInput);
      localStorage.setItem("password", JSON.stringify(LocalConfirmPassword));

      return;
    } else if (!isAnyInvalid) {
      alert("xahis edilir duzgun daxil olasiz");
    }
    CheckRequired(inputlar);
    CheckLength(nameInput);
    CheckEmail(emailInput);
    CheckPasswordCorrect(passwordInput, repasswordInput);
  }
  // submit confirm end

  return (
    <section className="Confirm-password">
      <NavbarLinksAlllHeader
        ClassNameProps="Teacher-back-fon d-flex position-relative"
        span=" Confirm-password"
        links=" Confirm-password"
      />
      <form id="form" className="sign-Form-div container mt-5">
        <div class="form-group">
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
        <div class="form-group mt-3">
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
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-primary mt-3"
        >
          GET IT NOW
        </button>
      </form>
    </section>
  );
};

export default Changepassword;
