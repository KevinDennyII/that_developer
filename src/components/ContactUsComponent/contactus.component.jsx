import React from "react";
import emailjs from "emailjs-com";

import {contactUsForm} from "./contactus.module.scss";

const ContactusComponent = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l0rvoye", "template_vndqkt5", e.target, "user_l0oK6TFE1fDsOnX5tnF76")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div >
      <form className={contactUsForm} onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="reply_to" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactusComponent;
