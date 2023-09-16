import React, { useRef } from 'react'
import contactStyles from './contact.module.css'
import formStyles from './form.module.css'

function Contact() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const subjectRef = useRef(null)
  const messageRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value
    }
    alert("message info: \n" + JSON.stringify(data) + "the data 😎")

    // Clear the form fields
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "registration";
    messageRef.current.value = "";
  }

  return (
    <section className={formStyles.container}>
      <div className={formStyles.leftColumn}>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit} className={contactStyles.form}>
          <div className={contactStyles.name}>
            <label for="firstName" id="nameLabel">First Name</label>
            <input

              type="text"
              id="firstName"
              name="firstName"
              className={contactStyles.firstName}
              ref={firstNameRef}
              tabindex="1"
            />

            <label for="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className={contactStyles.lastName}
              ref={lastNameRef}
              tabindex="2"
            />
          </div>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={contactStyles.email}
            placeholder="example@corp.com"
            ref={emailRef}
            tabindex="3"
          />

          <label>Subject</label>
          <select name="subject" className={contactStyles.subject} ref={subjectRef}>
            <option value="registration">Registration</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="payment">Payment</option>
            <option value="schoolprogram">School Program</option>
            <option value="olther">Other</option>
          </select>

          <label for="message">Message</label>
          <textarea
            placeholder="Start typing..."
            className={contactStyles.message}
            name="message"
            ref={messageRef}
          >

          </textarea>
          <button type="submit" className={contactStyles.send}>Send</button>
        </form>
      </div>
      <div className={formStyles.rightColumn}>
        <h1>Contact Information</h1>
        <p><span class="contact-label">Phone:</span> +61 3 1234 5678</p>
        <p><span class="contact-label">Email:</span> contact@victoria.com.au</p>
        <p><span class="contact-label">Postal Address:</span>
          100 Victoria Street,
          East Melbourne VIC 3000,
          Australia</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2077333235216!2d144.97232821091632!3d-37.80860297186001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642c51e162e25%3A0x8783fa8be8a2816!2s100%20Victoria%20St%2C%20East%20Melbourne%20VIC%203002!5e0!3m2!1sen!2sau!4v1694826651184!5m2!1sen!2sau" ></iframe>

      </div>

    </section>
  )
}



export default Contact;