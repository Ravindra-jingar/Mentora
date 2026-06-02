import { useState } from "react"

function Contact() {
 
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")

  function handleSubmit(e) {

    e.preventDefault()

    alert("Form Submitted")

    setName("")
    setEmail("")
  }

  return (

    <div className="form-container">

      <h1>Student Registration</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>
       
      </form>
     
    </div>
  )
}

export default Contact