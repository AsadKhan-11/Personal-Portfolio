import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-header-txt">
          <h1 className="contact-header">CONTACT</h1>
          <h1 className="contact-sec-header">GET IN TOUCH</h1>
        </div>

        <form action="" id="contact-form">
          <div className="fullname">
            <div className="full-first">
              <label htmlFor="Fname">First name</label>
              <input type="txt" className="contact-info" required />
            </div>
            <div className="full-first">
              <label htmlFor="Lname">Last name</label>
              <input type="txt" className="contact-info" required />
            </div>
          </div>
          <div className="mail-info">
            <div className="full-first">
              <label htmlFor="mail">Email</label>
              <input type="email" className="contact-info" required />
            </div>
            <div className="full-first">
              <label htmlFor="description">Message</label>
              <input type="text" className="contact-info" />
            </div>
          </div>
          <div className="sub-btn">
            <input type="submit" className="submit contact-info" />
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
