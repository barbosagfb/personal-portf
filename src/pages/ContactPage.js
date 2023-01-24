import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import '../styles/contactpage.css';
import { login } from '../utils';

const ContactPage = () => {
const [name,setName]=useState('')
const [subject,setSubject]=useState('')
const [email,setEmail]=useState('')
const [message,setMessage]=useState('')
const [error,setError]=useState(null)
const [loading,setLoading]=useState(false)
const [invalid,setInvalid]=useState(true)


const handleNameChange=(e)=>{
  setName(e.target.value)
}
const handleSubjectChange=(e)=>{
  setSubject(e.target.value)
}
const handleEmailChange=(e)=>{
  setEmail(e.target.value)
  if((email).length < 4){
    setInvalid(true)
  }else{
    setInvalid(false)
  }
}
const handleMessageChange=(e)=>{
  setMessage(e.target.value)
}

const handleResetBtn=()=>{
  setName('')
  setSubject('')
  setEmail('')
  setMessage('')
  setError(null)
}


const handleSubmit=()=>{
  setError(null)
  setLoading(true)

  let values={
    name:name,
    subject:subject,
    email:email,
    message:message
  }
  login(values)
.then(()=>{
  console.log(JSON.stringify(values))
  alert('your message was sent successfully')
  handleResetBtn()

})
.catch((error)=>{
  setError(error)
  setEmail('')

})
.finally(()=>{
  setLoading(false)
})
}

  return(
    <>
    <div className="contact-title">
        <h3>Contacts</h3>
        </div>
        <body className="pg-container">
        <div className="message-container">
      <div className="message-title"><label>Comments or suggestions? Send me a mail!</label></div>
      <label>Name</label>
      <form>
        <input
        className=""
        placeholder=""
        onChange={handleNameChange}
        // onChange={event=>(event.target.value)}
        autoComplete="off"
        name="Name"
        value={name}
        />
       {/* </form> */}
      <label>Subject</label>
      {/* <form> */}
        <input 
        className=""
        onChange={handleSubjectChange}
        autoComplete="off"
        name="Subject"
        value={subject}
        />
       {/* </form> */}
      <label htmlFor='email'>Email</label>
      {/* <form> */}
        <input 
        id="email"
        type="email"
        className=""
        placeholder=""
        onChange={handleEmailChange}
        autoComplete="off"
        name="email"
        value={email}
        />
        {error && <div className='error-message'>{error.message}</div>}
       {/* </form> */}
      <label>Message</label>
      {/* <form> */}
        <textarea
        className="inputm"
        placeholder=""
        onChange={handleMessageChange}
        autoComplete="off"
        name="Message"
        value={message}
        />
      {/* <input class="inputm" name="message" type="text" autoComplete="off" value="" placeholder='You message'></input> */}
       </form>
      <div disabled className="buttons-container">
      <button
      className='send-btn'
      onClick={handleSubmit}
      disabled={invalid || email === '' || name.length === '' || message.length < 4 || loading }
      >SEND</button>
      <button 
      className="reset-btn" 
      onClick={handleResetBtn}
      disabled={invalid || email === '' || name.length < 1 || subject.length < 1 || loading }
      >RESET</button>
      </div>
        </div>
        <div className="extra-container">
          <div className="extra-content">
        <label className="extra-label">{<AiIcons.AiOutlinePhone/>} Phone</label>
        <li>+55 81 98705-6742</li>
        <label className="extra-label">{<AiIcons.AiOutlineMail/>} Email</label>
        <li>barbosagfb@gmail.com</li>
        <label className="extra-label">{<FaIcons.FaMapPin/>} Adress</label>
        <li>Porto da Madeira, Recife - PE</li>
          </div>
        </div>
    </body>
    </>
  );
}


export default ContactPage;