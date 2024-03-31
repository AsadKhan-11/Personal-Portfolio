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
                <label htmlFor="Fname">First name</label>
                <input
                  name="firstname"
                  id="firstname"
                  type="txt"
                  className="contact-info"
                  required
                  onChange={changeName}
                  value={details.firstname}
                />
              </div>
              <div className="full-first">
                <label htmlFor="Lname">Last name</label>
                <input
                  name="lastname"
                  id="lastname"
                  type="txt"
                  className="contact-info"
                  required
                  onChange={changeName}
                  value={details.lastname}
                />
              </div>
            </div>
            <div className="mail-info">
              <div className="full-first">
                <label htmlFor="mail">Email</label>
                <input
                  name="emailfrom"
                  id="emailfrom"
                  type="email"
                  className="contact-info"
                  required
                  onChange={changeName}
                  value={details.emailfrom}
                />
              </div>
              <div className="full-first">
                <label htmlFor="description">Message</label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  className="contact-info"
                  onChange={changeName}
                  value={details.message}
                />
              </div>
            </div>
            <div className="sub-btn">
              <input type="submit" className="submit contact-info" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
