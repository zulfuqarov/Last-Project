import React, { useEffect, useState } from "react";
import NavbarLinksAlllHeader from "../navbar-all-links-header/NavbarLinksAlllHeader";
import axios from "axios";

const LostPassword = () => {
  const [ChanhepasswordsLinks, setChanhepasswordsLinks] = useState("http://localhost:5173/Confirm-Password");

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

  function CheckRequired(inputlar) {
    inputlar.forEach(function (birInput) {
      if (birInput.value === "") {
        ShowError(birInput, "The field is required.");
      }
    });
  }
  //   local storage email start
  const SignLocalEmail = localStorage.getItem("E-mail");
  // local storage email end

  //   change btn start submit
  async function handleFormSubmit(e) {
    e.preventDefault();

    const inputlar = [document.getElementById("email")];
    const isAnyInvalid = inputlar.every((input) =>
      input.classList.contains("is-valid")
    );

    if (isAnyInvalid) {
      if (SignLocalEmail.includes(emailInput)) {
        alert("girish ugurla tamamlandi email sms gonderildi");
        try {
          const response = await axios.get(
            `http://localhost:3003/send-email?to=${emailInput}&ChangepaaswordLinks=${ChanhepasswordsLinks}`
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
  }
  //   change btn end submit

  return (
    <section className="change-pass-sections">
      <NavbarLinksAlllHeader
        ClassNameProps="Teacher-back-fon d-flex position-relative"
        span="Change Password"
        links="Change password"
      />
      <section className="Section-Login container">
        <form id="form" className="sign-Form-div">
          <div class="form-group">
            <label  htmlFor="">Enter your email</label>
            <input
              placeholder="Enter email"
              type="email"
              className={`form-control ${
                emailError ? "is-invalid" : emailInput ? "is-valid" : ""
              } mb-4 mt-4`}
              id="email"
              value={emailInput}
              onChange={handleEmailChange}
            />
            <div className="invalid-feedback">{emailError}</div>
          </div>
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-primary Section-Login-btn d-inline-block"
          >
            LOGIN IN
          </button>
        </form>
      </section>
    </section>
  );
};

export default LostPassword;
