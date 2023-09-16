import React, { useRef, useState } from 'react';
import contactStyles from './contact.module.css';
import formStyles from './form.module.css';

function Contact() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      return;
    }

    // Reset error message
    setError(null);

    // Proceed with form submission
    alert('Message info:\n' + JSON.stringify(formData));

    // Clear the form fields
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    emailRef.current.value = '';
    subjectRef.current.value = 'registration';
    messageRef.current.value = '';
  };

  return (
    <section className={formStyles.container}>
      <div className={formStyles.leftColumn}>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit} className={formStyles.form}>
          {error && <div className={contactStyles.error}>{error}</div>}
          <div className={contactStyles.name}>
            <label htmlFor="firstName" id="nameLabel">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={contactStyles.firstName}
              ref={firstNameRef}
              tabIndex="1"
            />

            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className={contactStyles.lastName}
              ref={lastNameRef}
              tabIndex="2"
            />
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={contactStyles.email}
            placeholder="example@corp.com"
            ref={emailRef}
            tabIndex="3"
          />

          <label>Subject</label>
          <select name="subject" className={contactStyles.subject} ref={subjectRef}>
            <option value="registration">Registration</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="payment">Payment</option>
            <option value="schoolprogram">School Program</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Start typing..."
            className={contactStyles.message}
            name="message"
            ref={messageRef}
          ></textarea>
          <div>
            <button type="submit" className={contactStyles.send}>
              Send
            </button>
          </div>
        </form>
      </div>
      <div className={formStyles.rightColumn}>
        <h1>Contact Information</h1>
        <p>
          <span className={contactStyles.contactLabel}>Phone:</span> +61 3 1234 5678
        </p>
        <p>
          <span className={contactStyles.contactLabel}>Email:</span> contact@futuresport.com.au
        </p>
        <p>
          <span className={contactStyles.contactLabel}>Postal Address:</span>
          100 Victoria Street, East Melbourne VIC 3000, Australia
        </p>
        <iframe
          className={contactStyles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2077333235216!2d144.97232821091632!3d-37.80860297186001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642c51e162e25%3A0x8783fa8be8a2816!2s100%20Victoria%20St%2C%20East%20Melbourne%20VIC%203002!5e0!3m2!1sen!2sau!4v1694826651184!5m2!1sen!2sau"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
