import React, { useRef } from 'react'
import contactStyles from './contact.module.css'
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

  }

  return (
    <div className={contactStyles.container}>
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
        <select name="subject" className="field-select" ref={subjectRef}>
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
  )
}



export default Contact;