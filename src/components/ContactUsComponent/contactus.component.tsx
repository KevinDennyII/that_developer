import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import BlackManTyping from '../../images/Black-Man-Using-Laptop-A.png';
import BlackWomanTyping from '../../images/Black-Woman-Using-Laptop-D.png';
import {
  contactUsForm,
  sendMsgTitle,
  sendMsgImg,
  row,
  column,
} from './contactus.module.scss';

type DOMEvent = {
  target: {
    value: React.SetStateAction<string>
  }
}

// Our form is an HTMLFormElement with some known elements.
// So we extend HTMLFormElement and override the elements to have the elements
// we want it to. The HTMLFormElement['elements'] type is a
// HTMLFormControlsCollection, so make our own version of that interface as well.
interface FormElements extends HTMLFormControlsCollection {
  emailInput: HTMLInputElement;
  nameInput: HTMLInputElement;
  messageInput: HTMLInputElement;
}
interface SendEmailFormElement extends HTMLFormElement {
  elements: FormElements
}


function ContactusComponent() {
  // boolean for keeping state when an email has been successfully sent
  const [emailSent, setEmailSent] = useState(false);

  // setting state of input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // boolean for tracking an empty value on form
  const [emptyVal, setEmptyVal] = useState(true);

  // capturing input values
  function onChangeValueName(event: DOMEvent) {
    setName(event.target.value);
    setEmptyVal(false);
  }

  function onChangeValueEmail(event: DOMEvent) {
    setEmail(event.target.value);
    setEmptyVal(false);
  }

  function onChangeValueMessage(event: DOMEvent) {
    setMessage(event.target.value);
    setEmptyVal(false);
  }

  function onSubmitEmail(
    name: string,
    email: string,
    message: string,
    event: React.FormEvent<SendEmailFormElement>
  ){
  if (email === '' || name === '' || message === '') {
    setEmptyVal(true);
  } else {
    emailjs
      .sendForm(
        'service_l0rvoye',
        'template_vndqkt5',
        event.currentTarget,
        'user_l0oK6TFE1fDsOnX5tnF76',
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(
            `Name: ${name}`,
            `Email: ${email}`,
            `Message: ${message}`,
          );
          // email sent successfully, clear form values
          setEmailSent(true);
          // resetting values
          setName('');
          setEmail('');
          setMessage('');
          // refreshing page after all is done with email
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setEmailSent(false);
        },
      );
  }
}
  // Sending email
  function handleSubmit(event: React.FormEvent<SendEmailFormElement>){
    event.preventDefault();
    console.log("here")
    console.log(event.currentTarget.elements.emailInput.value)
    console.log(event.currentTarget.elements.nameInput.value)
    console.log(event.currentTarget.elements.messageInput.value)
    onSubmitEmail(
      event.currentTarget.elements.nameInput.value,
      event.currentTarget.elements.emailInput.value,
      event.currentTarget.elements.messageInput.value,
      event
    )
  }

  return (
    <div>
      <div className={row}>
        <div className={column}>
          <img
            src={BlackManTyping}
            className={sendMsgImg}
            alt="Black man sitting at desk typing on a laptop"
          />
        </div>
        <div className={`${column} ${sendMsgTitle}`}>
          <h3>Share what&apos;s on your heart and mind.</h3>
        </div>
        <div className={column}>
          <img
            src={BlackWomanTyping}
            className={sendMsgImg}
            alt="Black woman sitting at desk typing on a laptop"
          />
        </div>
      </div>
      <form className={contactUsForm} onSubmit={handleSubmit}>
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
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={message}
            onChange={onChangeValueMessage}
          />
        </div>
        <ReCAPTCHA sitekey="6LfOpR0aAAAAANVkCaGd7_BRUFktzEgZaMVttv21" />
        <button className="btn btn-primary" type="submit" value="Send">
          Submit
        </button>
        {emailSent && (
          <p className="text-success" style={{ fontWeight: '700' }}>
            Email message was sent successfully!
          </p>
        )}
        {!emailSent && (
          <p className="text-danger" style={{ fontWeight: '700' }}>
            Oh no! Your email was not sent successfully :-(
          </p>
        )}
        {emptyVal && (
          <p className="text-danger" style={{ fontWeight: '700' }}>
            Please check your inputs and fill in all inputs appropriately
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactusComponent;
