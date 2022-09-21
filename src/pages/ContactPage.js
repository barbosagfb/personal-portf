import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import '../styles/contactpage.css';

const ContactPage = () => {

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
        <textarea 
        className=""
        placeholder=""
        onChange={event=>(event.target.value)}
        autocomplete="off"
        name="Name"
        required
        />
       {/* </form> */}
      <label>Subject</label>
      {/* <form> */}
        <textarea 
        className=""
        onChange={event=>(event.target.value)}
        autocomplete="off"
        name="Subject"
        required
        />
       {/* </form> */}
      <label>Email</label>
      {/* <form> */}
        <textarea 
        className=""
        placeholder=""
        onChange={event=>(event.target.value)}
        autocomplete="off"
        name="Email"
        required
        />
       {/* </form> */}
      <label>Message</label>
      {/* <form> */}
        <textarea 
        className="inputm"
        placeholder=""
        onChange={event=>(event.target.value)}
        autocomplete="off"
        name="Message"
        required
        />
       </form>
      {/* <input class="inputm" name="message" type="text" autocomplete="off" value="" placeholder='You message'></input> */}
      <div className="buttons-container">
      <button id="btn"type="submit">SEND</button>
      <button type="submit">RESET</button>
      </div>
        </div>
        <div className="extra-container">
          <div className="extra-content">
        <label className="extra-label">{<AiIcons.AiOutlinePhone/>} Phone</label>
        <li>+5581 98705-6742</li>
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