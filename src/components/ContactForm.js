import React, { useEffect, useRef, useState } from 'react'
import emailjs, { init } from 'emailjs-com'

import './ContactForm.css'

const EMAILJS = {
  //TODO: Change credentials to PhoneBox account and hide them
  user_id: "user_HD278ebmTPb2FQEswUWJW",
  service_id: "service_jno9n4u",
  template_id: "contact_form",
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef()
  
  const onSendMessage = e => {
    e.preventDefault();
    if (email !== '' && name !== '' && message !== '') {
      init(EMAILJS.user_id);
      emailjs
        .sendForm(
          EMAILJS.service_id,
          EMAILJS.template_id,
          form.current,
          EMAILJS.user_id
        ).then(
          (response) => {
            console.log(response);
          },
          (err) => {
            console.log(err.text);
          }
        );
    } else {
      /* ERROR: Should never reach this point */
    }
  }

  return (
    <div className="contact">
      <form
        ref={form}
        className="contact-form"
        onSubmit={onSendMessage}
      >
        <label htmlFor="name">Nombre:</label>
        <input
          name="from_name"
          type="text"
          id="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="email">Correo:</label>
        <input
          name="from_email"
          type="email"
          id="email"
          required
          value={email}
          onChange={(e => setEmail(e.target.value))}
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          id="message"
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          className='contact-form__submit'
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm
