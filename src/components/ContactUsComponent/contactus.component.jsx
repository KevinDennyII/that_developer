import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import BlackManTyping from '../../images/Black-Man-Using-Laptop-A.png';
import BlackWomanTyping from '../../images/Black-Woman-Using-Laptop-D.png';
import {
  contactUsForm, sendMsgTitle, sendMsgImg, row, column,
} from './contactus.module.scss';

const ContactusComponent = () => {
  // boolean for keeping state when an email has been successfully sent
  const [emailSent, setEmailSent] = useState('');

  // setting state of input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // boolean for tracking an empty value on form
  const [emptyVal, setEmptyVal] = useState('');

  // capturing input values
  const onChangeValueName = (e) => {
    setName(e.target.value);
    setEmptyVal(false);
  };
  const onChangeValueEmail = (e) => {
    setEmail(e.target.value);
    setEmptyVal(false);
  };
  const onChangeValueMessage = (e) => {
    setMessage(e.target.value);
    setEmptyVal(false);
  };

  // Sending email
  const sendEmail = (e) => {
    e.preventDefault();
    if (email === '' || name === '' || message === '') {
      setEmptyVal(true);
    } else {
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
            console.log(`Name: ${name}`, `Email: ${email}`, `Message: ${message}`);
            // email sent successfully
            setEmailSent(true);
            // resetting values
            setName('');
            setEmail('');
            setMessage('');
            // refreshing page after all is done with email
            setTimeout(() => {
              window.location.reload(1);
            }, 5000);
          },
          (error) => {
            console.log(error.text);
            setEmailSent(false);
          },
        );
    }
  };

  return (
    <div>
      <div className={row}>
        <div className={column}>
          <img src={BlackManTyping} className={sendMsgImg} alt="Black man sitting at desk typing on a laptop" />
        </div>
        <div className={`${column} ${sendMsgTitle}`}><h3>Share what&apos;s on your heart and mind.</h3></div>
        <div className={column}>
          <img src={BlackWomanTyping} className={sendMsgImg} alt="Black woman sitting at desk typing on a laptop" />
        </div>
      </div>
      <form className={contactUsForm} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="hidden" name="contact_number" />
          <input
            className="form-control"
            id="name"
            type="text"
            name="from_name"
            value={name}
            onChange={onChangeValueName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="reply_to"
            value={email}
            onChange={onChangeValueEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" name="message" value={message} onChange={onChangeValueMessage} />
        </div>
        <div className="g-recaptcha" data-sitekey="6LfOpR0aAAAAANVkCaGd7_BRUFktzEgZaMVttv21" />
        <ReCAPTCHA
          sitekey="6LfOpR0aAAAAANVkCaGd7_BRUFktzEgZaMVttv21"
        />
        <button className="btn btn-primary" type="submit" value="Send">
          Submit
        </button>
        {emailSent && (
        <p className="text-success" style={{ fontWeight: '700' }}>Email message was sent successfully!</p>
        )}
        {emailSent === false && (
        <p className="text-danger" style={{ fontWeight: '700' }}>Oh no! Your email was not sent successfully :-(</p>
        )}
        {emptyVal && (
        <p className="text-danger" style={{ fontWeight: '700' }}>Please fill in all inputs appropriately</p>
        )}
      </form>
    </div>
  );
};

export default ContactusComponent;
