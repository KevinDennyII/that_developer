import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import BlackManTyping from '../../images/Black-Man-Using-Laptop-A.png';
import BlackWomanTyping from '../../images/Black-Woman-Using-Laptop-D.png';
import styles from './contactus.module.scss';

type ContactField = 'from_name' | 'reply_to' | 'message' | 'recaptcha';
type ContactErrors = Partial<Record<ContactField, string>>;

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '';
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID ?? '';
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY ?? '';

/** Public client keys only; set in `.env.local` (see `.env.example`). Never commit secrets. */
const isContactFormConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_USER_ID && RECAPTCHA_SITE_KEY,
);

const ContactusComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = (): boolean => {
    const next: ContactErrors = {};
    if (!formData.from_name.trim()) next.from_name = 'Name is required.';
    if (!formData.reply_to.trim()) {
      next.reply_to = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.reply_to.trim())) {
      next.reply_to = 'Email is not valid.';
    }
    if (!formData.message.trim()) next.message = 'Message is required.';
    if (isContactFormConfigured && !recaptchaToken) {
      next.recaptcha = 'Please complete the ReCAPTCHA.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isContactFormConfigured) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setEmailSent(null);

    const formElement = e.currentTarget;

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formElement, EMAILJS_USER_ID)
      .then(
        () => {
          setEmailSent(true);
          setFormData({ from_name: '', reply_to: '', message: '' });
          setRecaptchaToken(null);
        },
        () => {
          setEmailSent(false);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <img
            src={BlackManTyping}
            className={styles.sendMsgImg}
            alt="Black man sitting at desk typing on a laptop"
          />
        </div>
        <div className={`${styles.column} ${styles.sendMsgTitle}`}>
          <h3>Share what&apos;s on your heart and mind.</h3>
        </div>
        <div className={styles.column}>
          <img
            src={BlackWomanTyping}
            className={styles.sendMsgImg}
            alt="Black woman sitting at desk typing on a laptop"
          />
        </div>
      </div>
      {!isContactFormConfigured && (
        <p className="alert alert-warning" role="alert">
          Contact form is not configured. Add{' '}
          <code>REACT_APP_EMAILJS_*</code> and <code>REACT_APP_RECAPTCHA_SITE_KEY</code> to{' '}
          <code>.env.local</code> (see <code>.env.example</code>).
        </p>
      )}
      <form className={styles.contactUsForm} onSubmit={handleSubmit} noValidate>
        <fieldset
          className={styles.formFieldset}
          disabled={!isContactFormConfigured || isSubmitting}
        >
          <input type="hidden" name="contact_number" />
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="from_name"
              autoComplete="name"
              className="form-control"
              value={formData.from_name}
              onChange={handleChange}
            />
            {errors.from_name && <p className="text-danger">{errors.from_name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="reply_to"
              autoComplete="email"
              inputMode="email"
              className="form-control"
              value={formData.reply_to}
              onChange={handleChange}
            />
            {errors.reply_to && <p className="text-danger">{errors.reply_to}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              autoComplete="off"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-danger">{errors.message}</p>}
          </div>
          {RECAPTCHA_SITE_KEY ? (
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token: string | null) => setRecaptchaToken(token)}
            />
          ) : (
            <p className="text-muted small" role="status">
              reCAPTCHA site key missing.
            </p>
          )}
          {errors.recaptcha && <p className="text-danger">{errors.recaptcha}</p>}
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </fieldset>
        {emailSent === true && (
          <p className="text-success" style={{ fontWeight: '700' }}>
            Email message was sent successfully!
          </p>
        )}
        {emailSent === false && (
          <p className="text-danger" style={{ fontWeight: '700' }}>
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactusComponent;
