import React, { useState } from "react";
import NavbarLinksAlllHeader from "../../navbar-all-links-header/NavbarLinksAlllHeader";
import "./StandartPost.css";
import StandartPostimg1 from "./img/blog-img-1.jpg";
import StandartPostimg2 from "./img/0245b5dae5cdfe6a7bf50c9abbe71c31.png";
import StandartPostimg3 from "./img/commentimg2.jpeg";
import axios from "axios";

const StandardPost = () => {
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
  function CheckRequired(inputlar) {
    inputlar.forEach(function (birInput) {
      if (birInput.value === "") {
        ShowError(birInput, "The field is required.");
      }
    });
  }

  //   send message start
  const [message, setMessage] = useState("");
  const [divler, setDivler] = useState([]);
  //   send message end

  // submit confirm start
  async function handleFormSubmit(e) {
    e.preventDefault();

    const inputlar = [
      document.getElementById("username"),
      document.getElementById("email"),
    ];
    const isAnyInvalid = inputlar.every((input) =>
      input.classList.contains("is-valid")
    );

    if (isAnyInvalid) {
      alert("commit elave olundu");

      const dataUserName = JSON.parse(localStorage.getItem("userName")) || [];
      const dataEmail = JSON.parse(localStorage.getItem("E-mail")) || [];

      dataUserName.push(nameInput);
      dataEmail.push(emailInput);

      localStorage.setItem("userName", JSON.stringify(dataUserName));
      localStorage.setItem("E-mail", JSON.stringify(dataEmail));

      if (message.trim() !== "") {
        const yeniDiv = (
          <div className="StandardPost-section-left-bottom-comments-carts">
            <div className="StandardPost-section-left-bottom-comments-carts-img">
              <img src={StandartPostimg3} alt="" />
            </div>
            <div className="StandardPost-section-left-bottom-comments-carts-abouts">
              <div className="StandardPost-section-left-bottom-comments-carts-abouts-top">
                <h3>{nameInput}</h3>
                <span> August 3, 2017</span>
              </div>
              <div className="StandardPost-section-left-bottom-comments-carts-abouts-bottom">
                <span>{message}</span>
              </div>
            </div>
          </div>
        );

        setDivler((prevDivler) => [...prevDivler, yeniDiv]);
        setMessage("");
      }
      return;
    } else if (!isAnyInvalid) {
      alert("xahis edilir duzgun daxil olasiz");
    }
    CheckRequired(inputlar);
    CheckLength(nameInput);
    CheckEmail(emailInput);
  }
  // submit confirm end

  //   input send message start

  return (
    <section className="StandardPost">
      <NavbarLinksAlllHeader ClassNameProps="StandardPost-back-fon" />
      <div className="container">
        <section className="StandardPost-section row">
          <div className="StandardPost-section-left col-12 col-lg-9">
            <div className="StandardPost-section-left-top">
              <h1>
                Studying to accomplish the greatest <br /> goals
              </h1>
              <div className="StandardPost-section-left-top-tags">
                <span>July 17,2017</span>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-solid fa-tag"></i>
                <span>Education</span>
              </div>
              <span>
                Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
                sollicitudin, lorem quis bibendum auci elit consequat ipsutis
                sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                consequat auctor eu in elit. Class aptent taciti sociosquad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Mauris in erat justo. Nullam ac urna eu felis dapibus
                condimentum sit amet a augue. ed non neque elit. Sed ut
                imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
                ut aliquam massa nisl quis neque. Suspendisse in orci enim.
              </span>
              <div className="StandardPost-section-left-top-tags2">
                <p>
                  We teach, model, and encourage a love of learning,
                  collaboration, and <br /> compassion for others. Everyone a
                  learner everyday.
                </p>

                <div className="StandardPost-section-left-top-tags2-bottom">
                  <span>
                    Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
                    sollicitudin, lorem quis bibendum auci elit consequat
                    ipsutis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                    velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                    Sed non mauris vitae erat consequat auctor eu in elit. Class
                    aptent taciti sociosquad litora torquent per conubia nostra,
                    per inceptos himenaeos. Mauris in erat justo. Nullam ac urna
                    eu felis dapibus condimentum sit amet a augue. ed non neque
                    elit. Sed ut imperdiet nisi. Proin condimentum fermentum
                    nunc. Etiam pharetra, erat sed fermentum feugiat, velit
                    mauris egestas quam, ut aliquam massa nisl quis neque.
                    Suspendisse in orci enim.
                  </span>
                </div>
              </div>
              <div className="StandardPost-section-left-top-tags3">
                <div className="StandardPost-section-left-top-tags3-img">
                  <img src={StandartPostimg1} alt="" />
                </div>
                <span>
                  Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
                  sollicitudin, lorem quis bibendum auci elit consequat ipsutis
                  sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                  a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                  a odio tincidunt auctor a ornare odio. Sed non mauris vitae
                  erat consequat auctor eu in elit. Class aptent taciti
                  sociosquad litora torquent per conubia nostra, per inceptos
                  himenaeos. Mauris in erat justo. Nullam ac urna eu felis
                  dapibus condimentum sit amet a augue. ed non neque elit. Sed
                  ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                  pharetra, erat sed fermentum feugiat, velit mauris egestas
                  quam, ut aliquam massa nisl quis neque. Suspendisse in orci
                  enim.
                </span>
              </div>
            </div>

            <div className="StandardPost-section-left-bottom">
              <div className="StandardPost-section-left-bottom-header">
                <div className="StandardPost-section-left-bottom-header-top d-flex justify-content-between">
                  <p>LIBARY PHYSICS</p>
                  <div className="footer-end-social-media">
                    <a href="">
                      {" "}
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
                <div className="StandardPost-section-left-bottom-header-bottom">
                  <div className="StandardPost-section-left-bottom-header-bottom-img">
                    <img src={StandartPostimg2} alt="" />
                  </div>
                  <div className="StandardPost-section-left-bottom-header-bottom-about">
                    <h1>Craig Murphy</h1>
                    <span>
                      Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
                      sollicitudin, lorem quis bibendum auci elit consequat
                      ipsutis sem nibh id elit. Duis sed odio sit amet nibh
                      vulputate cursus a sit amet mauris.
                    </span>
                  </div>
                </div>
              </div>
              <div className="StandardPost-section-left-bottom-comments">
                <h1>Comments</h1>
                <div className="StandardPost-section-left-bottom-comments-carts">
                  <div className="StandardPost-section-left-bottom-comments-carts-img">
                    <img src={StandartPostimg3} alt="" />
                  </div>
                  <div className="StandardPost-section-left-bottom-comments-carts-abouts">
                    <div className="StandardPost-section-left-bottom-comments-carts-abouts-top">
                      <h3>Berta Adams</h3>
                      <span> August 3, 2017</span>
                    </div>
                    <div className="StandardPost-section-left-bottom-comments-carts-abouts-bottom">
                      <span>
                        Habeo autem periculis vim eu, purto vocent laoreet eos
                        in.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="StandardPost-section-left-bottom-comments-carts bottom-comments-carts-left-padding">
                  <div className="StandardPost-section-left-bottom-comments-carts-img">
                    <img src={StandartPostimg2} alt="" />
                  </div>
                  <div className="StandardPost-section-left-bottom-comments-carts-abouts">
                    <div className="StandardPost-section-left-bottom-comments-carts-abouts-top">
                      <h3>Craig Murphy</h3>
                      <span> August 3, 2017</span>
                    </div>
                    <div className="StandardPost-section-left-bottom-comments-carts-abouts-bottom">
                      <span>
                        Et est nibh recusabo. Habeo autem periculis vim eu,
                        purto vocent laoreet eos in. Te debitis blandit mel, ut
                        ius nihil vivendum accusata, nullam feugait deleniti sit
                        at.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="StandardPost-section-left-bottom-comments-carts">
                  <div className="StandardPost-section-left-bottom-comments-carts-img">
                    <img src={StandartPostimg3} alt="" />
                  </div>
                  <div className="StandardPost-section-left-bottom-comments-carts-abouts">
                    <div className="StandardPost-section-left-bottom-comments-carts-abouts-top">
                      <h3>Berta Adams</h3>
                      <span> August 3, 2017</span>
                    </div>
                    <div className="StandardPost-section-left-bottom-comments-carts-abouts-bottom">
                      <span>
                        Habeo autem periculis vim eu, purto vocent laoreet eos
                        in.
                      </span>
                    </div>
                  </div>
                </div>
                {divler.map((div) => div)}
              </div>
            </div>

            <div className="StandardPost-comment-inputs">
              <h1>Post a Comment</h1>
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <form id="form">
                <div className="d-flex flex-wrap">
                  <div className="form-group w-50 mt-4">
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
                  <div className="form-group w-50 mt-4">
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
                  <div className="form-group w-100 mt-4"></div>
                </div>
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="btn StandardPost-comment-inputs-btn float-end"
                >
                  GET IT NOW
                </button>
              </form>
            </div>
          </div>
          <div className="StandardPost-section-right col-12 col-lg-3"></div>
        </section>
      </div>
    </section>
  );
};

export default StandardPost;
