import React from "react";
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
      .catch(() => {
        alert("Error sending email");
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

          <form id="contact-form" onSubmit={sendEmail}>
            <div className="fullname">
              <div className="full-first">
                <label htmlFor="Fname">First name</label>
                <input
                  name="firstname"
                  id="firstname"
                  type="txt"
                  className="contact-info"
                  required
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
                />
              </div>
              <div className="full-first">
                <label htmlFor="description">Message</label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  className="contact-info"
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
