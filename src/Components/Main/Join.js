
import React, { useRef } from 'react'
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

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      state: stateRef.current.value,
      suburb: suburbRef.current.value,
      birthday: birthRef.current.value,
      gender: genderRef.current.value,
    }
    alert("message info: \n" + JSON.stringify(data) + "the data 😎")

    // Clear the form fields
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    stateRef.current.value = "";
    suburbRef.current.value = "";
    birthRef.current.value = "";
    genderRef.current.value = "";
  }

  return (
    <section className={formStyles.container}>
      <div className={formStyles.leftColumn}>
        <h1>Player Registration Form</h1>
        <form onSubmit={handleSubmit} className={joinStyles.form}>

          <div className={joinStyles.name}>
            <label for="firstName" id="nameLabel">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={joinStyles.firstName}
              ref={firstNameRef}
              tabindex="1"
            />

            <label for="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              className={joinStyles.lastName}
              ref={lastNameRef}
              tabindex="2"
            />
          </div>

          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={joinStyles.email}
            placeholder="example@corp.com"
            ref={emailRef}
            tabindex="3"
          />

          <label for="state">Select your State:</label>
          <select
            id="state"
            name="state"
            ref={stateRef}
            className={joinStyles.list}>
            <option value="vic">VIC</option>
            <option value="nsw">NSW</option>
            <option value="qld">QLD</option>
            <option value="nt">NT</option>
            <option value="wa">WA</option>
            <option value="sa">SA</option>
            <option value="tas">TAS</option>
          </select>

          <label for="suburb">Suburb:<span className="required">*</span></label>
          <input type="text" name="suburb" ref={suburbRef} className={joinStyles.suburb} />

          <label for="birthday">Birthday:</label>
          <input type="date" name="birthday" ref={birthRef} className={joinStyles.list} />

          <label for="gender">Select your Gender:</label>
          <select id="gender" name="gender" ref={genderRef} className={joinStyles.list}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-b">Non-Binary</option>
            <option value="other">Other</option>
          </select>

          <button type="submit" className={joinStyles.send}>Send</button>
        </form>
      </div>
      <div className={formStyles.rightColumn}>
        <iframe src="https://footystats.org/api/club?id=5" ></iframe>
      </div>
    </section>

  )
}



export default Join;