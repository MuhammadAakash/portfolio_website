import React, { useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';
const data = [
  {
    icon: <HiOutlineMail className='contact-option-icon'/>,
    subject: "Email",
    text: "muhammadaakash249@gmail.com",
    sendTo: "mailto:muhammadaakash249@gmail.com"
  },
  {
    icon: <FaFacebookMessenger className='contact-option-icon'/>,
    subject: "Messenger",
    text: "Mohamamd Aakash",
    sendTo: "https://m.me/aakashsial254"
  },
  {
    icon: <BsWhatsapp className='contact-option-icon'/>,
    subject: "Whatsapp",
    text: "+923407479249",
    sendTo: "https://api.whatsapp.com/send?phone=923407479249"
  },

]
function Contact() {
  const form: any = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_0yx3m8j', 'template_a99i5sp', form.current, 'Y2PN1NJal0GGC4xaQ')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
        {
          data.map(({ icon, subject, text, sendTo }) => {
            return (
              <article className="contact-option">
                {icon}
                <h4>{subject}</h4>
                <h5>{text}</h5>
                <a href={sendTo} target="_blank">Send a message</a>
              </article>
            )
          })
        }          
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary message">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact