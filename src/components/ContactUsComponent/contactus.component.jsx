import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { contactUsForm } from './contactus.module.scss';

const ContactusComponent = () => {
  const [emailSent, setEmailSent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
            setEmailSent(true);
            setName('');
            setEmail('');
            setMessage('');
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
  );
};

export default ContactusComponent;
