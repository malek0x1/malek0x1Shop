import React from "react";
import Announcement from "../../Components/Announcement";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import "./style.scss";
const ContactUs = () => {
  return (
    <div className="contactUs">
      <Announcement message="Welcome To Our Store !" />
      <Header />
      <div className="contactUs__wrapper">
        <h1 className="contactUs__wrapper__heading">Contact Us</h1>
        <div className="contactUs__wrapper__fields">
          <input
            placeholder="Your name"
            type="text"
            className="contactUs__wrapper__fields__field"
          />
          <input
            placeholder="Your email"
            type="email"
            className="contactUs__wrapper__fields__field"
          />
          <textarea
            type="text"
            rows={6}
            placeholder="Type Message..."
            className="contactUs__wrapper__fields__field"
          ></textarea>
          <Button text="Submit" className="contactUs__wrapper__fields__btn" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
