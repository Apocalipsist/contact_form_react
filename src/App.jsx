import { useState } from "react"

export default function App () {
  const [contact, setNewContact] = useState({first: "", last: "", email: "", message: ""})
  const [newsLetter, setNewsLetter] = useState(true)
  const [showMod, setShowMod] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewContact({...contact, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.first && contact.last && contact.email && contact.message) {
     setShowMod(true);
    }
  }

  const closeMod = () => {
    setShowMod(false);
  }

  return (
  <>
    <form method="post" onSubmit={handleSubmit}>
        <h1>Contact us</h1>
        <div className="form-col">
          <input type="text" id="firstName"name="first" onChange={handleChange} value={contact.first} placeholder="Enter First Name" required/>
          <input type="text" id="lastName"name="last" onChange={handleChange} value={contact.last} placeholder="Enter Last Name" required/>
        </div>
        <input type="text" name="email" onChange={handleChange} value={contact.email} placeholder="Enter Email" required/>
        <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={contact.message} placeholder="Enter Question/Comment" required></textarea>  
        <label htmlFor="newsLetter">
          <input type="checkbox" id="newsLetterBox" checked={newsLetter} onChange={(e) => setNewsLetter(e.target.checked)}/>
          Accept marketing and offer emails
        </label>
        <button type="submit" >Submit</button>
    </form>
    {showMod && (
     <div className="modal">
       <div className="modal-content">
         <h2>Thank you, {contact.first.toUpperCase()}!</h2>
         <p>We appreciate your feedback and will get back to you soon.</p>
         <button onClick={closeMod}>Close</button>
       </div>
     </div>
   )}
  </>
  )
}