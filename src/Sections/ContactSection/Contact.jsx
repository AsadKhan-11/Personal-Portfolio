import React, { useState } from "react";
import "./Contact.css";
import emailjs, { sendForm } from "@emailjs/browser";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    const service = import.meta.env.REACT_APP_SERVICE_ID;
    const template = import.meta.env.REACT_APP_TEMPLATE_ID;
    const publicId = import.meta.env.REACT_APP_PUBLIC_ID;

    emailjs.init(publicId);

    var form = document.getElementById("contact-form");

    emailjs
      .sendForm(service, template, form)
      .then(() => {
        alert("Email sent successfully");
      })
      .catch((error) => {
        alert("Error sending email");
      });
  };

  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    numfrom: "",
    emailfrom: "",
    message: "",
  });

  const changeName = (e) => {
    setDetails((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value;

      return helper;
    });
  };

  return (
    <>
      <section className="contact">
        <div className="contact-container">
          <div className="contact-header-txt">
            <h1 className="contact-header">
              CONTACT
              <span className="contact-sec-header"> GET IN TOUCH </span>
            </h1>
          </div>

          <form id="contact-form" name="contact-form" onSubmit={sendEmail}>
            <div className="fullname">
              <div className="full-first">
                <input
                  name="firstname"
                  id="firstname"
                  type="txt"
                  className="contact-info"
                  required
                  placeholder="First Name*"
                  onChange={changeName}
                  value={details.firstname}
                />
              </div>
              <div className="full-first">
                <input
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  type="txt"
                  className="contact-info"
                  required
                  onChange={changeName}
                  value={details.lastname}
                />
              </div>
            </div>
            <div className="fullname">
              <div className="full-first">
                <input
                  name="emailfrom"
                  id="emailfrom"
                  type="email"
                  className="contact-info"
                  placeholder="Email*"
                  required
                  onChange={changeName}
                  value={details.emailfrom}
                />
              </div>
              <div className="full-first">
                <input
                  name="numfrom"
                  id="numfrom"
                  type="tel"
                  className="contact-info"
                  placeholder="Phone Number"
                  required
                  onChange={changeName}
                  value={details.numfrom}
                />
              </div>
            </div>
            <div className="full-first">
              <input
                id="message"
                name="message"
                type="text"
                placeholder="A Few Words*"
                className="contact-info"
                onChange={changeName}
                value={details.message}
              />
            </div>
            <div className="sub-btn">
              <button type="submit" className="submit ">
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
