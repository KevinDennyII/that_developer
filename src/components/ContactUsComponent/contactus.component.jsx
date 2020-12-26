import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { contactUsForm } from './contactus.module.scss';

const ContactusComponent = () => {
  const [emailSent, setEmailSent] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_l0rvoye',
        'template_vndqkt5',
        e.target,
        'user_l0oK6TFE1fDsOnX5tnF76',
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          setEmailSent(false);
        },
      );
  };

  return (
    <form className={contactUsForm} onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="hidden" name="contact_number" />
        <input
          className="form-control"
          id="name"
          type="text"
          name="from_name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          id="email"
          type="email"
          name="reply_to"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" id="message" name="message" />
      </div>
      <button className="btn btn-primary" type="submit" value="Send">
        Submit
      </button>
      {emailSent && (
        <p className="text-success" style={{ fontWeight: '700' }}>Email message was sent successfully!</p>
      )}
      {emailSent === false && (
        <p className="text-danger" style={{ fontWeight: '700' }}>Oh no! Your email was not sent successful</p>
      )}
    </form>
  );
};

export default ContactusComponent;
