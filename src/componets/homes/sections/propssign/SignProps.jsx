import React, { useState } from "react";
const SignProps = () => {
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

  // ------------------------------------

  // name validation start
  const [nameInput, setnameInput] = useState("");
  const [nameError, setnameError] = useState("");

  function CheckLength(name) {
    if (name.length < 4) {
      setnameError("NAME MUST BE FROM AT LEAST 4 LETTERS");
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

  // ------------------------------

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
  function handleFormSubmit(e) {
    e.preventDefault();

    const inputlar = [
      document.getElementById("username"),
      document.getElementById("email"),
      document.getElementById("password"),
      document.getElementById("repassword"),
    ];

    CheckRequired(inputlar);
    CheckLength(nameInput);
    CheckEmail(emailInput);
    CheckPasswordCorrect(passwordInput, repasswordInput);

    const isAnyInvalid = inputlar.some((input) =>
    input.classList.contains("is-invalid")
  );

  if (isAnyInvalid) {
    // En az bir hatalı alan varsa formu submit etme
    alert("Please correct the errors before submitting.");
  } else {
    // Tüm alanlar doğruysa formu submit et veya istediğiniz işlemi yap
    alert("Form submitted successfully!");
  }
  }
  // submit confirm end
  return (
    <form id="form" className="sign-Form-div">
      <h1 className="text-center">Sign Up for Our Newsletter</h1>
      <div className="form-group">
        <input
          placeholder="Enter username"
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
      <div class="form-group">
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
      <div class="form-group">
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
        className="btn btn-primary"
      >
        GET IT NOW
      </button>
    </form>
  );
};

export default SignProps;
