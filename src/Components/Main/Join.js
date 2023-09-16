import React, { useRef, useState } from 'react'
import joinStyles from './join.module.css'
import formStyles from './form.module.css'

function Join() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const stateRef = useRef(null)
  const suburbRef = useRef(null)
  const birthRef = useRef(null)
  const genderRef = useRef(null)

  const [suburbError, setSuburbError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    // Validate the form fields
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const suburb = suburbRef.current.value

    if (!suburb) {
      setSuburbError(true)
    } else {
      setSuburbError(false)
    }

    if (!firstName || !lastName) {
      setNameError(true)
    } else {
      setNameError(false)
    }

    if (!email) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }

    // If there are errors, don't submit the form
    if (suburbError || nameError || emailError) {
      return
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      state: stateRef.current.value,
      suburb: suburb,
      birthday: birthRef.current.value,
      gender: genderRef.current.value,
    }
    alert("Data being sent: \n" + JSON.stringify(data))

    // Clear the form fields
    firstNameRef.current.value = ""
    lastNameRef.current.value = ""
    emailRef.current.value = ""
    stateRef.current.value = ""
    suburbRef.current.value = ""
    birthRef.current.value = ""
    genderRef.current.value = ""
  }

  return (
    <section className={formStyles.container}>
      <div className={formStyles.leftColumn}>
        <h1>Player Registration Form</h1>
        <form onSubmit={handleSubmit} className={joinStyles.form}>

          <div className={joinStyles.name}>
            <label htmlFor="firstName" id="nameLabel">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`${joinStyles.firstName} ${nameError ? joinStyles.errorField : ''}`}
              ref={firstNameRef}
              tabIndex="1"
            />

            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className={`${joinStyles.lastName} ${nameError ? joinStyles.errorField : ''}`}
              ref={lastNameRef}
              tabIndex="2"
            />
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={`${joinStyles.email} ${emailError ? joinStyles.errorField : ''}`}
            placeholder="example@corp.com"
            ref={emailRef}
            tabIndex="3"
          />
          {emailError && <p className={joinStyles.error}>Email is required</p>}

          <label htmlFor="state">Select your State:</label>
          <select
            id="state"
            name="state"
            ref={stateRef}
            className={joinStyles.list}
          >
            <option value="vic">VIC</option>
            <option value="nsw">NSW</option>
            <option value="qld">QLD</option>
            <option value="nt">NT</option>
            <option value="wa">WA</option>
            <option value="sa">SA</option>
            <option value="tas">TAS</option>
          </select>

          <label htmlFor="suburb">Suburb:<span className="required">*</span></label>
          <input type="text" name="suburb" ref={suburbRef} className={`${joinStyles.suburb} ${suburbError ? joinStyles.errorField : ''}`} />
          {suburbError && <p className={joinStyles.error}>Suburb is required</p>}

          <label htmlFor="birthday">Birthday:</label>
          <input type="date" name="birthday" ref={birthRef} className={joinStyles.list} />

          <label htmlFor="gender">Select your Gender:</label>
          <select id="gender" name="gender" ref={genderRef} className={joinStyles.list}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-b">Non-Binary</option>
            <option value="other">Other</option>
          </select>
          <div>
            <button type="submit" className={joinStyles.send}>Send</button>
          </div>
        </form>
      </div>
      <div className={formStyles.rightColumn}>
        <iframe className={joinStyles.clubStats} src="https://footystats.org/api/club?id=5" ></iframe>
      </div>
    </section>
  );
}

export default Join;
