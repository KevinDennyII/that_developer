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

const ContactusComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = (): boolean => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.from_name) tempErrors.from_name = 'Name is required.';
    if (!formData.reply_to) {
      tempErrors.reply_to = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.reply_to)) {
      tempErrors.reply_to = 'Email is not valid.';
    }
    if (!formData.message) tempErrors.message = 'Message is required.';
    if (!recaptchaToken) tempErrors.recaptcha = 'Please complete the ReCAPTCHA.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setEmailSent(null);

    const formElement = e.currentTarget;

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_l0rvoye',
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_vndqkt5',
      formElement,
      process.env.REACT_APP_EMAILJS_USER_ID || 'user_l0oK6TFE1fDsOnX5tnF76'
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      setEmailSent(true);
      setFormData({ from_name: '', reply_to: '', message: '' });
      // Consider resetting ReCAPTCHA if needed
    }, (error) => {
      console.log('Failed to send email.', error.text);
      setEmailSent(false);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

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
      <form className={contactUsForm} onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="contact_number" />
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="from_name"
            className="form-control"
            value={formData.from_name}
            onChange={handleChange}
          />
          {errors.from_name && <p className="text-danger">{errors.from_name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="reply_to"
            className="form-control"
            value={formData.reply_to}
            onChange={handleChange}
          />
          {errors.reply_to && <p className="text-danger">{errors.reply_to}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-danger">{errors.message}</p>}
        </div>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || "6LfOpR0aAAAAANVkCaGd7_BRUFktzEgZaMVttv21"}
          onChange={(token) => setRecaptchaToken(token)}
        />
        {errors.recaptcha && <p className="text-danger">{errors.recaptcha}</p>}
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {emailSent === true && (
          <p className="text-success" style={{ fontWeight: '700' }}>
            Email message was sent successfully!
          </p>
        )}
        {emailSent === false && (
          <p className="text-danger" style={{ fontWeight: '700' }}>
            Oh no! Your email was not sent successfully :-(
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactusComponent;
